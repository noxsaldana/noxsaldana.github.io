import { useState } from 'react'
import styles from './Donate.module.css'

const amounts = ['$10', '$25', '$50', '$100', 'Other']

export default function Donate() {
  const [selected, setSelected] = useState('$25')

  return (
    <section id="donate" className={styles.donate}>
      <div className="section-inner">
        <p className="section-eyebrow">Make a Difference</p>
        <h2 className="section-title">
          Support Our <span>Mission</span>
        </h2>
        <div className="divider" style={{ margin: '20px auto 32px' }} />
        <p className="section-body" style={{ margin: '0 auto 40px' }}>
          Every contribution, big or small, helps us continue our mission. Together,
          we can make a difference for wildlife and the communities that share their habitat.
        </p>

        <div className={styles.options}>
          {amounts.map(amount => (
            <button
              key={amount}
              className={`${styles.amountBtn} ${selected === amount ? styles.active : ''}`}
              onClick={() => setSelected(amount)}
            >
              {amount}
            </button>
          ))}
        </div>

        <div className={styles.cta}>
          <a href="mailto:help@evolvingwildlifefoundation.com" className="btn-primary">
            Donate Now
          </a>
        </div>
      </div>
    </section>
  )
}
