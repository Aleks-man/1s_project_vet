import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { company, navigation } from '../data/site'

export function Header() {
  const [isMobileNavDocked, setIsMobileNavDocked] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsMobileNavDocked(window.scrollY > 120)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className="site-header" aria-label="Главная навигация">
        <Link className="brand" to="/" aria-label={company.name}>
          <span className="brand-mark" aria-hidden="true">
            <img src="/logo-1c.svg" alt="" />
          </span>
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

      <nav
        className={`mobile-nav${isMobileNavDocked ? ' mobile-nav--bottom' : ''}`}
        aria-label="Мобильная навигация"
      >
        {navigation.map((item) => (
          <NavLink to={item.href} key={item.label}>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </>
  )
}
