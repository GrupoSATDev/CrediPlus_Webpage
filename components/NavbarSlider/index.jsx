import React, { useState } from "react";
import Slider from "react-slick";
import styles from "./navbarSlider.module.scss";

const NavbarSlider = () => {
  const [tabToggle, setTabToggle] = useState(1);

  function updateToggle(id) {
    setTabToggle(id);
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const LINKS = [
    { name: "+ Capital", id: 1 },
    { name: "Intereses", id: 2 },
    { name: "Estudio de crédito", id: 3 },
    { name: "Plástico", id: 4 },
  ];

  return (
    <section className="container">
      <div className={styles.main}>
      <h2 className={styles.title}>
        ¡ Costos de Usar <span>Crediplus!</span>
      </h2>
      <div className={styles["navbar-slider"]}>
        <Slider
          {...settings}
          className={`${styles.slider} ${styles["slick-slide"]} `}>
          {LINKS.map((item) => (
            <ul key={item.name}>
              <li
                className={styles.navLink}
                onClick={() => updateToggle(item.id)}>
                {item.name}
              </li>
            </ul>
          ))}
        </Slider>
      </div>
      <div className={styles.navbarList}>
        {LINKS.map((item) => (
          <ul key={item.name}>
            <li
              className={styles.navItem}
              onClick={() => updateToggle(item.id)}>
              {item.name}
            </li>
          </ul>
        ))}
      </div>
      <p className={tabToggle === 1 ? styles.textShow : styles.text}>
        El capital representa el monto principal solicitado por el cliente al adquirir el crédito. Este importe se incluye en el capital consumido y constituye la base del financiamiento. El pago del capital se distribuye a lo largo del plazo del crédito según los términos acordados, y su reembolso es el objetivo principal del compromiso financiero.
      </p>
      <p className={tabToggle === 2 ? styles.textShow : styles.text}>
        Los intereses corresponden a la tasa aplicable al momento en que el cliente adquiere el crédito o realiza una refinanciación. Esta tasa refleja el costo de acceder al financiamiento y puede variar según las políticas vigentes del mercado. El interés se calcula sobre el saldo del capital pendiente y se distribuye en los pagos programados durante el plazo del crédito.
      </p>
      <p className={tabToggle === 3 ? styles.textShow : styles.text}>
        El estudio de crédito implica un costo administrativo relacionado con la evaluación de la solicitud. Este proceso abarca la revisión del perfil financiero del solicitante y su capacidad de pago, y tiene como objetivo garantizar una concesión responsable del crédito. Los costos de estudio de crédito se aplican una única vez y se consideran parte del proceso de gestión.
      </p>
      <p className={tabToggle === 4 ? styles.textShow : styles.text}>
        Este concepto hace referencia al costo único que el cliente asume por la emisión de la tarjeta CrediPlus. Este pago cubre los gastos de producción y entrega del plástico físico, que el cliente usará para realizar transacciones. Es un costo que solo se aplica al inicio, al momento de generar la tarjeta.      
      </p>
      </div>
    </section>
  );
};

export default NavbarSlider;