import { company } from "../data/site";

const contactLinks = [
  {
    label: "Telegram",
    className: "contact-icon contact-icon--telegram",
    icon: "/icons/telegram.svg",
    href: company.telegramHref,
  },
  {
    label: "WhatsApp",
    className: "contact-icon contact-icon--whatsapp",
    icon: "/icons/whatsapp.svg",
    href: company.whatsappHref,
  },
  {
    label: "MAX",
    className: "contact-icon contact-icon--max",
    icon: "/icons/max.svg",
    href: company.maxHref,
  },
  {
    label: "Почта",
    className: "contact-icon contact-icon--mail",
    icon: "/icons/email.svg",
    href: company.emailHref,
  },
];

export function ContactLinks() {
  return (
    <div className="contact-links" aria-label="Мессенджеры и почта">
      {contactLinks.map((item) => (
        <a
          className={item.className}
          href={item.href}
          key={item.label}
          aria-label={item.label}
          rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
          target={item.href.startsWith('http') ? '_blank' : undefined}
          title={item.label}
        >
          {'icon' in item ? <img src={item.icon} alt="" aria-hidden="true" /> : null}
        </a>
      ))}
    </div>
  )
}
