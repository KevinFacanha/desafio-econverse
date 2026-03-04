import shieldCheckIcon from '../../assets/icons/topbar/ShieldCheck.svg';
import truckIcon from '../../assets/icons/topbar/Truck.svg';
import creditCardIcon from '../../assets/icons/topbar/CreditCard.svg';
import shieldCheckMarkIcon from '../../assets/icons/Vector (2).svg';
import styles from './TopBar.module.scss';

type TopBarItem = {
  icon: string;
  prefix: string;
  highlight: string;
  suffix?: string;
  emphasizePrefix?: boolean;
  overlayIcon?: string;
};

const topBarItems: TopBarItem[] = [
  {
    icon: shieldCheckIcon,
    prefix: 'Compra ',
    highlight: '100% segura',
    overlayIcon: shieldCheckMarkIcon,
  },
  {
    icon: truckIcon,
    prefix: 'Frete ',
    highlight: 'grátis',
    suffix: ' acima de R$200',
    emphasizePrefix: true,
  },
  {
    icon: creditCardIcon,
    prefix: '',
    highlight: 'Parcele',
    suffix: ' suas compras',
  },
];

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.container}>
        <ul className={styles.list}>
          {topBarItems.map((item) => (
            <li
              className={styles.item}
              key={`${item.icon}-${item.prefix}-${item.highlight}-${item.suffix ?? ''}`}
            >
              {item.overlayIcon ? (
                <span className={styles.iconWrapper} aria-hidden="true">
                  <img
                    className={styles.icon}
                    src={item.icon}
                    alt=""
                    aria-hidden="true"
                  />
                  <img
                    className={styles.iconOverlay}
                    src={item.overlayIcon}
                    alt=""
                    aria-hidden="true"
                  />
                </span>
              ) : (
                <img
                  className={styles.icon}
                  src={item.icon}
                  alt=""
                  aria-hidden="true"
                />
              )}
              <span className={styles.text}>
                <span className={item.emphasizePrefix ? styles.highlight : undefined}>
                  {item.prefix}
                </span>
                <strong className={styles.highlight}>{item.highlight}</strong>
                {item.suffix ? <span>{item.suffix}</span> : null}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
