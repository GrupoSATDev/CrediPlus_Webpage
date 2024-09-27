import React from 'react';
import top from './banner.module.scss';
import bgDesktop from './images/home-desktop.jpg';
import bgMobile from './images/home-mobile.jpg';
import Link from 'next/link';
import Simulation from "@/components/Simulation";

const Banner = () => {
  return (
    <article className={top.main}>
      <picture>
        <source srcSet={bgDesktop.src} media="(min-width: 768px)" />
        <img
          src={bgMobile.src}
          alt="Background Image"
          loading='eager'
          className='img-fluid'
        />
      </picture>
      <div className={top.content}>
        <div className={top.text}>
          <h1 className={top.text0}>Crédito</h1>
          <h1 className={top.text1}>100%</h1>
          <h1 className={top.text2}>en línea</h1>
        </div>
        <Link href="/#" passHref>
          <button className={top.button}>Instalar App</button>
        </Link>
        <div className={top.contentText}>
          <p>En <b>Crediplus</b> cuentas con el crédito en línea <b>más confiable, ágil y adaptable del mercado.</b></p>
        </div>
        <div className={top.contentSimulation}>
          <Simulation />
        </div>
      </div>
    </article>
  );
};

export default Banner;