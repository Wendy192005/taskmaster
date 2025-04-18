import Link from 'next/link';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/" className={styles.navLink}>Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/login" className={styles.navLink}>Login</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/dashboard" className={styles.navLink}>Dashboard</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/ItemList" className={styles.navLink}>Item List</Link> {/* Added link to Item List */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
