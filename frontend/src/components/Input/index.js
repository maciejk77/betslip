import React from 'react';
import useStyles from './styles';

// TODO: fix input useState, update stakes on OddsContext, refactor to useForm hook?

const Input = ({ name, onChange, value }) => {
  const { component } = useStyles();
  return (
    <div className={component}>
      <input name={name} onChange={onChange} value={value} />
    </div>
  );
};

export default Input;
