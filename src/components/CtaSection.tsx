import { company } from '../data/site'
import { ContactLinks } from './ContactLinks'

export function CtaSection() {
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
          <svg className="cta-phone-icon" aria-hidden="true" viewBox="0 0 24 24">
            <path d="M6.7 4.8 8.9 4c.7-.2 1.4.1 1.7.8l1 2.5c.2.6.1 1.2-.4 1.6l-1.2 1c.8 1.6 2.1 2.9 3.7 3.7l1-1.2c.4-.5 1.1-.6 1.6-.4l2.5 1c.7.3 1 1 .8 1.7l-.8 2.2c-.2.7-.9 1.1-1.6 1.1C10.9 18 6 13.1 6 6.8c0-.7.4-1.3 1.1-1.6Z" />
          </svg>
        </a>
        <a className="button cta-request-button" href="/contacts">
          Заказать звонок
        </a>
        <div className="cta-messengers">
          <span>Связаться с нами</span>
          <ContactLinks />
        </div>
      </div>
    </section>
  )
}
