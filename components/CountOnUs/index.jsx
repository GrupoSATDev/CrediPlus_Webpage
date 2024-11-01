import styles from "./count-on-us.module.scss";
import countImg from "./images/credi-plus.png";
import vector1 from "./images/mas1.png";
import vector2 from "./images/mas2.png";
import logo from "./images/logo.png";

const countOnUs = () => {
  return (
    <section className={styles.main}>
      <div className={styles.image}>
        <img src={countImg.src} alt="Contamos contigo" />
      </div>
      <div className={styles.contentText}>
        <h2>
          <span className={styles.text1}>Cuenta</span>{" "}
          <span className={styles.text2}>con nosotros</span>
        </h2>
        <p>
          Nunca sabes cuándo un imprevisto puede cambiar tus planes. Si te
          encuentras en una situación donde necesitas dinero urgentemente, te
          ofrecemos los préstamos en línea más rápidos, seguros y flexibles de
          Colombia, para que puedas cubrir esos gastos inesperados de inmediato.
        </p>
        <p>
          Ya sea una emergencia médica, un gasto no planeado, un viaje
          inesperado, celebraciones de última hora, o cualquier otra situación
          imprevista, estamos aquí para ayudarte. En <strong>CrediPlus</strong>,
          te proporcionamos préstamos a la velocidad que necesitas, sin
          intermediarios ni trámites complicados, sin necesidad de referencias o
          codeudores, todo 100% en línea, desde tu computadora o celular, fácil,
          rápido y seguro.
        </p>
        <a href="https://trabajadores.crediplus.com.co/" className={styles.button}>
          Regístrate
        </a>
      </div>
      <div className={styles.imageLogo}>
        <img src={logo.src} alt="" />
      </div>
      <img
        src={vector1.src}
        className={styles.vector1}
        width={124}
        height={128}
        alt="plus-1"
      />
      <img
        src={vector2.src}
        className={styles.vector2}
        width={86}
        height={89}
        alt="plus-2"
      />
      <img src={vector1.src} className={styles.vector3} alt="" />
    </section>
  );
};

export default countOnUs;
