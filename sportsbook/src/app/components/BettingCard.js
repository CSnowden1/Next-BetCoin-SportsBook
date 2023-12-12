// components/BettingCard.js
import React from 'react';
import styles from './BettingCard.module.css'; // We will create this CSS module next

const BettingCard = ({ match, odds }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2>{match}</h2>
      </div>
      <div className={styles.body}>
        {odds.map((odd, index) => (
          <div key={index} className={styles.betOption}>
            <span>{odd.team}</span>
            <button className={styles.oddsButton}>{odd.value}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BettingCard;
