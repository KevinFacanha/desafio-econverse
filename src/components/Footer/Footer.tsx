import facebookIcon from '../../assets/facebook.svg'
import instagramIcon from '../../assets/instagram.svg'
import linkedinIcon from '../../assets/linkedin.svg'
import logo from '../../assets/Logo.png'
import styles from './Footer.module.scss'

const footerColumns = [
  {
    title: 'Institucional',
    links: ['Sobre Nós', 'Movimento', 'Trabalhe conosco'],
  },
  {
    title: 'Ajuda',
    links: ['Suporte', 'Fale Conosco', 'Perguntas Frequentes'],
  },
  {
    title: 'Termos',
    links: ['Termos e Condições', 'Política de Privacidade', 'Troca e Devolução'],
  },
] as const

const socialLinks = [
  {
    name: 'Instagram',
    href: '#',
    icon: instagramIcon,
  },
  {
    name: 'Facebook',
    href: '#',
    icon: facebookIcon,
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: linkedinIcon,
  },
] as const

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <section className={styles.leftBlock} aria-label="Informações da Econverse">
            <img className={styles.logo} src={logo} alt="Econverse" />

            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <div className={styles.socialRow} aria-label="Redes sociais">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={styles.socialLink}
                  aria-label={link.name}
                  onClick={(event) => {
                    event.preventDefault()
                  }}
                >
                  <img
                    className={styles.socialIcon}
                    src={link.icon}
                    alt=""
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </section>

          <div className={styles.divider} aria-hidden="true" />

          <nav className={styles.nav} aria-label="Links do rodapé">
            {footerColumns.map((column) => (
              <section key={column.title} className={styles.navColumn}>
                <h2 className={styles.navTitle}>{column.title}</h2>

                <ul className={styles.navList}>
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className={styles.navLink}
                        onClick={(event) => {
                          event.preventDefault()
                        }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </nav>
        </div>
      </footer>

      <div className={styles.footerBottomBar}>
        <p className={styles.footerBottomText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </>
  )
}

export default Footer
