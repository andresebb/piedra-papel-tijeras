import React, { useContext } from "react";
import "./styles/Header.css";
import { scoreContext } from "./Context";

const Header = () => {
  const { score } = useContext(scoreContext);
  return (
    <>
      <div className="header">
        <div className="header-container">
          <div className="header-options">
            <h2>Piedra</h2>
            <h2>Papel</h2>
            <h2>Tijeras</h2>
          </div>
          <div className="header-score">
            <span>Score</span>
            <h2>{score}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
