import primaryBannerImage from '../../assets/banner 1.svg'
import secondaryBannerImage from '../../assets/Rectangle 250.svg'
import styles from './PartnerBanners.module.scss'

type PartnerBannerItem = {
  image: string
  title: string
  description: string
}

const banners: PartnerBannerItem[] = [
  {
    image: primaryBannerImage,
    title: 'Parceiros',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: secondaryBannerImage,
    title: 'Parceiros',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

const PartnerBanners = () => {
  return (
    <section className={styles.section} aria-label="Parceiros">
      <div className={styles.container}>
        {banners.map((banner, index) => (
          <article
            key={`${banner.title}-${index}`}
            className={styles.bannerCard}
            style={{ backgroundImage: `url("${banner.image}")` }}
          >
            <div className={styles.content}>
              <h2 className={styles.title}>{banner.title}</h2>
              <p className={styles.description}>{banner.description}</p>
              <a className={styles.button} href="#parceiros">
                CONFIRA
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default PartnerBanners
