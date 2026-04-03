import styles from './About.module.css'
import logoVert from '../../assets/EW Logo Vert C.png'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="section-inner">
        <div className={styles.grid}>
          <div className={styles.imageWrap}>
            <img src={logoVert} alt="Evolving Wildlife Foundation" className={styles.logo} />
          </div>
          <div className={styles.text}>
            <p className="section-eyebrow">Our Mission</p>
            <h2 className="section-title">
              Help Us <span>Protect Wildlife</span> and Our Communities
            </h2>
            <div className="divider" />
            <p className="section-body">
              Evolving Wildlife Foundation is a startup non-profit dedicated to educating
              the public about humane ways to address wildlife conflicts and the dangers of
              using poisons. Through our community events, school programs, and hands-on
              demonstrations, we're helping people learn how to live peacefully alongside
              local wildlife — safely, responsibly, and with respect for nature.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
