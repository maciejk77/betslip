import React, { useContext } from 'react';
import { OddsContext } from '../../odds';
import useStyles from './styles';
import { totalStake } from '../../helpers';
import { useHistory } from 'react-router-dom';
// TODO: Total Stake value - to be odds * stake sum of

const Receipt = () => {
  const { stakes } = useContext(OddsContext);
  const { component } = useStyles();
  const history = useHistory();
  const handleClick = () => history.push('/');

  const sumOfStakes = totalStake(Object.values(stakes));

  return (
    <div className={component}>
      <div onClick={handleClick}>[BACK]</div>
      <div>Receipt</div>
      <div>Your bet has been placed</div>
      <div>Total Stake: {sumOfStakes}</div>
    </div>
  );
};

export default Receipt;
