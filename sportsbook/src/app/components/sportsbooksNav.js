// components/BasicNav.js
import React from 'react';
import Link from 'next/link';
import styles from './BasicNav.module.css'; // Assuming you have this CSS module

const BasicNav = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" passHref>
          <span className={styles.navLogo}>BetCoin</span>
        </Link>
        <div className={styles.navMenu}>
          <Link href="/live-betting" passHref><span className={styles.navItem}>Live Betting</span></Link>
          <Link href="/upcoming-events" passHref><span className={styles.navItem}>Upcoming Events</span></Link>
          <Link href="/promotions" passHref><span className={styles.navItem}>Promotions</span></Link>
          {/* Add more navigation items as needed */}
        </div>
        <div className={styles.navAuth}>
          <Link href="/sign-in" passHref><span className={styles.navItem}>Sign In</span></Link>
          <Link href="/register" passHref><span className={styles.navItem}>Register</span></Link>
        </div>
      </div>
    </nav>
  );
};

export default BasicNav;
