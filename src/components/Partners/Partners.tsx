import partnerBackground from '../../assets/Mask Group.png'
import styles from './Partners.module.scss'

type PartnerCard = {
  title: string
  description: string
  ctaLabel: string
  backgroundImage: string
}

const partnerCards: PartnerCard[] = [
  {
    title: 'Parceiros',
    description: 'Lorem ipsum dolor sit\namet, consectetur',
    ctaLabel: 'CONFIRA',
    backgroundImage: partnerBackground,
  },
  {
    title: 'Parceiros',
    description: 'Lorem ipsum dolor sit\namet, consectetur',
    ctaLabel: 'CONFIRA',
    backgroundImage: partnerBackground,
  },
]

const Partners = () => {
  return (
    <section className={styles.section} aria-label="Parceiros">
      <div className={styles.container}>
        {partnerCards.map((card, index) => (
          <article key={`${card.title}-${index}`} className={styles.banner}>
            <img
              className={styles.backgroundImage}
              src={card.backgroundImage}
              alt=""
              aria-hidden="true"
            />
            <div className={styles.overlay} aria-hidden="true" />
            <div className={styles.content}>
              <h2 className={styles.title}>{card.title}</h2>
              <p className={styles.subtitle}>{card.description}</p>
              <button
                type="button"
                className={styles.button}
                aria-label="Conferir parceiros"
              >
                {card.ctaLabel}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Partners
