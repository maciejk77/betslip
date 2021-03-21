import React, { useContext } from 'react';
import { OddsContext } from '../../odds';
import BetLines from '../BetLines';
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

      <BetLines />
      <div className={button}></div>
    </div>
  );
};

export default BetSlip;
