import React, { useContext } from 'react';
import useStyles from './styles';
import { options } from '../../constants';
import { OddsContext } from '../../odds';

const Filter = () => {
  const { setOddsType } = useContext(OddsContext);
  const { component } = useStyles();

  const handleChange = (e) => {
    setOddsType(e.target.value);
  };

  return (
    <select name="odds" id="odds" onChange={handleChange}>
      {options.map(({ label, name }) => (
        <option key={label} value={name}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default Filter;
