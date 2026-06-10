import { CatalogTabs } from '../components/CatalogTabs'
import { CtaSection } from '../components/CtaSection'

export function CatalogPage() {
  return (
    <main>
      <section className="page-hero visual-backdrop visual-backdrop--grocery">
        <p className="eyebrow">Каталог программ 1С</p>
        <h1>Лицензии 1С для учета, торговли, зарплаты и управления</h1>
        <p>
          Подберите решение под задачи компании: бухгалтерский учет, розничные
          продажи, склад, зарплата, документооборот или комплексная
          автоматизация.
        </p>
      </section>

      <section className="section visual-backdrop visual-backdrop--electronics">
        <CatalogTabs />
      </section>

      <CtaSection />
    </main>
  )
}
