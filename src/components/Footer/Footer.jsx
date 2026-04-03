import styles from './Footer.module.css'
import logo from '../../assets/EW Logo Horiz C.png'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={logo} alt="Evolving Wildlife Foundation" className={styles.logo} />
      <p>&copy; 2026 Evolving Wildlife Foundation. All rights reserved.</p>
      <p style={{ marginTop: '8px' }}>
        <a href="mailto:help@evolvingwildlifefoundation.com">
          help@evolvingwildlifefoundation.com
        </a>
      </p>
    </footer>
  )
}
