import vectorIcon from '../../assets/Vector.svg';
import heartIcon from '../../assets/Heart.svg';
import userCircleIcon from '../../assets/UserCircle.svg';
import shoppingCartIcon from '../../assets/ShoppingCart.svg';
import logo from '../../assets/Logo.png';
import styles from './MainBar.module.scss';

const SearchIcon = () => (
  <svg
    aria-hidden="true"
    fill="none"
    height="20"
    viewBox="0 0 20 20"
    width="20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="9" cy="9" r="5.75" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M13.25 13.25L16.5 16.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
    />
  </svg>
);

const actionItems = [
  { icon: vectorIcon, label: 'Menu' },
  { icon: heartIcon, label: 'Favoritos' },
  { icon: userCircleIcon, label: 'Minha conta' },
  { icon: shoppingCartIcon, label: 'Carrinho' },
];

const MainBar = () => {
  return (
    <div className={styles.mainBar}>
      <div className={styles.container}>
        <a className={styles.logoLink} href="/" aria-label="Ir para a página inicial">
          <img className={styles.logo} src={logo} alt="Econverse" />
        </a>

        <form className={styles.searchForm} role="search">
          <label className={styles.srOnly} htmlFor="header-search">
            Buscar produtos
          </label>
          <input
            className={styles.searchInput}
            id="header-search"
            name="search"
            placeholder="O que você está buscando?"
            type="search"
          />
          <button
            aria-label="Pesquisar"
            className={styles.searchButton}
            type="submit"
          >
            <SearchIcon />
          </button>
        </form>

        <div
          className={styles.iconsWrap}
          aria-label="Ações rápidas do usuário"
          role="group"
        >
          {actionItems.map((action) => (
            <button
              aria-label={action.label}
              className={styles.iconButton}
              key={action.label}
              type="button"
            >
              <img
                className={styles.iconImage}
                src={action.icon}
                alt=""
                aria-hidden="true"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainBar;
