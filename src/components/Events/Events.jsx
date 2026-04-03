import events from '../../data/events.json'
import styles from './Events.module.css'

export default function Events() {
  return (
    <section id="events" className={styles.events}>
      <div className="section-inner">
        <div className={styles.header}>
          <p className="section-eyebrow">Get Involved</p>
          <h2 className="section-title">
            Upcoming <span>Events</span>
          </h2>
          <div className="divider" />
          <p className="section-body">
            Join us at one of our upcoming community events and help us spread
            the message of coexistence.
          </p>
        </div>

        <div className={styles.list}>
          {events.map(event => (
            <div key={event.id} className={styles.item}>
              <div className={`${styles.date} ${event.empty ? styles.dateEmpty : ''}`}>
                {!event.empty && (
                  <>
                    <div className={styles.month}>{event.month}</div>
                    <div className={styles.day}>{event.day}</div>
                  </>
                )}
              </div>

              <div className={styles.info}>
                <h4>{event.title}</h4>
                {event.location && (
                  <p>
                    {event.location}
                    {event.time && <> &middot; {event.time}</>}
                  </p>
                )}
              </div>

              <span className={styles.tag}>{event.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
