import { createUseStyles } from 'react-jss';

export default createUseStyles(
  (theme) => ({
    component: {
      border: `1px solid ${theme.themeColour2}`,
      backgroundColor: theme.baseColour,
      borderRadius: 10,
      padding: 5,
      width: 125,
    },
  }),
  { name: 'button' }
);
