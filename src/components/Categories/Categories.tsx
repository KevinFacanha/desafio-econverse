import technologyIcon from '../../assets/image.svg'
import supermarketIcon from '../../assets/supermercados 1.svg'
import drinksIcon from '../../assets/whiskey.svg'
import toolsIcon from '../../assets/ferramentas 1.svg'
import healthIcon from '../../assets/cuidados-de-saude 1.svg'
import sportsIcon from '../../assets/corrida 1.svg'
import fashionIcon from '../../assets/moda 1.svg'
import styles from './Categories.module.scss'

type CategoryItem = {
  icon: string
  label: string
  isActive?: boolean
}

const categories: CategoryItem[] = [
  { icon: technologyIcon, label: 'Tecnologia', isActive: true },
  { icon: supermarketIcon, label: 'Supermercado' },
  { icon: drinksIcon, label: 'Bebidas' },
  { icon: toolsIcon, label: 'Ferramentas' },
  { icon: healthIcon, label: 'Saúde' },
  { icon: sportsIcon, label: 'Esportes e Fitness' },
  { icon: fashionIcon, label: 'Moda' },
]

const Categories = () => {
  return (
    <section className={styles.section} aria-label="Compre por categoria">
      <div className={styles.container}>
        <div className={styles.track}>
          {categories.map((category) => {
            const iconBoxClass = category.isActive
              ? `${styles.iconBox} ${styles.iconBoxActive}`
              : `${styles.iconBox} ${styles.iconBoxInactive}`

            if (category.isActive) {
              return (
                <button
                  key={category.label}
                  type="button"
                  className={`${styles.card} ${styles.activeCard}`}
                  aria-pressed="true"
                >
                  <span className={iconBoxClass}>
                    <img
                      src={category.icon}
                      alt=""
                      aria-hidden="true"
                      className={styles.icon}
                    />
                  </span>
                  <span className={styles.label}>{category.label}</span>
                </button>
              )
            }

            return (
              <div key={category.label} className={styles.card} aria-hidden="true">
                <span className={iconBoxClass}>
                  <img
                    src={category.icon}
                    alt=""
                    aria-hidden="true"
                    className={styles.icon}
                  />
                </span>
                <span className={styles.label}>{category.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Categories
