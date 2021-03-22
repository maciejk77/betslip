import React, { useContext } from 'react';
import { maxOdds } from '../../helpers';
import { OddsContext } from '../../odds';
import Button from '../Button';
import Input from '../Input';
import useStyles from './styles';
import { useHistory } from 'react-router-dom';

const BetForm = () => {
  const { component } = useStyles();
  const history = useHistory();
  const { oddsType, oddsUnder, oddsOver, stakes, setStakes } = useContext(
    OddsContext
  );
  const odds = oddsType === 'under' ? oddsUnder : oddsOver;

  // TODO: fix totalStakes to be value * maxOdds(odds)
  // TODO: add validation only numbers, and no empty fields, 2 digits?
  console.log(stakes);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStakes({ ...stakes, [name]: parseInt(value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/receipt');
  };

  const renderComponent = ({ name, odds }, idx) => (
    <div className={component} key={name}>
      <div>
        <div>{name}</div>
        <div>{maxOdds(odds)}</div>
      </div>
      <Input
        name={`stake${idx}`}
        value={stakes[`stake${idx}`] || ''}
        onChange={handleChange}
      />
    </div>
  );

  return (
    <form onSubmit={handleSubmit}>
      {odds.map((line, idx) => renderComponent(line, idx))}
      <Button type="submit">Bet Now</Button>
    </form>
  );
};

export default BetForm;
