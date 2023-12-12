

import styles from './page.module.css'
import Hero from './components/Hero'
import BettingGrid from './components/BettingGrid';
import BetCoinIntro from './components/BetCoinIntro';
import BetCoinBettingGrid from './components/BetCoinBettingGrid';
import JoinPromo from './components/JoinPromo';


const betCoinBets = [
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

const sports = ['Football', 'Basketball', 'Baseball', 'Soccer', 'Tennis'];



export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <BettingGrid bets={bets} sports={sports} />
      <BetCoinIntro />
      <BetCoinBettingGrid betCoinBets={betCoinBets} />
      <JoinPromo />

    </main>
  )
}
