import Banner from '../../components/Banner/Banner'
import BrandsSection from '../../components/BrandsSection/BrandsSection'
import Categories from '../../components/Categories/Categories'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Newsletter from '../../components/Newsletter/Newsletter'
import Partners from '../../components/Partners/Partners'
import PartnersDuplicate from '../../components/PartnersDuplicate/PartnersDuplicate'
import RelatedProductsAfterPartners from '../../components/RelatedProductsAfterPartners/RelatedProductsAfterPartners'
import RelatedProducts from '../../components/RelatedProducts/RelatedProducts'

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Categories />
        <RelatedProducts sectionId="related-products-1" />
        <Partners />
        <RelatedProductsAfterPartners sectionId="related-products-after-partners-1" />
        <PartnersDuplicate />
        <BrandsSection />
        <RelatedProductsAfterPartners sectionId="related-products-after-partners-2" />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}

export default Home
