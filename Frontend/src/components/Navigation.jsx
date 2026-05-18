import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Discover', to: '/discover' },
  { label: 'Routes', to: '/routes' },
  { label: 'About', to: '/about' },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="brand">
          <Link to="/" className="brand-link" onClick={closeMobileMenu}>
            TripoBD
          </Link>
        </div>

        <button 
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`main-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                isActive ? 'nav-link nav-active' : 'nav-link'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className={`header-actions ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link 
            to="/signin" 
            className="button button-outline" 
            onClick={closeMobileMenu}
          >
            Sign In
          </Link>
          <Link 
            to="/signup" 
            className="button button-primary" 
            onClick={closeMobileMenu}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  )
}
