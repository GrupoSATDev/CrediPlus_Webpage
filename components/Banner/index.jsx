import banner from "./banner.module.scss";
import Simulation from "@/components/Simulation";
import bgImg from "./images/bg.png";

const TopBanner = () => {
  return (
    <section className={banner.main}>
      <div className="container">
        <div className={banner.captionHome}>
          <h1 className={banner.title}>
            <span className={banner.title1}>Crédito</span><br />
            <span className={banner.title2}>100%</span><br />
            <span className={banner.title3}>en línea</span>
          </h1>
          <img
            srcSet={bgImg.src}
            alt="Credi Plus"
            width={620}
          />
          <a href="https://trabajadores.crediplus.com.co/" passHref target="_blank">
            <button className={banner.button}>Instalar App</button>
          </a>
          {/* <div className={banner.contentText}> */}
          <p>
            En <strong>Crediplus</strong> cuentas con el crédito en línea{" "}
            <strong>más confiable, ágil y adaptable del mercado.</strong>
          </p>
          <div className={banner.simulation}>
          <Simulation/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBanner;
