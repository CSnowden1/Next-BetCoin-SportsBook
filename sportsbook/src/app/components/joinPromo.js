// components/JoinPromo.js
import React from 'react';
import styles from './JoinPromo.module.css'; // Assuming you have this CSS module

const JoinPromo = () => {
  return (
    <div className={styles.promoContainer}>
      <h2>Join BetCoin Today!</h2>
      <p>Sign up now and get exclusive access to the best bets and odds in the world of sports.</p>
        <div className={styles.signupButton}>Sign Up Now</div>
    </div>
  );
};

export default JoinPromo;
