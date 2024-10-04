import { useState, useEffect } from 'react';
import { Accordion, AccordionPanel, Box } from 'grommet';
import circle from './images/circle.png';
import styles from './footer.module.scss';
import Link from 'next/link';

const Footer = () => {
    const [activeIndex, setActiveIndex] = useState([]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setActiveIndex([0]); 
            } else {
                setActiveIndex([]);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <footer className={styles.footer}>
            <div className={`${styles.main} container`}>
                <div className={styles.logo}>
                    <Link href="/">
                        <img src='/images/logo.png' alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} logo`}  width={200} height={38} loading='lazy' className={styles.logo} />
                    </Link>
                    <div className={styles.circle}>
                        <img src={circle.src} alt="" />
                        <img src={circle.src} alt="" />
                        <img src={circle.src} alt="" />
                    </div>
                </div>
                <div className={styles.info}>
                    <Accordion activeIndex={activeIndex}>
                        <AccordionPanel className={styles.label} label="+ INFORMACIÓN ÚTIL">
                            <Box>
                                <ul>
                                    <li>
                                        <Link href="/contacto">
                                            <span>Contáctanos</span>
                                        </Link>
                                    </li>
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
                </div>
                <div className={styles.count}>
                    <Accordion activeIndex={activeIndex}>
                        <AccordionPanel className={styles.label} label="+ MI CUENTA" >
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
                </div>
                <div className={styles.button}>
                    <a href='#'>SOLICITAR PRÉSTAMO</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
