import { useState } from 'react'
import styles from './RelatedProductsHeader.module.scss'

const tabs = [
  'CELULAR',
  'ACESSÓRIOS',
  'TABLETS',
  'NOTEBOOKS',
  'TVS',
  'VER TODOS',
] as const

type RelatedTab = (typeof tabs)[number]

type RelatedProductsHeaderProps = {
  titleId: string
}

const RelatedProductsHeader = ({ titleId }: RelatedProductsHeaderProps) => {
  const [activeTab, setActiveTab] = useState<RelatedTab>('CELULAR')

  return (
    <header className={styles.section}>
      <div className={styles.titleBar}>
        <span className={styles.titleLine} aria-hidden="true" />
        <h2 id={titleId} className={styles.title}>
          Produtos relacionados
        </h2>
        <span className={styles.titleLine} aria-hidden="true" />
      </div>

      <nav className={styles.tabsNav} aria-label="Categorias de produtos relacionados">
        <ul className={styles.tabsList}>
          {tabs.map((tab) => (
            <li key={tab} className={styles.tabItem}>
              <button
                type="button"
                className={`${styles.tabButton} ${
                  tab === 'VER TODOS' ? styles.tabButtonViewAll : ''
                } ${activeTab === tab ? styles.tabButtonActive : ''}`}
                onClick={() => setActiveTab(tab)}
                aria-pressed={activeTab === tab ? 'true' : 'false'}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default RelatedProductsHeader
