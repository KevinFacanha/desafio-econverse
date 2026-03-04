import RelatedProductsCarousel from './RelatedProductsCarousel'
import RelatedProductsHeader from './RelatedProductsHeader'
import styles from './RelatedProducts.module.scss'

type RelatedProductsProps = {
  sectionId?: string
}

const RelatedProducts = ({
  sectionId = 'related-products',
}: RelatedProductsProps) => {
  const titleId = `${sectionId}-title`

  return (
    <section className={styles.section} aria-labelledby={titleId}>
      <RelatedProductsHeader titleId={titleId} />
      <RelatedProductsCarousel />
    </section>
  )
}

export default RelatedProducts
