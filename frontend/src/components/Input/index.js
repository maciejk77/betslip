import React from 'react';
import useStyles from './styles';

const Input = () => {
  const { component } = useStyles();
  return (
    <div className={component}>
      <input />
    </div>
  );
};

export default Input;
