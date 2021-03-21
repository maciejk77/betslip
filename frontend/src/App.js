import React, { useContext, useEffect } from 'react';
import BetSlip from '../src/components/BetSlip';
import { BASE_URL, OVER, UNDER } from '../src/constants';
import { ThemeProvider } from 'react-jss';
import { theme } from './theme';
import { OddsContext } from './odds';

const App = () => {
  const { oddsOver, oddsUnder, setOddsOver, setOddsUnder } = useContext(
    OddsContext
  );

  const isFetching = !(oddsUnder.length && oddsOver.length);

  useEffect(() => {
    fetchDataFor(UNDER);
    fetchDataFor(OVER);
  }, []);

  const fetchDataFor = async (type) => {
    const isOddsOver = type === OVER;
    const URL = `${BASE_URL}/${type}`;
    const data = await fetch(URL);
    const dataJSON = await data.json();
    isOddsOver ? setOddsOver(dataJSON) : setOddsUnder(dataJSON);
  };

  return (
    <ThemeProvider theme={theme}>
      {isFetching ? <p>LOADING...</p> : <BetSlip />}
    </ThemeProvider>
  );
};

export default App;
