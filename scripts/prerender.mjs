import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(__dirname, '..')
const distDir = path.join(projectRoot, 'dist')
const serverDir = path.join(distDir, 'server')
const templatePath = path.join(distDir, 'index.html')
const serverEntry = path.join(serverDir, 'entry-server.js')

const template = await readFile(templatePath, 'utf8')
const { render, getPrerenderRoutes, getSeoMeta } = await import(pathToFileURL(serverEntry))

for (const route of getPrerenderRoutes()) {
  const appHtml = render(route)
  const meta = getSeoMeta(route)
  const html = applySeo(template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`), meta)
  const filePath = route === '/' ? templatePath : path.join(distDir, route, 'index.html')

  await mkdir(path.dirname(filePath), { recursive: true })
  await writeFile(filePath, html, 'utf8')
}

await rm(serverDir, { recursive: true, force: true })

function applySeo(html, meta) {
  const image = meta.image ? new URL(meta.image, meta.canonical).href : undefined
  let nextHtml = html

  nextHtml = replaceTitle(nextHtml, meta.title)
  nextHtml = replaceMetaName(nextHtml, 'description', meta.description)
  nextHtml = replaceMetaProperty(nextHtml, 'og:title', meta.title)
  nextHtml = replaceMetaProperty(nextHtml, 'og:description', meta.description)
  nextHtml = replaceMetaProperty(nextHtml, 'og:url', meta.canonical)
  nextHtml = replaceLink(nextHtml, 'canonical', meta.canonical)
  nextHtml = image ? upsertMetaProperty(nextHtml, 'og:image', image) : nextHtml
  nextHtml = replaceJsonLd(nextHtml, createSchema(meta, image))

  return nextHtml
}

function replaceTitle(html, title) {
  return html.replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(title)}</title>`)
}

function replaceMetaName(html, name, content) {
  return html.replace(
    new RegExp(`<meta\\s+name="${escapeRegExp(name)}"[^>]*>`, 'i'),
    `<meta name="${name}" content="${escapeAttr(content)}" />`,
  )
}

function replaceMetaProperty(html, property, content) {
  return html.replace(
    new RegExp(`<meta\\s+property="${escapeRegExp(property)}"[^>]*>`, 'i'),
    `<meta property="${property}" content="${escapeAttr(content)}" />`,
  )
}

function upsertMetaProperty(html, property, content) {
  const metaPattern = new RegExp(`<meta\\s+property="${escapeRegExp(property)}"[^>]*>`, 'i')
  const tag = `<meta property="${property}" content="${escapeAttr(content)}" />`

  if (metaPattern.test(html)) {
    return html.replace(metaPattern, tag)
  }

  return html.replace('</head>', `    ${tag}\n  </head>`)
}

function replaceLink(html, rel, href) {
  return html.replace(
    new RegExp(`<link\\s+rel="${escapeRegExp(rel)}"[^>]*>`, 'i'),
    `<link rel="${rel}" href="${escapeAttr(href)}" />`,
  )
}

function replaceJsonLd(html, schema) {
  const json = JSON.stringify(schema)

  return html.replace(
    /<script type="application\/ld\+json">.*?<\/script>/s,
    `<script type="application/ld+json">${json}</script>`,
  )
}

function createSchema(meta, image) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': meta.schemaType ?? 'WebPage',
    name: meta.title,
    description: meta.description,
    url: meta.canonical,
  }

  if (image) {
    schema.image = image
  }

  return schema
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll('"', '&quot;')
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
