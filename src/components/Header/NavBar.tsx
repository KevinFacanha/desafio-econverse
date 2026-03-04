import crownIcon from '../../assets/icons/CrownSimple.svg';
import styles from './NavBar.module.scss';

type NavItem = {
  label: string;
  href: string;
  isActive?: boolean;
  icon?: string;
};

const navItems: NavItem[] = [
  { label: 'TODAS CATEGORIAS', href: '#todas-categorias' },
  { label: 'SUPERMERCADO', href: '#supermercado' },
  { label: 'LIVROS', href: '#livros' },
  { label: 'MODA', href: '#moda' },
  { label: 'LANÇAMENTOS', href: '#lancamentos' },
  { label: 'OFERTAS DO DIA', href: '#ofertas-do-dia', isActive: true },
  { label: 'ASSINATURA', href: '#assinatura', icon: crownIcon },
];

const NavBar = () => {
  return (
    <nav className={styles.navBar} aria-label="Menu principal">
      <div className={styles.container}>
        <ul className={styles.list}>
          {navItems.map((item) => (
            <li className={styles.item} key={item.label}>
              <a
                aria-current={item.isActive ? 'page' : undefined}
                className={`${styles.link} ${item.icon ? styles.linkWithIcon : ''} ${item.isActive ? styles.active : ''}`}
                href={item.href}
              >
                {item.icon ? (
                  <img
                    src={item.icon}
                    alt=""
                    aria-hidden="true"
                    className={styles.icon}
                  />
                ) : null}
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
