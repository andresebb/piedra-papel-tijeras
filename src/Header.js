import React from "react";
import "./styles/Header.css";

const Header = () => {
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
            <h2>0</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
