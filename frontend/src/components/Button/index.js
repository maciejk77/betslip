import React from 'react';
import useStyles from './styles';

const Button = ({ children, onClick, type }) => {
  const { component } = useStyles();
  return (
    <button className={component} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
