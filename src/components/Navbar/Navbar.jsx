import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../../assets/EW Logo Horiz C.png'

/**
 * navLinks config:
 *   anchor — scrolls to a section on the home page
 *   route  — navigates to a separate page via React Router
 *   cta    — styled as the primary call-to-action button
 */
const navLinks = [
  { label: 'About',    anchor: '#about' },
  { label: 'Programs', anchor: '#programs' },
  { label: 'Events',   anchor: '#events' },
  { label: 'Learning', route: '/learning' },
  { label: 'Contact',  anchor: '#contact' },
  { label: 'Donate',   anchor: '#donate', cta: true },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const hamburgerRef = useRef(null)
  const drawerRef = useRef(null)
  const location = useLocation()
  const isHome = location.pathname === '/'

  // Close drawer on outside click
  useEffect(() => {
    function handleClick(e) {
      if (
        !hamburgerRef.current?.contains(e.target) &&
        !drawerRef.current?.contains(e.target)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  function closeDrawer() {
    setOpen(false)
  }

  /**
   * Renders a single nav link, choosing between:
   *   <a href="...">     for anchor links (or cross-page anchor links)
   *   <Link to="...">   for page routes
   */
  function NavLink({ item, className, onClick }) {
    const linkClass = [className, item.cta ? styles.navCta : ''].filter(Boolean).join(' ')

    if (item.route) {
      return (
        <Link to={item.route} className={linkClass} onClick={onClick}>
          {item.label}
        </Link>
      )
    }

    // On the home page use a plain anchor; from other pages prepend '/' so the
    // browser navigates home first and then jumps to the section.
    const href = isHome ? item.anchor : `/${item.anchor}`

    return (
      <a href={href} className={linkClass} onClick={onClick}>
        {item.label}
      </a>
    )
  }

  return (
    <>
      <nav className={styles.nav}>
        <a className={styles.navLogo} href="/">
          <img src={logo} alt="Evolving Wildlife Foundation" />
        </a>

        {/* Desktop links */}
        <ul className={styles.navLinks}>
          {navLinks.map(item => (
            <li key={item.label}>
              <NavLink item={item} className={styles.navLink} />
            </li>
          ))}
        </ul>

        {/* Hamburger (mobile only) */}
        <button
          ref={hamburgerRef}
          className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="nav-drawer"
          onClick={() => setOpen(prev => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile drawer */}
      <ul
        id="nav-drawer"
        ref={drawerRef}
        className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}
        role="menu"
      >
        {navLinks.map(item => (
          <li key={item.label}>
            <NavLink item={item} className={styles.drawerLink} onClick={closeDrawer} />
          </li>
        ))}
      </ul>
    </>
  )
}
