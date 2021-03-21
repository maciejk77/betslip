import React, { useContext } from 'react';
import { OddsContext } from '../../odds';
import BetLines from '../BetLines';
import Button from '../Button';
import Filter from '../Filter';
import useStyles from './styles';

const BetSlip = () => {
  const { component, top, button } = useStyles();
  const { oddsUnder, oddsOver } = useContext(OddsContext);

  const isFetching = !(oddsUnder.length && oddsOver.length);
  const Loader = <p>Loading...</p>;

  const renderComponent = (
    <div className={component}>
      <div className={top}>
        <h1>Betslip</h1>
        <Filter />
      </div>

      <BetLines />
      <div className={button}>
        <Button>Bet Now</Button>
      </div>
    </div>
  );

  return isFetching ? Loader : renderComponent;
};

export default BetSlip;
