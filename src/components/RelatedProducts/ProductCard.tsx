import type { KeyboardEvent } from 'react'
import { formatCurrency } from '../../services/products'
import type { Product } from '../../types/product'
import styles from './ProductCard.module.scss'

type ProductCardProps = {
  product: Product
  onSelect?: (product: Product) => void
  onBuy?: (product: Product) => void
}

const ProductCard = ({ product, onSelect, onBuy }: ProductCardProps) => {
  const handleSelect = () => {
    onSelect?.(product)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.target !== event.currentTarget) {
      return
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleSelect()
    }
  }

  return (
    <article
      className={styles.card}
      onClick={handleSelect}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={product.productName}
    >
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={product.photo} alt={product.productName} />
      </div>

      <p className={styles.description}>{product.productName}</p>

      <p className={styles.price}>{formatCurrency(product.price)}</p>

      <div className={styles.buyButtonWrap}>
        <button
          type="button"
          className={styles.buyButton}
          aria-label={`Comprar ${product.productName}`}
          onClick={(event) => {
            event.stopPropagation()
            onBuy?.(product)
          }}
        >
          COMPRAR
        </button>
      </div>
    </article>
  )
}

export default ProductCard
