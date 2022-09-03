import styles from './Home.module.css';

import Header from '../../components/header/Header';
import clientAudiophile from '../../assets/images/client-audiophile.svg';
import clientDatabiz from '../../assets/images/client-databiz.svg';
import clientMaker from '../../assets/images/client-maker.svg';
import clientMeet from '../../assets/images/client-meet.svg';
import Button from '../../components/button/Button';

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Make remote work</h1>
        <p className={styles.text}>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <div className={styles.button_wrapper}>
          <Button />
        </div>
        <div className={styles.clientsImgs}>
          <img src={clientDatabiz} alt='client databiz' />
          <img src={clientAudiophile} alt='client audiophile' />
          <img src={clientMeet} alt='client meet' />
          <img src={clientMaker} alt='client maker' />
        </div>
      </main>
    </div>
  );
};

export default Home;
