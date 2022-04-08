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
      <NavButton 
        path="/nanny" 
        text="Выбрать няню" 
        verticalPadding="1.2vw" 
        backgroundColor="#FFEBCC" 
        borderRadius="1vw"
        boxShadow="0px 0.1vw 0.4vw #00000040"
      />
    </section>
  );
}

export default Block1;
