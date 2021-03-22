import React, { useContext } from 'react';
import { OddsContext } from '../../odds';
import BetForm from '../BetForm';
import Filter from '../Filter';
import Loader from '../Loader';
import useStyles from './styles';

const BetSlip = () => {
  const { oddsUnder, oddsOver } = useContext(OddsContext);
  const { component, top } = useStyles();

  const isFetching = !(oddsUnder.length && oddsOver.length);

  const renderComponent = (
    <div className={component}>
      <div className={top}>
        <h1>Betslip</h1>
        <Filter />
      </div>

      <BetForm />
    </div>
  );

  return isFetching ? Loader : renderComponent;
};

export default BetSlip;
