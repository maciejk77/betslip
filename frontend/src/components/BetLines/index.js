import React, { useContext } from 'react';
import { maxOdds } from '../../helpers';
import { OddsContext } from '../../odds';
import Input from '../Input';
import useStyles from './styles';

//TODO: fix setStakes

const BetLines = () => {
  const { oddsType, oddsUnder, oddsOver, setStakes } = useContext(OddsContext);
  const odds = oddsType === 'under' ? oddsUnder : oddsOver;

  const { component } = useStyles();

  const renderComponent = ({ name, odds }) => (
    <div className={component} key={name}>
      <div>
        <div>{name}</div>
        <div>{maxOdds(odds)}</div>
      </div>
      <Input />
    </div>
  );

  return odds.map((line) => renderComponent(line));
};

export default BetLines;
