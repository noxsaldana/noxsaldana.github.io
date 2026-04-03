import styles from './Hero.module.css'
import icon from '../../assets/EW Icon C.png'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>Evolving Wildlife Foundation</p>
          <h1 className={styles.title}>
            Supporting <span>Coexistence</span> Through Education and Compassion
          </h1>
          <p className={styles.subtitle}>
            Dedicated to educating communities on humane ways to address wildlife
            conflicts and the dangers of using poisons — so people and wildlife
            can thrive together.
          </p>
          <div className={styles.buttons}>
            <a href="#about" className="btn-primary">Learn More</a>
            <a href="#donate" className="btn-secondary">Donate Now</a>
          </div>
        </div>

        <div className={styles.imageWrap}>
          <img src={icon} alt="Evolving Wildlife Foundation Icon" className={styles.icon} />
        </div>
      </div>
    </section>
  )
}
