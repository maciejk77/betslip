import React from 'react';
import BetLine from '../BetLine';
import Button from '../Button';
import Filter from '../Filter';

const BetSlip = () => (
  <>
    <h1>Betslip</h1>
    <Filter />
    <BetLine />
    <BetLine />
    <Button>Bet Now</Button>
  </>
);

export default BetSlip;
