import { CatalogTabs } from './CatalogTabs'

export function ProductSection() {
  return (
    <section className="section" id="catalog">
      <div className="section-heading">
        <p className="eyebrow">Популярные решения</p>
        <h2>Программы 1С, которые чаще всего выбирают компании</h2>
      </div>

      <CatalogTabs />
    </section>
  )
}
