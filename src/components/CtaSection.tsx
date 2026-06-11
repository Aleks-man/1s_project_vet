import { company } from '../data/site'
import { ContactLinks } from './ContactLinks'

type CtaSectionProps = {
  onCallbackRequest: () => void
}

export function CtaSection({ onCallbackRequest }: CtaSectionProps) {
  return (
    <section className="cta-section" id="contact">
      <div>
        <p className="eyebrow">Консультация специалиста</p>
        <h2>Есть вопрос по 1С? Обсудим задачу и предложим решение</h2>
        <p>
          Оставьте заявку или позвоните. Подскажем по лицензиям, ценам, переходу
          на 1С 8.3, обслуживанию, поддержке, ИТС и торговому оборудованию.
        </p>
      </div>
      <div className="cta-actions">
        <a className="button cta-call-button" href={company.phoneHref}>
          <span>Позвонить</span>
          <span className="cta-phone-icon" aria-hidden="true" />
        </a>
        <button className="button cta-request-button" onClick={onCallbackRequest} type="button">
          Заказать звонок
        </button>
        <div className="cta-messengers">
          <span>Связаться с нами</span>
          <ContactLinks />
        </div>
      </div>
    </section>
  )
}
