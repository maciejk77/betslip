import { createUseStyles } from 'react-jss';

export default createUseStyles(
  (theme) => ({
    component: {
      alignItems: 'center',
      border: '1px solid black',
      display: 'flex',
      justifyContent: 'space-between',
      margin: 20,
      marginBottom: 10,
      padding: '20px 10px',
    },
  }),
  { name: 'betform' }
);
