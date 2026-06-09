import { company, navigation } from '../data/site'

export function Header() {
  return (
    <header className="site-header" aria-label="Главная навигация">
      <a className="brand" href="/" aria-label={company.name}>
        <span className="brand-mark">1С</span>
        <span>
          <strong>{company.name}</strong>
          <small>{company.tagline}</small>
        </span>
      </a>

      <nav className="main-nav">
        {navigation.map((item) => (
          <a href={item.href} key={item.label}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="phone-link" href={company.phoneHref}>
        {company.phone}
      </a>
    </header>
  )
}
