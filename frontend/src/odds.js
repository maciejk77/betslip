import React, { createContext, useState } from 'react';

export const OddsContext = createContext();

export function OddsProvider({ children }) {
  const [oddsType, setOddsType] = useState('under');
  const [oddsUnder, setOddsUnder] = useState([]);
  const [oddsOver, setOddsOver] = useState([]);
  const [stakes, setStakes] = useState([]);

  return (
    <OddsContext.Provider
      value={{
        oddsType,
        setOddsType,
        oddsOver,
        oddsUnder,
        setOddsOver,
        setOddsUnder,
        stakes,
        setStakes,
      }}
    >
      {children}
    </OddsContext.Provider>
  );
}
