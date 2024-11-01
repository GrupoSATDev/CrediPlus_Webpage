import { useState } from "react";
import Link from "next/link";
import styles from "./header.module.scss";
import burgerCloseIcon from "./images/burger-close.svg";
import burgerIcon from "./images/burger.svg";
import logo from "./images/logo.svg";
import logoMobile from "./images/logo-mobile.svg";
import user from "./images/user-solid.svg";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMobile = () => {
    setOpenMenu(!openMenu);
  };

  const navigation = [
    { name: "INICIO", href: "#" },
    { name: "REQUISITOS", href: "#" },
    { name: "ALIADOS", href: "#" },
    { name: "BENEFICIOS", href: "#" },
  ];

  return (
    <header>
      <a
        href="#content"
        className="visually-hidden visible-when-focused bypass-block-link">
        Skip Navigation
      </a>
      <div className={`${styles.nav} ${styles.headerTransparent}`}>
        <div className={`${styles.content} container`}>
          <Link href="/#" passHref>
            <picture>
              <source srcSet={logo.src} media="(min-width: 768px)" />
              <img
                src={logoMobile.src}
                alt="CrediPlus logo"
                className={styles.logo}
              />
            </picture>
          </Link>
          <a href="https://trabajadores.crediplus.com.co/" className={styles.contact}>
              <img width={16} height={16} src={user.src} alt="user-icon"  className={styles.icon}/>Ingresa
            </a>
          <button
            aria-controls="navbarmain"
            type="button"
            aria-label="Toggle navigation"
            className={`${styles.toggleMobil} hidden-laptop`}
            onClick={toggleMobile}>
            <img
              src={openMenu ? burgerCloseIcon.src : burgerIcon.src}
              alt="Open/Hide Menu"
              width="38"
              height="30"
            />
          </button>
          <div
            className={
              openMenu ? styles.navbar_collapse__opened : styles.navbar_collapse
            }
            id="navbarmain">
            <nav className={styles.navbarMenu}>
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} passHref>
                  <span className={styles.navLink}>{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;