import styles from "./index.module.css";

import Header from "./../header";
import NavButton from "./../nav-button";

function Block1() {
  return (
    <section className={styles.section}>
      <Header />
      <h1 className={styles.companyName}>Young Family</h1>
      <span className={styles.companyDescription}>
        Молодая команда нянь, созданная помочь молодым семьям, 
        проследив за ребёнком, пока взрослых нет дома!
      </span>
      <NavButton text="Выбрать няню" active={true} borderRadius="15px"/>
    </section>
  );
}

export default Block1;
