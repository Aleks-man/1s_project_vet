import { Link, NavLink } from 'react-router-dom'
import { company, navigation } from '../data/site'

export function Header() {
  return (
    <header className="site-header" aria-label="Главная навигация">
      <Link className="brand" to="/" aria-label={company.name}>
        <span className="brand-mark">1С</span>
        <span>
          <strong>{company.name}</strong>
          <small>{company.tagline}</small>
        </span>
      </Link>

      <nav className="main-nav">
        {navigation.map((item) => (
          <NavLink to={item.href} key={item.label}>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <a className="phone-link" href={company.phoneHref}>
        {company.phone}
      </a>
    </header>
  )
}
