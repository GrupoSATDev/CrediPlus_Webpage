import Banner from "../Banner";
import Simulation from "../Simulation/index";
import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.container}>
      <Banner />
      <Simulation />
    </section>
  );
};

export default Hero;
