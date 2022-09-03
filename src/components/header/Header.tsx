import styles from './Header.module.css';
import logo from '../../assets/images/logo.svg';
import heroImgMobile from '../../assets/images/image-hero-mobile.png';
import heroImgDesktop from '../../assets/images/image-hero-desktop.png';

import Nav from '../../components/nav/Nav';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      {/* header top */}
      <div className={styles.header_top}>
        <img className={styles.logo} src={logo} alt='snap text' />
        <Nav />
      </div>
      {/* hero section */}
      <div className={styles.hero}>
        <img
          className={styles.heroImg}
          src={heroImgMobile}
          // srcSet={`${heroImgMobile} 750w, ${heroImgDesktop} 960w`}
          // sizes='(min-width: 1000px) 960px, 750px'
          alt='black boy holding laptop'
        />
      </div>
    </header>
  );
};

export default Header;
