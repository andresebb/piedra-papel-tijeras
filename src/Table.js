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

  //Imagen de la seleccion del Cpu
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

  //Imagen de la seleccio del user

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

  //Comienza el juego
  const startGame = async (e) => {
    const userSelection = parseInt(e.target.name);
    setPlaying(true);
    getUserImage(userSelection);
    const cpuSelection = await launchHousePick();
    winner(userSelection, cpuSelection);
  };

  const winner = (user, cpu) => {
    if (user === 1 && cpu === 1) {
      setResult("Empate");
    }
    if (user === 1 && cpu === 2) {
      setResult("Perdiste");
    }
    if (user === 1 && cpu === 3) {
      setResult("Ganaste");
      addScore(true);
    }
    if (user === 2 && cpu === 1) {
      setResult("Ganaste");
      addScore(true);
    }
    if (user === 2 && cpu === 2) {
      setResult("Empate");
    }
    if (user === 2 && cpu === 3) {
      setResult("Perdiste");
    }
    if (user === 3 && cpu === 1) {
      setResult("Perdiste");
    }
    if (user === 3 && cpu === 2) {
      setResult("Ganaste");
      addScore(true);
    }
    if (user === 3 && cpu === 3) {
      setResult("Empate");
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
          <button className="item-game rock" name="1" onClick={startGame}>
            <img
              name="1"
              src="https://leonidasesteban.github.io/rock-paper-scissors-react/images/icon-rock.svg"
              alt=""
            />
          </button>
          <button className="item-game paper" name="2" onClick={startGame}>
            <img
              name="2"
              src="https://leonidasesteban.github.io/rock-paper-scissors-react/images/icon-paper.svg"
              alt=""
            />
          </button>
          <button className="item-game scissors" name="3" onClick={startGame}>
            <img
              name="3"
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
                <div>
                  <img
                    src={`https://leonidasesteban.github.io/rock-paper-scissors-react/images/icon-${userImage}.svg`}
                    alt=""
                  />
                </div>
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
