import { useEffect, useRef } from 'react'
import styles from './Programs.module.css'

const programs = [
  {
    id: 'community',
    title: 'Community Events',
    description:
      'Free educational events for families and the public — building awareness and fostering compassion for local wildlife.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 'school',
    title: 'School Programs',
    description:
      'Hands-on demonstrations and curriculum designed to teach the next generation about peaceful wildlife coexistence.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    id: 'poison',
    title: 'Poison Awareness',
    description:
      'Raising awareness about the environmental dangers of rodenticides and poisons on wildlife ecosystems.',
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  {
    id: 'outreach',
    title: 'Community Outreach',
    description:
      'Providing humane wildlife resources and support programs to local communities navigating wildlife conflicts.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
]

export default function Programs() {
  const parallaxRef = useRef(null)

  useEffect(() => {
    function updateParallax() {
      const bg = parallaxRef.current
      if (!bg) return
      const section = bg.closest('section')
      const rect = section.getBoundingClientRect()
      const vh = window.innerHeight
      if (rect.bottom < 0 || rect.top > vh) return
      const progress = 1 - rect.bottom / (vh + rect.height)
      const shift = (progress - 0.5) * 120
      bg.style.transform = `translateY(${shift}px)`
    }

    window.addEventListener('scroll', updateParallax, { passive: true })
    window.addEventListener('resize', updateParallax, { passive: true })
    updateParallax()
    return () => {
      window.removeEventListener('scroll', updateParallax)
      window.removeEventListener('resize', updateParallax)
    }
  }, [])

  return (
    <section id="programs" className={styles.programs}>
      <div ref={parallaxRef} className={styles.parallaxBg} aria-hidden="true" />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={`section-inner ${styles.inner}`}>
        <div className={styles.header}>
          <p className="section-eyebrow">What We Do</p>
          <h2 className="section-title">
            Our <span>Programs</span> &amp; Services
          </h2>
          <div className="divider" />
          <p className="section-body">
            Your donation helps us deliver free, impactful programs that reach families,
            schools, and communities across the region.
          </p>
        </div>

        <div className={styles.grid}>
          {programs.map(program => (
            <div key={program.id} className={styles.card}>
              <div className={styles.iconWrap}>{program.icon}</div>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
