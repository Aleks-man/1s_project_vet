const contactLinks = [
  {
    label: "Telegram",
    className: "contact-icon contact-icon--telegram",
    icon: "/icons/telegram.svg",
  },
  {
    label: "WhatsApp",
    className: "contact-icon contact-icon--whatsapp",
    icon: "/icons/whatsapp.svg",
  },
  {
    label: "MAX",
    className: "contact-icon contact-icon--max",
    icon: "/icons/max.svg",
  },
  {
    label: "Почта",
    className: "contact-icon contact-icon--mail",
    icon: "/icons/email.svg",
  },
];

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
