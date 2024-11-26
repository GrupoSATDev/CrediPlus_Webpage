import styles from './pathers.module.scss';
import pathers1 from './images/pathers1.png';
import pathers2 from './images/pathers2.png';
import pathers3 from './images/pathers3.png';
import pathers4 from './images/pathers4.png';

const Pathers = () => {
  return (
    <section className="container" id='aliados'>
    <div className={styles.main}>
      <h2>Descubre <span>Nuestros Aliados</span></h2>
      <div className={styles.container}>
        <div className="item1"><img src={pathers1.src} alt="" /></div>
        <div className="item2"><img src={pathers2.src} alt="" /></div>
        <div className="item3"><img src={pathers3.src} alt="" /></div>  
        <div className="item4"><img src={pathers4.src} alt="" /></div>
      </div>
    </div>
    </section>
  );
};  

export default Pathers;