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
      <div className="container">
        <h2 className={styles.title}>
          ¿Qué necesitas para <strong>solicitar un préstamo en línea?</strong>
        </h2>
        <div className={styles.cards}>
          <ul style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            <li>
              <img src={slide1.src} alt="" />
              <p>Ser colombiano mayor de edad (18 años) y vivir en Colombia</p>
            </li>
            <li>
              <img src={slide2.src} alt="" />
              <p>Ser titular de una cuenta bancaria activa a tu nombre.</p>
            </li>
            <li>
              <img src={slide3.src} alt=""  />
              <p>Poseer una cuenta de correo electrónico personal activa.</p>
            </li>
            <li>
              <img src={slide4.src} alt=""/>
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
              onClick={() => setCurrentSlide(index)}
            ></span>
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
            <strong>Firma electrónica / Disponibilidad :</strong> corresponde a las actividades
            administrativas que están relacionadas con tu crédito y asimismo la Disponibilidad
            que mantendremos para que tu cupo esté siempre disponible.
          </p>
          <p>
            <strong>Aval:</strong>Este Aval corresponde a los costos de la garantía que se requieren
            para la aprobación de tu crédito dentro de la plataforma.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Loan;
