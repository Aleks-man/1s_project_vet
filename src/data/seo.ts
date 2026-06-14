import { products } from './products'

export const siteUrl = 'https://example.ru'

export type SeoMeta = {
  title: string
  description: string
  canonical: string
  image?: string
  schemaType?: 'WebPage' | 'CollectionPage' | 'Product' | 'ContactPage'
}

const defaultTitle = '1С в Крыму и Севастополе | Лицензии, внедрение и сопровождение'
const defaultDescription =
  'Подбор, продажа, внедрение и сопровождение программ 1С для бизнеса в Симферополе, Севастополе и городах Крыма.'

const staticPages: Record<string, Omit<SeoMeta, 'canonical'>> = {
  '/': {
    title: defaultTitle,
    description: defaultDescription,
    image: '/hero-commerce-bg.png',
    schemaType: 'WebPage',
  },
  '/catalog': {
    title: 'Каталог программ 1С | Купить 1С для бизнеса в Крыму и Севастополе',
    description:
      'Популярные программы 1С для бухгалтерии, торговли, кадрового учета, документооборота и комплексной автоматизации бизнеса.',
    image: '/products/1c-buhgalteriya-prof.png',
    schemaType: 'CollectionPage',
  },
  '/services': {
    title: 'Сервисы 1С | Установка, настройка, сопровождение и поддержка',
    description:
      'Поможем подобрать, установить, настроить и сопровождать 1С. Поддержка пользователей, обновления, консультации и развитие учета.',
    image: '/retail-mixed-bg.png',
    schemaType: 'WebPage',
  },
  '/contacts': {
    title: 'Контакты | Консультация по покупке и обслуживанию 1С',
    description:
      'Свяжитесь с нами, чтобы подобрать программу 1С, уточнить стоимость, заказать установку, настройку или сопровождение.',
    image: '/logo-1c.svg',
    schemaType: 'ContactPage',
  },
}

export function getPrerenderRoutes() {
  return ['/', '/catalog', ...products.map((product) => `/catalog/${product.slug}`), '/services', '/contacts']
}

export function getSeoMeta(pathname: string): SeoMeta {
  const normalizedPath = pathname === '' ? '/' : pathname.replace(/\/$/, '') || '/'
  const productSlug = normalizedPath.startsWith('/catalog/') ? normalizedPath.replace('/catalog/', '') : ''
  const product = products.find((item) => item.slug === productSlug)

  if (product) {
    return {
      title: `${product.name} | Купить, установить и настроить 1С в Крыму`,
      description: `${product.text} Поможем подобрать лицензию, установить программу, настроить учет и сопровождение.`,
      canonical: `${siteUrl}/catalog/${product.slug}`,
      image: product.image,
      schemaType: 'Product',
    }
  }

  const page = staticPages[normalizedPath] ?? staticPages['/']

  return {
    ...page,
    canonical: normalizedPath === '/' ? `${siteUrl}/` : `${siteUrl}${normalizedPath}`,
  }
}
