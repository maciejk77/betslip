import React from 'react';

const Button = ({ children }) => (
  <button style={styles.component}>{children}</button>
);

const styles = {
  component: {
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: 10,
    padding: 5,
    width: 125,
  },
};

export default Button;
