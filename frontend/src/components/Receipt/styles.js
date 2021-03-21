import { createUseStyles } from 'react-jss';

export default createUseStyles(
  (theme) => ({
    component: {
      border: '1px solid black',
      padding: '20px 10px',
    },
  }),
  { name: 'receipt' }
);
