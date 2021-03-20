import React from 'react';

const Receipt = ({ stake }) => (
  <div style={styles.component}>
    <div>Receipt</div>
    <div>Your bet has been placed</div>
    <div>Total Stake: {stake}</div>
  </div>
);

const styles = {
  component: {
    border: '1px solid black',
    padding: '20px 10px',
  },
};
export default Receipt;
