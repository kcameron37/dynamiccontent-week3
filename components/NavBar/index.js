import styles from './NavBar.module.css'
import Link from 'next/link' 

export default function NavBar() {
    return (
        <nav className={styles.navbar}>

        < div class = "header__open">
          <h1> The SPEED Team</h1>
          <img src={'icon/runicon.jpg'} width = '80'></img>
            </div>
            
       <h3>
        <Link href="index"> Home </Link>
       </h3>
       <h3>
        <Link href="about"> About Us </Link>
    </h3>
    
    </nav>
    )
}