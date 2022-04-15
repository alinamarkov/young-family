import styles from "./index.module.css";

import Property from "./../property";
import NavButton from "./../nav-button";

const properties = [
  {
    src: "/logo1.svg",
    name: "Надёжность",
    description: `
      Мы тщательно проводим проверку будущих нянь, прежде чем предоставить
      им возможность работать в нашей команде.
    `,
    headerColor: "#23B8E8"
  },
  {
    src: "/logo2.svg",
    name: "Хорошие цены",
    description: `
      У нас - время работает на Вас! Чем дольше необходимо посидеть с
      ребёнком, тем выгоднее это будет для Вас!
    `,
    headerColor: "#FC8D26"
  }, 
  {
    src: "/logo3.svg",
    name: "Понимание",
    description: `
      Наше агентство состоит из молодых нянь, большниство из которых родились
      в многодетных семьях, благодаря чему нам легче найти общий язык с детьми.
    `,
    headerColor: "#69DE6D"
  }
];

function Block2() {
  return (
    <section className={styles.section}>

      <h1 className={styles.question}>Что мы готовы Вам предложить?</h1>
      
      <div className={styles.properties}>
        {properties.map((property, index) => (
          <Property 
            key={index}
            src={property.src}
            name={property.name}
            description={property.description}
            headerColor={property.headerColor}
          />
        ))}
      </div>

      <NavButton 
        path="/nanny"
        text="Начать поиск няни"
        active={true}
        backgroundColor="#23B8E8"
        borderRadius="1vw"
        fontColor="#fff"
        verticalPadding="1.2vw" 
        boxShadow="0px 0.1vw 0.4vw #00000040"
      />

    </section>
  );
  }

  export default Block2;