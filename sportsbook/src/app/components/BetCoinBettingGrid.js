// components/BetCoinBettingGrid.js
'use client'



import React, { useState } from 'react';
import BettingCard from './BettingCard'; // Reuse the BettingCard component
import styles from './BettingGrid.module.css'; // Reuse the BettingGrid styles

const BetCoinBettingGrid = ({ betCoinBets }) => {
  const [selectedSport, setSelectedSport] = useState('All');

  const filteredBets = selectedSport === 'All'
    ? betCoinBets
    : betCoinBets.filter(bet => bet.sport === selectedSport);

  const displayedBets = filteredBets.slice(0, 12);

  return (
    <div>
      {/* Sports Filter Buttons */}
      <div className={styles.filterButtons}>
        {/* Dynamically generate filter buttons based on available sports */}
      </div>

      {/* Betting Cards Grid */}
      <div className={styles.gridContainer}>
        {displayedBets.map((bet, index) => (
          <BettingCard key={index} match={bet.match} odds={bet.odds} />
        ))}
      </div>
    </div>
  );
};

export default BetCoinBettingGrid;
