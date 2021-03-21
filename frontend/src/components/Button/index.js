import React from 'react';
import useStyles from './styles';

const Button = ({ children, onClick }) => {
  const { component } = useStyles();
  return (
    <div className={component} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
