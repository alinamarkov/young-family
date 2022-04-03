import styles from "./index.module.css";

function NavButton(props) {
  const {text, active, borderRadius, backgroundColor, fontColor} = props;

  return (
    <input 
      className={`${styles.button} ${active ? styles.active : styles.default}`}
      type="button" 
      value={text}
      style={{
        borderRadius: borderRadius,
        backgroundColor: backgroundColor,
        color: fontColor
      }}
    />
  );
}

export default NavButton;
