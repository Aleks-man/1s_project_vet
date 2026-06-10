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
    icon: '/icons/max-messenger-sign-logo.svg',
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
          {'icon' in item ? <img src={item.icon} alt="" aria-hidden="true" /> : null}
        </a>
      ))}
    </div>
  )
}
