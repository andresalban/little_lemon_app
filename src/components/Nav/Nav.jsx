import styles from "./Nav.module.css";
function Nav() {
    return(
        <>
        <nav className={styles.navbar}>
                <ul className={styles.itemsLists}>
                  <li>
                    <a href="/home">Home</a>
                  </li>
        
                  <li>
                    <a href="/about">About</a>
                  </li>
        
                  <li>
                    <a href="/menu">Menu</a>
                  </li>
        
                  <li>
                    <a href="/reservation">Reservation</a>
                  </li>
        
                  <li>
                    <a href="/orderOnline">Order online</a>
                  </li>
                  
                  <li>
                    <a href="/login">Login</a>
                  </li>
                </ul>
              </nav>
        </>
    )
}

export default Nav