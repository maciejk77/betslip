export const totalStake = (stakes) => stakes.reduce((el, acc) => acc + el, 0);

export const maxOdds = (odds) =>
  odds
    .map((el) => el.oddsDecimal)
    .sort()
    .pop();
