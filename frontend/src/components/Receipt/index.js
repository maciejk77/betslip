import React from 'react';
import useStyles from './styles';

const Receipt = ({ stake }) => {
  const { component } = useStyles();
  return (
    <div className={component}>
      <div>Receipt</div>
      <div>Your bet has been placed</div>
      <div>Total Stake: {stake}</div>
    </div>
  );
};

export default Receipt;
