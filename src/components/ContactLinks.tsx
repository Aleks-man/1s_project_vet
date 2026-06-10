const contactLinks = [
  {
    label: 'Telegram',
    className: 'contact-icon contact-icon--telegram',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M20.8 4.3 17.7 19c-.2.9-.8 1.1-1.5.7l-4.4-3.2-2.1 2c-.2.2-.4.4-.9.4l.3-4.5 8.2-7.4c.4-.3-.1-.5-.5-.2L6.7 13.2 2.3 11.8c-.9-.3-.9-.9.2-1.3L19.7 3.9c.8-.3 1.4.2 1.1.4Z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    className: 'contact-icon contact-icon--whatsapp',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M12 3.2a8.6 8.6 0 0 0-7.3 13.1l-.9 3.5 3.6-.9A8.6 8.6 0 1 0 12 3.2Zm4.9 12.2c-.2.5-1.1 1-1.5 1.1-.4.1-.9.2-1.5-.1-.3-.1-.8-.2-1.4-.5-2.4-1-4-3.4-4.1-3.6-.1-.1-1-1.3-1-2.5s.6-1.8.8-2c.2-.2.4-.3.6-.3h.4c.1 0 .3 0 .4.3.2.4.6 1.5.7 1.6.1.1.1.3 0 .5-.1.2-.2.3-.3.5l-.3.4c-.1.1-.2.3-.1.5.1.2.5.9 1.1 1.4.8.7 1.4 1 1.6 1.1.2.1.4.1.5-.1.2-.2.6-.7.7-.9.2-.2.3-.2.5-.1.2.1 1.4.7 1.7.8.2.1.4.2.5.3.1.1.1.6-.1 1.1Z" />
      </svg>
    ),
  },
  {
    label: 'MAX',
    className: 'contact-icon contact-icon--max',
    icon: <span aria-hidden="true">MAX</span>,
  },
  {
    label: 'Почта',
    className: 'contact-icon contact-icon--mail',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 6h15A1.5 1.5 0 0 1 21 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 16.5v-9A1.5 1.5 0 0 1 4.5 6Zm.9 2 6.6 4.6L18.6 8H5.4Zm13.6 2-6.5 4.5a.9.9 0 0 1-1 0L5 10v6h14v-6Z" />
      </svg>
    ),
  },
]

export function ContactLinks() {
  return (
    <div className="contact-links" aria-label="Мессенджеры и почта">
      {contactLinks.map((item) => (
        <a className={item.className} href="#" key={item.label} aria-label={item.label} title={item.label}>
          {item.icon}
        </a>
      ))}
    </div>
  )
}
