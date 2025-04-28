import logo from "./Logo.svg";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <section className={styles.logoContainer}>
        <img src={logo} alt="Logo little Lemon" />
      </section>

      <nav className={styles.navbar}>
        <a href="/home">Home</a>

        <a href="/about">About</a>

        <a href="/menu">Menu</a>

        <a href="/reservation">Reservation</a>

        <a href="/rderOnline">Order online</a>

        <a href="/login">Login</a>
      </nav>
    </header>
  );
}
export default Header;
