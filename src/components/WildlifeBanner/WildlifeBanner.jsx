import styles from './WildlifeBanner.module.css'
import banner from '../../assets/Evolving_Wildlife_Banner_transparent.png'

export default function WildlifeBanner() {
  return (
    <img
      src={banner}
      alt=""
      className={styles.banner}
      aria-hidden="true"
    />
  )
}
