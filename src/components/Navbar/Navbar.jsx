import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../../assets/EW Logo Horiz C.png'

/**
 * navLinks config:
 *   anchor   — scrolls to a section on the home page
 *   route    — navigates to a separate page via React Router
 *   dropdown — array of { label, route } sub-links
 *   cta      — styled as the primary call-to-action button
 */
const navLinks = [
  { label: 'About',    anchor: '#about' },
  { label: 'Programs', anchor: '#programs' },
  { label: 'Events',   anchor: '#events' },
  {
    label: 'Learning',
    route: '/learning',
    dropdown: [
      { label: 'Learning Center',      route: '/learning' },
      { label: 'Habitat Loss',         route: '/learning/habitat-loss' },
      { label: 'Urban Wildlife',       route: '/learning/urban-wildlife' },
      { label: 'Humane Coexistence',   route: '/learning/humane-coexistence' },
    ],
  },
  { label: 'Contact',  anchor: '#contact' },
  { label: 'Donate',   anchor: '#donate', cta: true },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const hamburgerRef = useRef(null)
  const drawerRef = useRef(null)
  const dropdownRef = useRef(null)
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
      if (!dropdownRef.current?.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  function closeAll() {
    setOpen(false)
    setDropdownOpen(false)
  }

  /**
   * Renders a single nav link, choosing between:
   *   <a href="...">     for anchor links (or cross-page anchor links)
   *   <Link to="...">   for page routes
   *   dropdown wrapper  for items with sub-links
   */
  function NavLink({ item, className, onClick }) {
    const linkClass = [className, item.cta ? styles.navCta : ''].filter(Boolean).join(' ')

    if (item.dropdown) {
      return (
        <div
          ref={dropdownRef}
          className={styles.dropdownWrapper}
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <Link
            to={item.route}
            className={`${linkClass} ${styles.dropdownTrigger}`}
            onClick={onClick}
          >
            {item.label}
            <span className={styles.dropdownCaret} aria-hidden="true">▾</span>
          </Link>
          <ul className={`${styles.dropdown} ${dropdownOpen ? styles.dropdownVisible : ''}`}>
            {item.dropdown.map(sub => (
              <li key={sub.route}>
                <Link to={sub.route} className={styles.dropdownItem} onClick={onClick}>
                  {sub.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )
    }

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

  // Mobile drawer: flatten dropdown into individual links
  function DrawerLink({ item }) {
    if (item.dropdown) {
      return (
        <>
          <li className={styles.drawerGroupLabel}>{item.label}</li>
          {item.dropdown.map(sub => (
            <li key={sub.route} className={styles.drawerSubItem}>
              <Link to={sub.route} className={styles.drawerLink} onClick={closeAll}>
                {sub.label}
              </Link>
            </li>
          ))}
        </>
      )
    }

    const linkClass = [styles.drawerLink, item.cta ? styles.navCta : ''].filter(Boolean).join(' ')

    if (item.route) {
      return (
        <li>
          <Link to={item.route} className={linkClass} onClick={closeAll}>
            {item.label}
          </Link>
        </li>
      )
    }

    const href = isHome ? item.anchor : `/${item.anchor}`
    return (
      <li>
        <a href={href} className={linkClass} onClick={closeAll}>
          {item.label}
        </a>
      </li>
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
            <li key={item.label} style={{ position: 'relative' }}>
              <NavLink item={item} className={styles.navLink} onClick={closeAll} />
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
          <DrawerLink key={item.label} item={item} />
        ))}
      </ul>
    </>
  )
}
