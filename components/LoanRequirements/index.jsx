import { useState } from "react";
import slide1 from "./images/slide1.png";
import slide2 from "./images/slide2.png";
import slide3 from "./images/slide3.png";
import slide4 from "./images/slide4.png";
import styles from "./loan.module.scss";

const Loan = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4; // Número total de tarjetas

  return (
    <section className={styles.loan}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          ¿Qué necesitas para <strong>solicitar un préstamo en línea?</strong>
        </h2>
        <div className={styles.cards}>
          <ul style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            <li>
              <img src={slide1.src} alt="" width="80" />
              <p>Ser colombiano mayor de edad (18 años) y vivir en Colombia</p>
            </li>
            <li>
              <img src={slide2.src} alt="" width="80" />
              <p>Ser titular de una cuenta bancaria activa a tu nombre.</p>
            </li>
            <li>
              <img src={slide3.src} alt="" width="70" />
              <p>Poseer una cuenta de correo electrónico personal activa.</p>
            </li>
            <li>
              <img src={slide4.src} alt="" width="50" />
              <p>Contar con un número de celular activo.</p>
            </li>
          </ul>
        </div>
        {/* Indicadores de puntos (dots)  */}
        <div className={styles.dots}>
          {[...Array(totalSlides)].map((_, index) => (
            <span
              key={index}
              className={index === currentSlide ? styles.active : ""}
              onClick={() => setCurrentSlide(index)}></span>
          ))}
        </div>

        <div className={styles.box_container}>
          <p>
            Al simular tu crédito, te mostramos claramente lo que vas a pagar,
            para que elijas el préstamo que mejor se ajuste a tus necesidades.
            Operamos con transparencia, priorizando tu seguridad financiera.
            Nuestros costos fijos incluyen:
          </p>
          <p>Tasa de interés (siempre por debajo de la tasa de usura)</p>
        </div>

        <h3 className={styles.subtitle}>Opcionalmente, ofrecemos:</h3>

        <div className={styles.box_container_blue}>
          <p>
            <strong>Firma electrónica:</strong> Solo se cobrará si decides
            usarla, con un costo de $130,500. Puedes obtener un descuento por
            pago puntual o anticipado, como reconocimiento a tu buen
            comportamiento financiero y para promover la inclusión financiera.
          </p>
          <p>
            <strong>Aval:</strong> De manera opcional, puedes contratar un aval
            a través de Crediplus, que sirve como garantía para tu crédito. El
            costo varía según el monto y el plazo elegido, pero puede reducirse
            si pagas puntualmente o antes del vencimiento. ¡Un aval que vale
            menos cuando pagas bien!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Loan;
