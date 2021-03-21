import React from 'react';
import BetLine from '../BetLine';
import Button from '../Button';
import Filter from '../Filter';
import useStyles from './styles';

const BetSlip = () => {
  const { component, top, button } = useStyles();
  return (
    <div className={component}>
      <div className={top}>
        <h1>Betslip</h1>
        <Filter />
      </div>
      <BetLine />
      <BetLine />
      <div className={button}>
        <Button>Bet Now</Button>
      </div>
    </div>
  );
};

export default BetSlip;
