import { useEffect, useRef, useState } from 'react'
import arrowIcon from '../../assets/icons/Vector.svg'
import ProductModal from '../ProductModal/ProductModal'
import { fetchProducts } from '../../services/products'
import type { Product } from '../../types/product'
import ProductCard from './ProductCard'
import styles from './RelatedProductsCarousel.module.scss'

const CARD_WIDTH = 304
const CARD_GAP = 32

const RelatedProductsCarousel = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const viewportRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let isMounted = true

    const loadProducts = async () => {
      try {
        setLoading(true)
        setError(null)

        const data = await fetchProducts()

        if (isMounted) {
          setProducts(data)

          if (import.meta.env.DEV) {
            console.info('[products] state', data.length)
          }
        }
      } catch (loadError) {
        console.error(loadError)

        if (isMounted) {
          setProducts([])
          setError('Erro ao carregar produtos')
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    void loadProducts()

    return () => {
      isMounted = false
    }
  }, [])

  const handleScroll = (direction: 'prev' | 'next') => {
    const viewport = viewportRef.current

    if (!viewport) {
      return
    }

    const offset = direction === 'next' ? CARD_WIDTH + CARD_GAP : -(CARD_WIDTH + CARD_GAP)

    viewport.scrollBy({
      left: offset,
      behavior: 'smooth',
    })
  }

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  return (
    <>
      <div className={styles.section}>
        <div className={styles.carousel}>
          {!loading && !error && products.length > 0 ? (
            <button
              type="button"
              className={`${styles.arrowButton} ${styles.arrowButtonLeft}`}
              onClick={() => handleScroll('prev')}
              aria-label="Anterior"
            >
              <img
                src={arrowIcon}
                alt=""
                aria-hidden="true"
                className={styles.arrowIcon}
              />
            </button>
          ) : null}

          <div className={styles.viewport} ref={viewportRef}>
            {loading ? (
              <div className={styles.feedback}>Carregando produtos...</div>
            ) : null}

            {!loading && error ? (
              <div className={styles.feedback}>{error}</div>
            ) : null}

            {!loading && !error && products.length === 0 ? (
              <div className={styles.feedback}>Nenhum produto encontrado</div>
            ) : null}

            {!loading && !error && products.length > 0 ? (
              <ul className={styles.track}>
                {products.map((product, index) => (
                  <li
                    key={`${product.productName}-${product.price}-${index}`}
                    className={styles.item}
                  >
                    <ProductCard
                      product={product}
                      onSelect={handleOpenModal}
                      onBuy={handleOpenModal}
                    />
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          {!loading && !error && products.length > 0 ? (
            <button
              type="button"
              className={`${styles.arrowButton} ${styles.arrowButtonRight}`}
              onClick={() => handleScroll('next')}
              aria-label="Próximo"
            >
              <img
                src={arrowIcon}
                alt=""
                aria-hidden="true"
                className={styles.arrowIcon}
              />
            </button>
          ) : null}
        </div>
      </div>

      <ProductModal
        key={selectedProduct?.productName ?? 'product-modal'}
        isOpen={isModalOpen}
        product={selectedProduct}
        onClose={handleCloseModal}
      />
    </>
  )
}

export default RelatedProductsCarousel
