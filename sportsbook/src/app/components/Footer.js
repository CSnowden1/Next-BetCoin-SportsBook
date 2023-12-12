// components/Footer.js
import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css'; // We will create this CSS module next

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <section className={styles.linksSection}>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </section>
        <section className={styles.socialMediaSection}>
          {/* Social Media Icons/Links */}
          <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://facebook.com/yourfacebook" target="_blank" rel="noopener noreferrer">Facebook</a>
          {/* Add more social links as needed */}
        </section>
      </div>
      <div className={styles.copyRight}>
        <p>© {new Date().getFullYear()} BetCoin. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
