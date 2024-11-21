import React, { useState, useEffect } from "react";
import styles from "./navbarSlider.module.scss";

const NavbarSlider = () => {
  const [tabToggle, setTabToggle] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const LINKS = [
    { name: "Capital", id: 1 },
    { name: "Intereses", id: 2 },
    { name: "Estudio de crédito", id: 3 },
    { name: "Plástico", id: 4 },
  ];

  const updateToggle = (id) => setTabToggle(id);

  // Detectar si está en móvil
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Para inicializar
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Control del scroll
  const scroll = (direction) => {
    const slider = document.querySelector(`.${styles.slider}`);
    slider.scrollBy({
      left: direction === "left" ? -200 : 200,
      behavior: "smooth",
    });
  };

  return (
    <section className="container">
      <div className={styles.main}>
        <h2 className={styles.title}>
          ¡Costos de Usar <span>Crediplus!</span>
        </h2>

        <div className={styles.navbarSlider}>
          {isMobile && (
            <button className={styles.arrow} onClick={() => scroll("left")}>
              {"<"}
            </button>
          )}

          <div className={styles.slider}>
            {LINKS.map((link) => (
              <div
                key={link.id}
                className={`${styles.slide} ${
                  tabToggle === link.id ? styles.active : ""
                }`}
                onClick={() => updateToggle(link.id)}
              >
                {tabToggle === link.id ? `+ ${link.name}` : link.name}
              </div>
            ))}
          </div>

          {isMobile && (
            <button className={styles.arrow} onClick={() => scroll("right")}>
              {">"}
            </button>
          )}
        </div>
          <hr />
        {/* Contenido dinámico de tabs */}
        <div className={styles.content}>
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
      </div>
    </section>
  );
};

export default NavbarSlider;
