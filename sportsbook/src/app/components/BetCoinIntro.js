// components/BetCoinIntro.js
import React from 'react';
import styles from './BetCoinIntro.module.css'; // We will create this CSS module next

const BetCoinIntro = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to BetCoin Sports Betting</h1>
      <p>
        Experience the future of sports betting with BetCoin. Our platform 
        leverages the latest in Stypto wallet technology, enabling you to place 
        eBets seamlessly and trade bets across different sportsbooks. 
        Secure, fast, and innovative betting is just a few clicks away.
      </p>
      <button className={styles.walletButton}>
        Connect Your Stypto Wallet
      </button>
      <p>
        Don't have a Stypto wallet yet? Sign up here and 
        join the revolution in sports betting.
      </p>
    </div>
  );
};

export default BetCoinIntro;
