import React from 'react';
import useStyles from './styles';

// TODO: fix input useState, update stakes on OddsContext, refactor to useForm hook?

const Input = () => {
  const { component } = useStyles();
  return (
    <div className={component}>
      <input />
    </div>
  );
};

export default Input;
