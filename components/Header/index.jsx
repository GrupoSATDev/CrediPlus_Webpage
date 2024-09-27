import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './header.module.scss';
import burgerCloseIcon from './images/burger-close.svg';
import burgerIcon from './images/burger.svg';
import logo from './images/logo.svg';
import logoMobile from './images/logo-mobile.svg';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toogleMobile = () => {
    setOpenMenu(!openMenu);
  };

  const navigation = [
    { name: 'INICIO', href: '#' },
    { name: 'LOREM IPSUM', href: '#' },
    { name: 'LOREM IPSUM ', href: '#' },
    { name: 'LOREM', href: '#' },
    { name: 'LOREM', href: '#' },
    { name: 'Ingresa', href: '#', external: true },
  ];

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${scrolling ? styles.floating : ''}`}>
      <a href="#content" className="visually-hidden visible-when-focused bypass-block-link">
        Skip Navigation
      </a>
      <div className={`${styles.nav} ${(navigation) && styles.headerTransparent}`}>
        <div className={`${styles.content} container`}>
          <Link href="/" passHref>
            <picture>
              <source srcSet={logo.src} media="(min-width: 768px)" />
              <img src={logoMobile.src} alt="CrediPlus logo" className={styles.logo} />
            </picture>
          </Link>
          <button
            aria-controls="navbarmain"
            type="button"
            aria-label="Toggle navigation"
            className={`${styles.toggleMobil} hidden-laptop`}
            onClick={toogleMobile}
          >
            <img src={openMenu ? burgerCloseIcon.src : burgerIcon.src} alt="Open/Hide Menu" width="38" height="30" />
          </button>
          <div className={openMenu ? styles.navbar_collapse__opened : styles.navbar_collapse} id="navbarmain">
            <nav className={styles.navbarMenu}>
              {navigation.map((item) =>
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`${styles.navLink} active`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.name}
                    <span className="sr-only"> (Opens in a new tab)</span>
                  </a>
                ) : (
                  <Link key={item.name} href={item.href} passHref>
                    <span className={styles.navLink}>{item.name}</span>
                  </Link>
                )
              )}
            </nav>
            <div className={styles.col}>
              <div id="resyButton-lxcVJg6bjjq7nDSCsCMVE">&nbsp;</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;