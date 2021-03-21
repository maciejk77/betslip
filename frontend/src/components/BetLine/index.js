import React from 'react';
import Input from '../Input';
import useStyles from './styles';

const BetLine = () => {
  const { component } = useStyles();
  return (
    <div className={component}>
      <div>
        <div>Bet name</div>
        <div>bestOddsDecimal</div>
      </div>
      <Input />
    </div>
  );
};

export default BetLine;
