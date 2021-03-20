import React from 'react';
import Input from '../Input';

const BetLine = () => (
  <div style={styles.component}>
    <div>
      <div>Bet name</div>
      <div>bestOddsDecimal</div>
    </div>
    <Input />
  </div>
);

const styles = {
  component: {
    alignItems: 'center',
    border: '1px solid black',
    display: 'flex',
    justifyContent: 'space-between',
    margin: 20,
    marginBottom: 10,
    padding: '20px 10px',
  },
};

export default BetLine;
