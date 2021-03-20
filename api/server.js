const express = require('express');
const app = express();
const cors = require('cors');
const { bets } = require('./data/data.json');

let decimalOddsLessThanTwoData = [];
let decimalOddsMoreThanTwoData = [];

for (const bet of bets) {
  if (bet.odds.some((line) => line.oddsDecimal < 2)) {
    decimalOddsLessThanTwoData.push(bet);
  } else {
    decimalOddsMoreThanTwoData.push(bet);
  }
}

app.use(cors());

app.get('/decimalOddsMoreThanTwo', (req, res) => {
  res.send(decimalOddsMoreThanTwoData);
});

app.get('/decimalOddsLessThanTwo', (req, res) => {
  res.send(decimalOddsLessThanTwoData);
});

app.listen(4000, () => {
  console.log('Example app listening on port 4000!');
});
