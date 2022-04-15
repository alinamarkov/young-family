import styles from "./index.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.limitedBlock}>
        <img className={styles.logo} src="/logo4.svg" alt="Young Family" />
        <div className={styles.social}>
          <a href="https://vk.com/feed">
            <img src="/socialY.svg" alt="Yandex" />
          </a>  
          <a href="https://wa.me/79998887766">
            <img src="/socialW.svg" alt="WhatsApp" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
