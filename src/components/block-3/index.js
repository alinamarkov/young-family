import styles from "./index.module.css";

import Feature from "./../feature";
import NavButton from "./../nav-button";


const features = [
  {
    price: "500 руб./час",
    description: `
      Если с ребёнком
      нужно посидеть
      до 4 часов
    `
  },
  {
    price: "450 руб./час",
    description: `Если с ребёнком
      нужно посидеть
      от 5 до 6 часов`
  }, 
  {
    price: "400 руб./час",
    description: `
      Если с ребёнком
      нужно посидеть
      от 7 до 8 часов
    `
  },
  {
    price: "350 руб./час",
    description: `
      Если с ребёнком
      нужно посидеть
      от 10 часов
    `
  }
];

function Block3() {
  return (
    <section className={styles.section}>
      <div className={styles.limitedBlock}>
        <div>
          <h1 className={styles.sectionName}>У нас - время работает на Вас!</h1>
          <h2 className={styles.subHeader}>Больше - значит выгоднее!</h2>
        </div>
        
        <div className={styles.features}>
          {features.map((feature, index) => (
            <Feature
              key={index}            
              price={feature.price}
              description={feature.description}
            />
          ))}
        </div>


        <NavButton 
          path="/nanny"
          text="Выбрать няню"
          active={true}
          backgroundColor=" #69DE6D"
          borderRadius="15px"
          fontColor="#fff"
          verticalPadding="1.2vw"
          boxShadow="0px 0.1vw 0.4vw #00000040"
        />
      </div>
    </section>
  );
  }

  export default Block3;