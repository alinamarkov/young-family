import styles from "./index.module.css";


function Feature(props) {
  const {price, description} = props;

  return (
    <div className={styles.feature}>
      <h2 className={styles.price}>{price}</h2>
      <span className={styles.description}>{description}</span>
    </div>
  );
}

export default Feature;
