import React, { useContext } from 'react';
import { OddsContext } from '../../odds';
import useStyles from './styles';
import { totalStake } from '../../helpers';
// TODO: fix redirect to home on BACK, Total Stake value

const Receipt = () => {
  const { stakes } = useContext(OddsContext);
  const { component } = useStyles();
  return (
    <div className={component}>
      <div>[BACK]</div>
      <div>Receipt</div>
      <div>Your bet has been placed</div>
      <div>Total Stake: {totalStake(stakes)}</div>
    </div>
  );
};

export default Receipt;
