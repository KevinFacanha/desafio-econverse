import styles from './Header.module.scss';
import MainBar from './MainBar';
import NavBar from './NavBar';
import TopBar from './TopBar';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.frame}>
        <TopBar />
        <MainBar />
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
