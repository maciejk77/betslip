import React from 'react';
import BetLine from '../BetLine';
import Button from '../Button';
import Filter from '../Filter';

const BetSlip = () => (
  <div style={styles.component}>
    <div style={styles.top}>
      <h1>Betslip</h1>
      <Filter />
    </div>
    <BetLine />
    <BetLine />
    <div style={styles.button}>
      <Button>Bet Now</Button>
    </div>
  </div>
);

const styles = {
  component: {
    border: '1px solid black',
    padding: '20px 10px',
    width: '600px',
  },
  top: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    textAlign: 'end',
  },
};

export default BetSlip;
