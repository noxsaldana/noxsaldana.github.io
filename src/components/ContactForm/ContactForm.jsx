import { useState } from 'react'
import styles from './ContactForm.module.css'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      e.target.reset()
    }, 3000)
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className="section-inner">
        <div className={styles.grid}>
          <div className={styles.info}>
            <p className="section-eyebrow">Get in Touch</p>
            <h2 className="section-title">
              We'd Love to <span>Hear</span> from You
            </h2>
            <div className="divider" />
            <p>
              Have questions about our programs, want to volunteer, or interested in
              bringing us to your school or community? Reach out — we'd love to connect.
            </p>
            <div className={styles.detail}>
              <svg viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              help@evolvingwildlifefoundation.com
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="first-name">First Name</label>
                <input id="first-name" type="text" placeholder="Jane" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="last-name">Last Name</label>
                <input id="last-name" type="text" placeholder="Smith" required />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="jane@example.com" required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject</label>
              <select id="subject">
                <option>General Inquiry</option>
                <option>Volunteering</option>
                <option>School Programs</option>
                <option>Donations</option>
                <option>Media &amp; Press</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Tell us how we can help..." />
            </div>

            <button
              type="submit"
              className={styles.submit}
              disabled={submitted}
              style={submitted ? { background: 'var(--color-teal-dark)' } : {}}
            >
              {submitted ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
