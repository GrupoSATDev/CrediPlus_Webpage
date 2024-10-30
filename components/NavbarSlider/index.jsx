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
    { name: "Aval", id: 3 },
    { name: "Descuento por Aval", id: 4 },
    { name: "Firma electrónica", id: 5 },
  ];

  return (
    <section>
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
        Es la cantidad de dinero que estás solicitando para tu crédito de
        Crediplus
      </p>
      <p className={tabToggle === 2 ? styles.textShow : styles.text}>
        Intereses
      </p>
      <p className={tabToggle === 3 ? styles.textShow : styles.text}>Aval</p>
      <p className={tabToggle === 4 ? styles.textShow : styles.text}>
        Descuento por Aval
      </p>
      <p className={tabToggle === 5 ? styles.textShow : styles.text}>
        Firma electrónica
      </p>
    </section>
  );
};

export default NavbarSlider;