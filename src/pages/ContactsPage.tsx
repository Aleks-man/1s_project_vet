import { ContactLinks } from '../components/ContactLinks'
import { company } from '../data/site'

export function ContactsPage() {
  return (
    <main>
      <section className="page-hero visual-backdrop visual-backdrop--mixed">
        <p className="eyebrow">Контакты</p>
        <h1>Консультация по покупке, внедрению, обслуживанию и поддержке 1С</h1>
        <p>
          Свяжитесь с нами, чтобы подобрать программу 1С, уточнить стоимость
          лицензий, обсудить внедрение, обслуживание, обновления или поддержку.
        </p>
      </section>

      <section className="section visual-backdrop visual-backdrop--electronics" id="contact">
        <article className="contact-card contact-card--single">
          <div>
            <span>Наш телефон</span>
            <a href={company.phoneHref}>{company.phone}</a>
          </div>
          <div>
            <span>Наша почта</span>
            <a href={company.emailHref}>{company.email}</a>
          </div>
          <div>
            <span>Так же можете связаться с нами удобным для Вас способом</span>
            <ContactLinks />
          </div>
        </article>
      </section>
    </main>
  )
}
