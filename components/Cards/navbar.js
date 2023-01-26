import styles from '.Navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
    <nav className = {styles.navbar}>
        
        <h3>
        <Link href="index.js"> Home </Link>
        </h3>
        
        <h3>
        <Link href="about"> About Us </Link>
        </h3>
    </nav>
}