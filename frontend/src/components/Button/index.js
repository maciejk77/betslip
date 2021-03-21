import React from 'react';
import useStyles from './styles';

const Button = ({ children }) => {
  const { component } = useStyles();
  return <button className={component}>{children}</button>;
};

export default Button;
