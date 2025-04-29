import logo from "../../assets/Logo.svg";
import styles from "./Footer.module.css";
function Footer() {
    return(
        <footer>
            <section className={styles.footer}>
            <div className={styles.info}>
                <img src={logo} alt=""/>
                <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
            </div>
            <div className={styles.importantLinks}>
                <h3>Important Links</h3>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Reservations</a></li>
                <li><a href="/">Order Online</a></li>
                <li><a href="/">Login</a></li>
            </ul>
            </div>
            <div className={styles.contact}>
                <h3>Contact</h3>
            <ul>
            <li>Address: <br/> 123 Town Street, Chicago</li>
                <li>Phone: <br/> +00 123 456 789</li>
                <li>Email: <br/> little@lemon.com</li>
            </ul>
            </div>
            <div className={styles.socialMedia}>
                <h3>Social Media Links</h3>
            <ul>
                <li><a href="/">Facebook</a></li>
                <li><a href="/">Instagram</a></li>
                <li><a href="/">Twitter</a></li>
            </ul>
            </div>
            </section>
        </footer>
    )
}
export default Footer;
