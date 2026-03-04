import brandLogo from '../../assets/Group 35.png'
import styles from './BrandsSection.module.scss'

const brands = Array.from({ length: 5 }, (_, index) => ({
  id: `econverse-brand-${index + 1}`,
  name: 'Econverse',
  logo: brandLogo,
}))

const BrandsSection = () => {
  return (
    <section className={styles.section} aria-labelledby="brands-title">
      <div className={styles.container}>
        <h2 id="brands-title" className={styles.title}>
          Navegue por marcas
        </h2>

        <div className={styles.viewport}>
          <div className={styles.brandsRow}>
            {brands.map((brand) => (
              <a
                key={brand.id}
                href="#"
                className={styles.brandLink}
                aria-label={`Marca ${brand.name}`}
                onClick={(event) => {
                  event.preventDefault()
                }}
              >
                <span className={styles.brandCircle}>
                  <img
                    className={styles.brandLogo}
                    src={brand.logo}
                    alt={brand.name}
                  />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandsSection
