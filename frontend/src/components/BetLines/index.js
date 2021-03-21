import React, { useContext } from 'react';
import { OddsContext } from '../../odds';
import Input from '../Input';
import useStyles from './styles';

const BetLines = () => {
  const { oddsType, oddsUnder, oddsOver, setStakes } = useContext(OddsContext);
  const odds = oddsType === 'under' ? oddsUnder : oddsOver;

  //console.log('odds => ', odds);
  const { component } = useStyles();

  const renderComponent = ({ name, odds }) => (
    <div className={component} key={name}>
      <div>
        <div>{name}</div>
        <div>{odds[0].oddsDecimal}</div>
      </div>
      <Input />
    </div>
  );

  return odds.map((line) => renderComponent(line));
};

export default BetLines;
