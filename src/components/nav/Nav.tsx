import styles from './Nav.module.css';
import menuIcon from '../../assets/images/icon-menu.svg';

const Nav: React.FC = () => {
  return (
    <nav className={styles.nav}>
      {/* mobile */}
      <img className={styles.menuIcon} src={menuIcon} alt='menu icon' />
      {/* desktop */}
      {/* links */}
    </nav>
  );
};

export default Nav;
