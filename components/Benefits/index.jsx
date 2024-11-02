import styles from "./benefits.module.scss";
import benefits from "./images/benefits.png";
import { Accordion, AccordionPanel, Box, Text } from "grommet";

const Benefits = () => {
  return (
    <div className={styles.main}>
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
                    Los empleados pueden acceder a créditos con tasas de interés
                    más bajas y plazos de pago flexibles, lo que les facilita
                    gestionar sus necesidades financieras sin recurrir a
                    opciones costosas o riesgosas.
                  </p>
                </Box>
              </AccordionPanel>
              <AccordionPanel label="Educación Financiera para Empleados">
                <Box>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti eveniet, ut tenetur quam nemo sint laudantium.
                    Natus, iure corrupti ab molestiae ducimus ullam hic, nemo
                    nulla esse odit doloremque temporibus!
                  </p>
                </Box>
              </AccordionPanel>
              <AccordionPanel label="Gestión de Créditos Rápida y Sencilla">
                <Box>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti eveniet, ut tenetur quam nemo sint laudantium.
                    Natus, iure corrupti ab molestiae ducimus ullam hic, nemo
                    nulla esse odit doloremque temporibus!
                  </p>
                </Box>
              </AccordionPanel>
              <AccordionPanel label="Acceso a una Amplia Gama de Productos y Servicios">
                <Box>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti eveniet, ut tenetur quam nemo sint laudantium.
                    Natus, iure corrupti ab molestiae ducimus ullam hic, nemo
                    nulla esse odit doloremque temporibus!
                  </p>
                </Box>
              </AccordionPanel>
              <AccordionPanel label="Transparencia y Seguridad">
                <Box>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti eveniet, ut tenetur quam nemo sint laudantium.
                    Natus, iure corrupti ab molestiae ducimus ullam hic, nemo
                    nulla esse odit doloremque temporibus!
                  </p>
                </Box>
              </AccordionPanel>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
