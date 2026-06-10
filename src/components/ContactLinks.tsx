const contactLinks = [
  {
    label: 'Telegram',
    className: 'contact-icon contact-icon--telegram',
  },
  {
    label: 'WhatsApp',
    className: 'contact-icon contact-icon--whatsapp',
  },
  {
    label: 'MAX',
    className: 'contact-icon contact-icon--max',
    text: 'MAX',
  },
  {
    label: 'Почта',
    className: 'contact-icon contact-icon--mail',
  },
]

export function ContactLinks() {
  return (
    <div className="contact-links" aria-label="Мессенджеры и почта">
      {contactLinks.map((item) => (
        <a className={item.className} href="#" key={item.label} aria-label={item.label} title={item.label}>
          {'text' in item ? <span aria-hidden="true">{item.text}</span> : null}
        </a>
      ))}
    </div>
  )
}
