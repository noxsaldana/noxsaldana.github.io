import styles from './Learning.module.css'

export default function Learning() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <p className="section-eyebrow">Coming Soon</p>
        <h1 className="section-title">
          <span>Learning</span> Center
        </h1>
        <div className="divider" />
        <p className="section-body">
          We're building a library of educational resources on wildlife coexistence,
          poison awareness, and humane conflict resolution. Check back soon!
        </p>
        <a href="/" className="btn-primary" style={{ marginTop: '32px' }}>
          Back to Home
        </a>
      </div>
    </main>
  )
}
