import homeMobile1 from "./images/mobile.webp";
import homeDesktop1 from "./images/desktop.webp";
import bgImg from "./images/bg.png";
import top from "./banner.module.scss";
import Link from "next/link";

const Banner = () => {
  return (
    <article className={top.main}>
      {/* Imagen responsiva */}
      <picture>
        <source srcSet={homeDesktop1.src} media="(min-width: 480px)" />
        <img
          src={homeMobile1.src}
          alt="Videre Rooftop Restaurant & Bar"
          loading="eager"
          className="img-fluid"
          width={1920}
          height={500}
        />
      </picture>

      <div className={top.captionHome}>
        <h1 className={top.title}>
          <span className={top.title1}>Crédito</span>
          <span className={top.title2}>100%</span>
          <span className={top.title3}>en línea</span>
        </h1>
        <img 
          srcSet={bgImg.src}
          alt="Credi Plus"
          width={650}
          height={400}
          loading="eager"
        />
        <a href="/#" passHref>
          <button className={top.button}>Instalar App</button>
        </a>
        {/* <div className={top.contentText}> */}
          <p>En <strong>Crediplus</strong> cuentas con el crédito en línea <strong>más confiable, ágil y adaptable del mercado.</strong></p>
        {/* </div> */}
      </div>
    </article>
  );
};

export default Banner;