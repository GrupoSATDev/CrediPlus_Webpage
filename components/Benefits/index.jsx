import styles from "./benefits.module.scss";
import benefits from "./images/benefits.png";
import { Accordion, AccordionPanel, Box, Text } from "grommet";

const Benefits = () => {
  return (
    <section className={styles.main} id='beneficios'>
      <div className="container">
        <h2>
          ¡Beneficios Exclusivos para los{" "}
          <strong>Empleados de Nuestros Aliados!</strong>
        </h2>
        <div className={styles.container}>
          <div className={styles.benefits}>
            <img src={benefits.src} alt="" />
          </div>
          <div className={styles.accordion}>
            <Accordion>
              <AccordionPanel label="Acceso a Créditos en Condiciones Preferenciales">
                <Box>
                  <p>
                    {" "}
                    Disfruta de tasas de interés competitivas y condiciones 
                    favorables diseñadas para facilitarte el acceso a créditos. 
                    Te ayudamos a alcanzar tus metas financieras sin complicaciones.
                  </p>
                </Box>
              </AccordionPanel>
              <AccordionPanel label="Educación Financiera para Empleados">
                <Box>
                  <p>
                  Proporcionamos recursos y capacitación para que los empleados comprendan 
                  mejor su situación financiera. Con nuestro apoyo, tomarás decisiones 
                  informadas y mejorarás tu bienestar económico.
                  </p>
                </Box>
              </AccordionPanel>
              <AccordionPanel label="Gestión de Créditos Rápida y Sencilla">
                <Box>
                  <p>
                  Olvídate de los trámites complicados y los largos tiempos de espera. 
                  Nuestro proceso de gestión de créditos es eficiente y fácil, 
                  permitiéndote obtener los fondos que necesitas cuando los necesitas.
                  </p>
                </Box>
              </AccordionPanel>
              <AccordionPanel label="Acceso a una Amplia Gama de Productos y Servicios">
                <Box>
                  <p>
                  Explora una amplia selección de productos y servicios f
                  inancieros adaptados a tus necesidades. 
                  </p>
                </Box>
              </AccordionPanel>
              <AccordionPanel label="Transparencia y Seguridad">
                <Box>
                  <p>
                  Garantizamos la máxima transparencia en todas nuestras operaciones, 
                  manteniendo tu información segura y protegida. 
                  Puedes confiar en que tus datos están en buenas manos.
                  </p>
                </Box>
              </AccordionPanel>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
