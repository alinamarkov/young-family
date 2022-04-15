import styles from "./index.module.css";

import NavButton from "./../nav-button";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/logo.svg" alt="Young Family" height="100%" />
      </div>

      <div className={styles.buttons}>
        <NavButton path="/" text="О нас" active={true} />
        <NavButton path="/nanny" text="Няни" active={false}/>
      </div>
      
      <h1 className={styles.number}>+7 (999) 999-99-99</h1>
    </header>
  );
}

export default Header;
