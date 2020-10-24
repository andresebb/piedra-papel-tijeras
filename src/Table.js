import React, { useState, useContext } from "react";
import "./styles/Table.css";
import { scoreContext } from "./Context";

const Table = () => {
  const [playing, setPlaying] = useState(false);
  const [userImage, setUserImage] = useState();
  const [cpuImage, setCpuImage] = useState();
  const [result, setResult] = useState("");
  const { addScore } = useContext(scoreContext);

  //Se obtiene la eleccion de la cpu
  const launchHousePick = () => {
    return new Promise((resolve, reject) => {
      let pick;
      const intervel = setInterval(() => {
        pick = Math.floor(Math.random() * (4 - 1) + 1);
        getCpuImage(pick);
      }, 100);
      setTimeout(() => {
        clearInterval(intervel);
        resolve(pick);
      }, 2000);
    });
  };

  //Setiando la imagen de la seleccion del Cpu
  const getCpuImage = (cpu) => {
    switch (cpu) {
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

  const getUserImage = (user) => {
    switch (user) {
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
  };

  const startGame = async (e) => {
    const userSelection = parseInt(e.target.value);
    setPlaying(true);
    getUserImage(userSelection);
    const cpuSelection = await launchHousePick();
    winner(userSelection, cpuSelection);
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
      addScore(true);
    }
    if (user === 2 && cpu === 1) {
      console.log("Gana user, papel le gana a piedra");
      setResult("Ganaste");
      addScore(true);
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
            <div>
              <p className="election">Tu elegiste</p>
              <button
                disabled={true}
                className={`item-game ${userImage}`}
                onClick={startGame}
              >
                <img
                  src={`https://leonidasesteban.github.io/rock-paper-scissors-react/images/icon-${userImage}.svg`}
                  alt=""
                />
              </button>
            </div>
            <p className="vs">Vs</p>
            <div>
              <p className="election">La CPU eligio</p>
              <button
                disabled={true}
                className={`item-game ${cpuImage}`}
                onClick={startGame}
              >
                <img
                  src={`https://leonidasesteban.github.io/rock-paper-scissors-react/images/icon-${cpuImage}.svg`}
                  alt=""
                />
              </button>
            </div>
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
