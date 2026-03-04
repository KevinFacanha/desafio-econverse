import { useEffect, useId, useRef, useState } from 'react'
import { formatCurrency } from '../../services/products'
import type { Product } from '../../types/product'
import styles from './ProductModal.module.scss'

type ProductModalProps = {
  isOpen: boolean
  product: Product | null
  onClose: () => void
}

const ProductModal = ({ isOpen, product, onClose }: ProductModalProps) => {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)
  const titleId = useId()
  const descriptionId = useId()
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    closeButtonRef.current?.focus()

    if (product && import.meta.env.DEV) {
      console.info('[modal] selected', {
        productName: product.productName,
        price: product.price,
        formattedPrice: formatCurrency(product.price),
      })
    }
  }, [isOpen, product])

  if (!isOpen || !product) {
    return null
  }

  const handleDecrease = () => {
    setQuantity((currentQuantity) => Math.max(1, currentQuantity - 1))
  }

  const handleIncrease = () => {
    setQuantity((currentQuantity) => currentQuantity + 1)
  }

  return (
    <div className={styles.overlay} onMouseDown={onClose}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        onMouseDown={(event) => {
          event.stopPropagation()
        }}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className={styles.closeButton}
          aria-label="Fechar modal do produto"
          onClick={onClose}
        >
          ×
        </button>

        <div className={styles.media}>
          <img
            className={styles.image}
            src={product.photo}
            alt={product.productName}
          />
        </div>

        <div className={styles.content}>
          <h2 id={titleId} className={styles.title}>
            {product.productName}
          </h2>

          <p className={styles.price}>{formatCurrency(product.price)}</p>

          <p id={descriptionId} className={styles.description}>
            {product.descriptionShort}
          </p>

          <a
            href="#"
            className={styles.detailsLink}
            onClick={(event) => {
              event.preventDefault()
            }}
          >
            Veja mais detalhes do produto &gt;
          </a>

          <div className={styles.actionsRow}>
            <div className={styles.quantityControl} aria-label="Quantidade">
              <div className={styles.quantityInner}>
                <button
                  type="button"
                  className={styles.quantityButton}
                  aria-label="Diminuir quantidade"
                  onClick={handleDecrease}
                >
                  <span
                    className={`${styles.quantityIcon} ${styles.quantityIconMinus}`}
                    aria-hidden="true"
                  />
                </button>
                <span className={styles.quantityValue}>
                  {String(quantity).padStart(2, '0')}
                </span>
                <button
                  type="button"
                  className={styles.quantityButton}
                  aria-label="Aumentar quantidade"
                  onClick={handleIncrease}
                >
                  <span
                    className={`${styles.quantityIcon} ${styles.quantityIconPlus}`}
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>

            <button type="button" className={styles.buyButton}>
              COMPRAR
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal
