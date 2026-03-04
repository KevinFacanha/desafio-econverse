import bannerImage from '../../assets/Rectangle 250.svg';
import styles from './Banner.module.scss';

const Banner = () => {
  return (
    <section className={styles.banner} aria-label="Promoções em destaque">
      <div className={styles.frame}>
        <img
          className={styles.backgroundImage}
          src={bannerImage}
          alt=""
          aria-hidden="true"
        />
        <div className={styles.overlay} aria-hidden="true" />

        <div className={styles.content}>
          <div className={styles.inner}>
            <h1 className={styles.title}>Venha conhecer nossas promoções</h1>

            <p className={styles.subtitle}>
              <span className={styles.highlight}>50% Off</span>
              <span className={styles.subtitleRest}>nos produtos</span>
            </p>

            <a className={styles.ctaButton} href="#produto">
              Ver produto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
