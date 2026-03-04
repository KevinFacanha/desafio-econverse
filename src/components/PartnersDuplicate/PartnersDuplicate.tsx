import partnerBackground from '../../assets/Mask Group.png'
import styles from '../Partners/Partners.module.scss'

type PartnerCard = {
  title: string
  description: string
  ctaLabel: string
  backgroundImage: string
  imageAlt: string
}

const partnerCards: PartnerCard[] = [
  {
    title: 'Parceiros',
    description: 'Lorem ipsum dolor sit\namet, consectetur',
    ctaLabel: 'CONFIRA',
    backgroundImage: partnerBackground,
    imageAlt: 'Banner de parceiros 1',
  },
  {
    title: 'Parceiros',
    description: 'Lorem ipsum dolor sit\namet, consectetur',
    ctaLabel: 'CONFIRA',
    backgroundImage: partnerBackground,
    imageAlt: 'Banner de parceiros 2',
  },
]

const PartnersDuplicate = () => {
  return (
    <section className={styles.section} aria-label="Parceiros em destaque">
      <div className={styles.container}>
        {partnerCards.map((card, index) => (
          <article key={`${card.title}-${index}`} className={styles.banner}>
            <img
              className={styles.backgroundImage}
              src={card.backgroundImage}
              alt={card.imageAlt}
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

export default PartnersDuplicate
