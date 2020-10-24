import React, { useState, createContext } from "react";

export const scoreContext = createContext();

export const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(0);

  const addScore = (sube) => {
    if (sube === true) {
      setScore(score + 1);
    }
  };

  return (
    <scoreContext.Provider value={{ score, addScore }}>
      {children}
    </scoreContext.Provider>
  );
};
