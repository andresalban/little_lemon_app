import logo from "../../assets/Logo.svg";
import styles from "./Header.module.css";
import Nav from "../Nav/Nav";

function Header() {
  return (
    <header className={styles.header}>
      <section className={styles.logoContainer}>
        <img src={logo} alt="Logo little Lemon" />
      </section>

      <Nav/>
    </header>
  );
}
export default Header;
