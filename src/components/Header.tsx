import { type CSSProperties, useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { company, navigation } from '../data/site'

export function Header() {
  const mobileNavRef = useRef<HTMLElement>(null)
  const location = useLocation()
  const [isBottomNavVisible, setIsBottomNavVisible] = useState(false)
  const activeNavIndex = Math.max(
    navigation.findIndex((item) => item.href === location.pathname),
    0,
  )
  const mobileNavStyle = { '--active-index': activeNavIndex } as CSSProperties

  useEffect(() => {
    const handleScroll = () => {
      const mobileNav = mobileNavRef.current

      if (!mobileNav) {
        return
      }

      setIsBottomNavVisible(mobileNav.getBoundingClientRect().bottom < 0)
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
        ref={mobileNavRef}
        className="mobile-nav mobile-nav--top"
        style={mobileNavStyle}
        aria-label="Мобильная навигация"
      >
        {navigation.map((item) => (
          <NavLink to={item.href} key={item.label}>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <nav
        className={`mobile-nav mobile-nav--bottom${isBottomNavVisible ? ' mobile-nav--visible' : ''}`}
        style={mobileNavStyle}
        aria-label="Закрепленная мобильная навигация"
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
