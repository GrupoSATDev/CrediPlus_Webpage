import styles from './pathers.module.scss';
import pathers from './images/pathers.png';

const Pathers = () => {
  return (
    <div className={styles.main}>
      <h2>Descubre <span>Nuestros Aliados</span></h2>
      <div className={styles.container}>
        <div class="item1"><img src={pathers.src} alt="" /></div>
        <div class="item2"><img src={pathers.src} alt="" /></div>
        <div class="item3"><img src={pathers.src} alt="" /></div>  
        <div class="item4"><img src={pathers.src} alt="" /></div>
      </div>
    </div>
  );
};  

export default Pathers;