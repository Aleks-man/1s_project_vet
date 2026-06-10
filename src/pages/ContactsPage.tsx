import { company } from '../data/site'
import { seoCities } from '../data/regions'

export function ContactsPage() {
  return (
    <main>
      <section className="page-hero visual-backdrop visual-backdrop--mixed">
        <p className="eyebrow">Контакты</p>
        <h1>Консультация по покупке, внедрению и сопровождению 1С</h1>
        <p>
          Свяжитесь с нами, чтобы подобрать программу 1С, уточнить стоимость
          лицензий, обсудить внедрение, обновления или сопровождение.
        </p>
      </section>

      <section className="section contact-layout visual-backdrop visual-backdrop--electronics" id="contact">
        <article className="contact-card">
          <span>Телефон</span>
          <a href={company.phoneHref}>{company.phone}</a>
        </article>
        <article className="contact-card">
          <span>Регион работы</span>
          <strong>Симферополь, Севастополь и Крым</strong>
        </article>
        <article className="contact-card">
          <span>География работы</span>
          <strong>{seoCities.join(', ')}</strong>
        </article>
      </section>
    </main>
  )
}
