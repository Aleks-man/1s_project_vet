import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
import { getPrerenderRoutes, getSeoMeta } from './data/seo'

export { getPrerenderRoutes, getSeoMeta }

export function render(url: string) {
  return renderToString(
    <StrictMode>
      <App router="memory" location={url} />
    </StrictMode>,
  )
}
