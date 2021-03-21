import React from 'react';
import BetSlip from '../src/components/BetSlip';
import { ThemeProvider } from 'react-jss';
import { theme } from './theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <BetSlip />
  </ThemeProvider>
);

export default App;
