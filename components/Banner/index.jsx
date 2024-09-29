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
        <div className={top.captionHome}>
          <h1 className={top.title}>
            <span className={top.title1}>Crédito</span>
            <span className={top.title2}>100%</span>
            <span className={top.title3}>en línea</span>
          </h1>
          <Link href="/#" passHref>
            <button className={top.button}>Instalar App</button>
          </Link>
        </div>
        
        <div className={top.contentText}>
          <p>En <strong>Crediplus</strong> cuentas con el crédito en línea <strong>más confiable, ágil y adaptable del mercado.</strong></p>
        </div>
        <div className={top.contentSimulation}>
          <Simulation />
        </div>
      </div>
    </article>
  );
};

export default Banner;