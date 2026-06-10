import { company } from '../data/site'

export function CtaSection() {
  return (
    <section className="cta-section visual-backdrop visual-backdrop--mixed" id="contact">
      <div>
        <p className="eyebrow">Консультация специалиста</p>
        <h2>Есть вопрос по 1С? Обсудим задачу и предложим решение</h2>
        <p>
          Оставьте заявку или позвоните. Подскажем по лицензиям, ценам, переходу
          на 1С 8.3, обслуживанию, поддержке, ИТС и торговому оборудованию.
        </p>
      </div>
      <a className="button button-primary" href={company.phoneHref}>
        Позвонить
      </a>
    </section>
  )
}
