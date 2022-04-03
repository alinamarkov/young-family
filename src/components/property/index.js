import styles from "./index.module.css";

function Property(props) {
  const {name, src, description, headerColor} = props;

  return (
    <div className={styles.block}>
      <img src={src} alt={name} width="60px" height="60px" />
      <div className={styles.blockWithText}>
        <h2 style={{color: headerColor}} className={styles.header}>{name}</h2>
        <span className={styles.description}>
          {description}
        </span>
      </div>
    </div>
  );
}

export default Property;
