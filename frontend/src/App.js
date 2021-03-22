import React, { useContext, useEffect } from 'react';
import { BASE_URL, OVER, UNDER } from '../src/constants';
import { ThemeProvider } from 'react-jss';
import { theme } from './theme';
import { OddsContext } from './odds';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BetSlip from '../src/components/BetSlip';
import Receipt from './components/Receipt';

const App = () => {
  const { setOddsOver, setOddsUnder } = useContext(OddsContext);

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
      <Router>
        <Switch>
          <Route path="/" component={BetSlip} exact />
          <Route path="/receipt" component={Receipt} exact />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
