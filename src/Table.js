import React, { useState } from "react";
import "./styles/Table.css";
import Piedra from "./images/icon-rock.svg";
import Papel from "./images/icon-paper.svg";
import Tijera from "./images/icon-scissors.svg";

const Table = () => {
  const [playing, setPlaying] = useState(false);
  const [userImage, setUserImage] = useState();
  const [cpuImage, setCpuImage] = useState();
  const [result, setResult] = useState("");

  const startGame = (e) => {
    const userSelection = parseInt(e.target.value);
    const cpuSelection = Math.floor(Math.random() * (4 - 1) + 1);
    setPlaying(true);

    winner(userSelection, cpuSelection);
    console.log(cpuSelection);

    //Setiando la imagen de la seleccion del user
    switch (userSelection) {
      case 1:
        setUserImage("rock");
        break;
      case 2:
        setUserImage("paper");
        break;
      case 3:
        setUserImage("scissors");
        break;
      default:
        break;
    }

    //Setiando la imagen de la seleccion del Cpu
    switch (cpuSelection) {
      case 1:
        setCpuImage("rock");
        break;
      case 2:
        setCpuImage("paper");
        break;
      case 3:
        setCpuImage("scissors");
        break;
      default:
        break;
    }
  };

  const winner = (user, cpu) => {
    if (user === 1 && cpu === 1) {
      console.log("Empate, los dos eligieron piedra");
      setResult("Empate");
    }
    if (user === 1 && cpu === 2) {
      console.log("Gana cpu, papel le gana a piedra");
      setResult("Perdiste");
    }
    if (user === 1 && cpu === 3) {
      console.log("Gana user, piedra le gana a tijera");
      setResult("Ganaste");
    }
    if (user === 2 && cpu === 1) {
      console.log("Gana user, papel le gana a piedra");
      setResult("Ganaste");
    }
  };

  const restartGame = () => {
    setPlaying(false);
    setResult("");
  };

  return (
    <div className="table">
      {!playing ? (
        <div className="table-items">
          <button className="item-game rock" value="1" onClick={startGame}>
            <img
              value="1"
              src="https://leonidasesteban.github.io/rock-paper-scissors-react/images/icon-rock.svg"
              alt=""
            />
          </button>
          <button className="item-game paper" value="2" onClick={startGame}>
            <img
              value="2"
              src="https://leonidasesteban.github.io/rock-paper-scissors-react/images/icon-paper.svg"
              alt=""
            />
          </button>
          <button className="item-game scissors" value="3" onClick={startGame}>
            <img
              src="https://leonidasesteban.github.io/rock-paper-scissors-react/images/icon-scissors.svg"
              alt=""
            />
          </button>
        </div>
      ) : (
        <>
          <div className="table-result">
            <button className={`item-game ${userImage}`} onClick={startGame}>
              <img
                src={`https://leonidasesteban.github.io/rock-paper-scissors-react/images/icon-${userImage}.svg`}
                alt=""
              />
            </button>
            <p>Vs</p>
            <button className={`item-game ${cpuImage}`} onClick={startGame}>
              <img
                src={`https://leonidasesteban.github.io/rock-paper-scissors-react/images/icon-${cpuImage}.svg`}
                alt=""
              />
            </button>
          </div>
          <div>
            <h2 className="result">{result}</h2>
            <div className="restar-button-container">
              <button onClick={restartGame}>Juega de nuevo</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Table;
