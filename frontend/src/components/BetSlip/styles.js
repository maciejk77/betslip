import { createUseStyles } from 'react-jss';

export default createUseStyles(
  (theme) => ({
    component: {
      border: '1px solid black',
      padding: '20px 10px',
      width: '600px',
    },
    top: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    button: {
      textAlign: 'center',
    },
  }),
  { name: 'betslip' }
);
