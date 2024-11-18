import { Accordion, AccordionPanel, Box } from "grommet";
import circle from "./images/circle.png";
import styles from "./footer.module.scss";
import Link from "next/link";

const Footer = () => {
  
  const section1 = {
    label: "INFORMACIÓN ÚTIL",
    links: [
      { href: "/#requisitos", text: "Requisitos" },
      { href: "/#aliados", text: "Aliados" },
      { href: "/#beneficios", text: "Beneficios" },
    ],
  };

  const section2 = {
    label: "MI CUENTA",
    links: [
      {
        href: "https://trabajadores.crediplus.com.co/",
        text: "Iniciar Sesión",
      },
      {
        href: "https://trabajadores.crediplus.com.co/",
        text: "Paga tu Crédito",
      },
      { href: "https://trabajadores.crediplus.com.co/", text: "Ampliar Plazo" },
      {
        href: "https://trabajadores.crediplus.com.co/",
        text: "Pide tu Crédito",
      },
    ],
  };

  const section3 = {
    label: "CONTÁCTANOS",
    links: [
      { href: "mailto:info@crediplus.com.co", text: "info@crediplus.com.co" },
      { href: "tel:0000000000", text: "000 - 000 - 0000" },
      { text: "Calle 70B Cra 41 # 187" },
    ],
  };

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
                    {section1.links.map((link, index) => (
                      <li key={index}>
                        {link.href ? (
                          <Link href={link.href}>{link.text}</Link>
                        ) : (
                          <span>{link.text}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </Box>
              </AccordionPanel>
            </Accordion>

            <Accordion>
              <AccordionPanel className={styles.label} label="+ MI CUENTA">
                <Box>
                  <ul>
                    {section2.links.map((link, index) => (
                      <li key={index}>
                        {link.href ? (
                          <a href={link.href} target="_blank">{link.text}</a>
                        ) : (
                          <span>{link.text}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </Box>
              </AccordionPanel>
            </Accordion>

            <Accordion>
              <AccordionPanel className={styles.label} label="+ CONTÁCTANOS">
                <Box>
                  <ul>
                    {section3.links.map((link, index) => (
                      <li key={index}>
                        {link.href ? (
                          <a href={link.href}>{link.text}</a>
                        ) : (
                          <span>{link.text}</span>
                        )}
                      </li>
                    ))}
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
                {section1.links.map((link, index) => (
                  <li className={styles.link} key={index}>
                    {link.href ? (
                      <a href={link.href}>{link.text}</a>
                    ) : (
                      <span>{link.text}</span>
                    )}
                  </li>
                ))}
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
                {section2.links.map((link, index) => (
                  <li className={styles.link} key={index}>
                    {link.href ? (
                      <a href={link.href} target="_blank">{link.text}</a>
                    ) : (
                      <span>{link.text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={styles.label}>
                <span>+</span>CONTÁCTANOS
              </h3>
              <ul>
                {section3.links.map((link, index) => (
                  <li className={styles.link} key={index}>
                    {link.href ? (
                      <a href={link.href}>{link.text}</a>
                    ) : (
                      <span>{link.text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
