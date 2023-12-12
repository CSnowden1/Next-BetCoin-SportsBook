// components/BettingGrid.js
'use client'


import React, { useState } from 'react';
import BettingCard from './BettingCard';
import styles from './BettingGrid.module.css';

// Example data
const sports = ['Football', 'Basketball', 'Baseball', 'Soccer', 'Tennis'];

const bets = [
    {
        id: 1,
        sport: 'Football',
        match: 'Team A vs Team B',
        odds: [
            { team: "Team A", value: "1.5" },
            { team: "Team B", value: "2.2" }
        ]
    },
    {
        id: 2,
        sport: 'Basketball',
        match: 'Team C vs Team D',
        odds: [
            { team: "Team C", value: "1.8" },
            { team: "Team D", value: "1.9" }
        ]
    },
    {
        id: 3,
        sport: 'Soccer',
        match: 'Team E vs Team F',
        odds: [
            { team: "Team E", value: "2.0" },
            { team: "Team F", value: "1.7" }
        ]
    },
    // Add more bet objects as needed
    // ...
];





const BettingGrid = ({ bets, sports }) => {
  const [selectedSport, setSelectedSport] = useState('All');

  const filteredBets = selectedSport === 'All'
    ? bets
    : bets.filter(bet => bet.sport === selectedSport);

  const displayedBets = filteredBets.slice(0, 12);

  return (
    <div>
      <div className={styles.filterButtons}>
        {sports.map((sport, index) => (
          <button key={index} onClick={() => setSelectedSport(sport)} className={styles.filterButton}>
            {sport}
          </button>
        ))}
        <button onClick={() => setSelectedSport('All')} className={styles.filterButton}>All Sports</button>
      </div>

      <div className={styles.gridContainer}>
        {displayedBets.map((bet, index) => (
          <BettingCard key={index} match={bet.match} odds={bet.odds} />
        ))}
      </div>
    </div>
  );
};

export default BettingGrid;
