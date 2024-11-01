import { Accordion, AccordionPanel, Box } from "grommet";
import circle from "./images/circle.png";
import styles from "./footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.main} container`}>
        <div className={styles.logo}>
          <Link href="/">
            <img
              src="/images/logo.png"
              alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} logo`}
              width={200}
              height={38}
              loading="lazy"
              className={styles.logo}
            />
          </Link>
          <div className={styles.circle}>
            <img src={circle.src} alt="" />
            <img src={circle.src} alt="" />
            <img src={circle.src} alt="" />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.AccordionMobile}>
            <Accordion>
              <AccordionPanel label="+ INFORMACIÓN ÚTIL">
                <Box>
                  <ul>
                    <li>
                      <Link href="/como-funciona">
                        <span>¿Cómo funciona?</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog">
                        <span>Blog</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/referidos">
                        <span>Referidos</span>
                      </Link>
                    </li>
                  </ul>
                </Box>
              </AccordionPanel>
            </Accordion>

            <Accordion>
              <AccordionPanel className={styles.label} label="+ MI CUENTA">
                <Box>
                  <ul>
                    <li>
                      <Link href="/iniciar-sesion">
                        <span>Iniciar Sesión</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/paga-tu-credito">
                        <span>Paga tu Crédito</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/ampliar-plazo">
                        <span>Ampliar Plazo</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/pide-tu-credito">
                        <span>Pide tu Crédito</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/pide-tu-crediplazo">
                        <span>Pide tu CrédiPlazo</span>
                      </Link>
                    </li>
                  </ul>
                </Box>
              </AccordionPanel>
            </Accordion>

            <a
              className={styles.button_mobile}
              href="https://trabajadores.crediplus.com.co/"
            >
              SOLICITAR PRÉSTAMO
            </a>
          </div>

          <div className={styles.Accordion}>
            <div>
              <h3 className={styles.label}>
                <span>+</span>INFORMACIÓN ÚTIL
              </h3>
              <ul>
                <li className={styles.link}>
                  <Link href="/Requisitos">
                    <span>Requisitos</span>
                  </Link>
                </li>
                <li className={styles.link}>
                  <Link href="/Aliados">
                    <span>Aliados</span>
                  </Link>
                </li>
                <li className={styles.link}>
                  <Link href="/Beneficios">
                    <span>Beneficios</span>
                  </Link>
                </li>
              </ul>

              <a
                className={styles.button}
                href="https://trabajadores.crediplus.com.co/"
              >
                SOLICITAR PRÉSTAMO
              </a>
            </div>

            <div>
              <h3 className={styles.label}>
                <span>+</span>MI CUENTA
              </h3>

              <ul>
                <li className={styles.link}>
                  <a href="https://trabajadores.crediplus.com.co/">
                    <span>Iniciar Sesión</span>
                  </a>
                </li>
                <li className={styles.link}>
                  <a href="https://trabajadores.crediplus.com.co/">
                    <span>Paga tu Crédito</span>
                  </a>
                </li>
                <li className={styles.link}>
                  <a href="https://trabajadores.crediplus.com.co/">
                    <span>Ampliar Plazo</span>
                  </a>
                </li>
                <li className={styles.link}>
                  <a href="https://trabajadores.crediplus.com.co/">
                    <span>Pide tu Crédito</span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className={styles.label}>
                <span>+</span>CONTÁCTANOS
              </h3>
              <ul>
                <li className={styles.link}>
                  <a href="mailto: info@crediplus.com.co">
                    info@crediplus.com.co
                  </a>
                </li>
                <li className={styles.link}>
                  <a href="tel:0000000000">000 - 000 - 0000</a>
                </li>
                <li className={styles.link}>Calle 70B Cra 41 # 187</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
