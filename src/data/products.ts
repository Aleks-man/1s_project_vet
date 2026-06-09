export type ProductCategory = 'accounting' | 'trade' | 'management' | 'hr' | 'workflow'

export type Product = {
  slug: string
  name: string
  category: ProductCategory
  price: string
  delivery: string
  tags: string[]
  text: string
}

export const productCategories: Array<{
  id: ProductCategory | 'all'
  label: string
  description: string
}> = [
  {
    id: 'all',
    label: 'Все решения',
    description: 'Популярные программы 1С для учета, торговли, кадров и управления.',
  },
  {
    id: 'accounting',
    label: 'Бухгалтерия',
    description: 'Регламентированный учет, налоги, отчетность и первичные документы.',
  },
  {
    id: 'trade',
    label: 'Торговля',
    description: 'Продажи, закупки, склад, кассы и торговое оборудование.',
  },
  {
    id: 'management',
    label: 'Управление',
    description: 'CRM, финансы, производство, задачи и управленческая аналитика.',
  },
  {
    id: 'hr',
    label: 'Зарплата',
    description: 'Кадровый учет, расчет зарплаты и отчетность по сотрудникам.',
  },
  {
    id: 'workflow',
    label: 'Документы',
    description: 'Согласования, электронный архив и контроль исполнительской дисциплины.',
  },
]

export const products: Product[] = [
  {
    slug: '1c-buhgalteriya-prof',
    name: '1С:Бухгалтерия 8 ПРОФ',
    category: 'accounting',
    price: '23 000 ₽',
    delivery: 'Электронная поставка',
    tags: ['Популярное', 'Для ООО и ИП'],
    text: 'Учет, налоги, отчетность и работа с первичными документами.',
  },
  {
    slug: '1c-buhgalteriya-bazovaya',
    name: '1С:Бухгалтерия 8 Базовая',
    category: 'accounting',
    price: 'от 6 000 ₽',
    delivery: 'Базовая лицензия',
    tags: ['Для малого бизнеса'],
    text: 'Стартовое решение для простого учета одной организации.',
  },
  {
    slug: '1c-roznica',
    name: '1С:Розница 8',
    category: 'trade',
    price: 'от 16 200 ₽',
    delivery: 'Коробочная или электронная',
    tags: ['Для магазина', 'Кассы'],
    text: 'Розничные продажи, рабочее место кассира, склад и обмен с оборудованием.',
  },
  {
    slug: '1c-upravlenie-torgovley',
    name: '1С:Управление торговлей',
    category: 'trade',
    price: '39 700 ₽',
    delivery: 'ПРОФ-лицензия',
    tags: ['Опт и розница'],
    text: 'Оптовая и розничная торговля, закупки, склад и аналитика.',
  },
  {
    slug: '1c-unf',
    name: '1С:Управление нашей фирмой',
    category: 'management',
    price: '30 600 ₽',
    delivery: 'Электронная поставка',
    tags: ['CRM', 'Производство'],
    text: 'Продажи, склад, производство, финансы и CRM для малого бизнеса.',
  },
  {
    slug: '1c-kompleksnaya-avtomatizaciya',
    name: '1С:Комплексная автоматизация',
    category: 'management',
    price: 'от 95 000 ₽',
    delivery: 'Проектное внедрение',
    tags: ['Для компании'],
    text: 'Единый контур для торговли, склада, финансов, производства и персонала.',
  },
  {
    slug: '1c-zup',
    name: '1С:Зарплата и управление персоналом',
    category: 'hr',
    price: 'от 39 700 ₽',
    delivery: 'ПРОФ-лицензия',
    tags: ['Кадры', 'Отчетность'],
    text: 'Кадровый учет, расчет зарплаты и регламентированная отчетность.',
  },
  {
    slug: '1c-dokumentooborot',
    name: '1С:Документооборот',
    category: 'workflow',
    price: 'от 48 600 ₽',
    delivery: 'Серверная или облачная',
    tags: ['Согласования', 'Архив'],
    text: 'Электронные документы, маршруты согласования и контроль задач.',
  },
]
