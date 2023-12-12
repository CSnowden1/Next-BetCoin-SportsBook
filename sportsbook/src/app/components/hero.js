// components/Hero.js
import React from 'react';
import styles from './Hero.module.css'; // We will create this CSS module next

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1>Welcome to BetCoin Sportsbook</h1>
        <p>The ultimate destination for online betting and sports action.</p>
        <button className={styles.ctaButton}>Join Now</button>
      </div>
    </div>
  );
};

export default Hero;
