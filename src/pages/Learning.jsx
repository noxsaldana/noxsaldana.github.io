import { Link } from 'react-router-dom'
import styles from './Learning.module.css'

const articles = [
  {
    eyebrow: 'Part I',
    title: 'How Development Is Displacing US Wildlife',
    description:
      'Every year, 1 million acres of natural habitat are lost to urban sprawl. Learn how construction, roads, and pollution are pushing wildlife out of their homes — and into ours.',
    route: '/learning/habitat-loss',
  },
  {
    eyebrow: 'Part II',
    title: 'Urban Wildlife: Adapting to a Changed World',
    description:
      'Coyotes now inhabit every major US city. Peregrine falcons nest on skyscrapers. Explore how wildlife has evolved to survive in human-dominated landscapes — and the conflicts that follow.',
    route: '/learning/urban-wildlife',
  },
  {
    eyebrow: 'Part III',
    title: 'Living With Wildlife: A Humane Approach',
    description:
      'Lethal control doesn\'t work — the science is clear. Discover evidence-based strategies for coexisting with wildlife, protecting your home, and avoiding the hidden dangers of rodenticides.',
    route: '/learning/humane-coexistence',
  },
]

export default function Learning() {
  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <p className="section-eyebrow">Educational Resources</p>
          <h1 className="section-title">
            <span>Learning</span> Center
          </h1>
          <div className="divider" />
          <p className="section-body">
            A research-based library on wildlife coexistence, urban ecology, and humane conflict
            resolution — compiled from peer-reviewed research, government agencies, and leading
            wildlife organizations.
          </p>
        </div>
      </div>

      <div className={styles.articles}>
        <div className={styles.articlesInner}>
          {articles.map(a => (
            <Link key={a.route} to={a.route} className={styles.card}>
              <p className={styles.cardEyebrow}>{a.eyebrow}</p>
              <h2 className={styles.cardTitle}>{a.title}</h2>
              <p className={styles.cardBody}>{a.description}</p>
              <span className={styles.cardCta}>Read Article →</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
