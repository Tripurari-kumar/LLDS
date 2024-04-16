import { useState } from 'react';
import { winningCombinations } from './data';
import './styles.css';

export default function App() {
  const [turn, setTurn] = useState('x');
  const [xCells, setXCells] = useState([]);
  const [oCells, setOcells] = useState([]);
  const [gameStatus, setGameStatus] = useState('playing');

  const onCellClick = (index) => {
    document.getElementById(`cell-${index}`).classList.add(turn);
    let xArray = xCells;
    let oArray = oCells;
    if (turn === 'x') {
      xArray = [...xArray, index];
      setXCells(xArray);
    } else {
      oArray = [...oArray, index];
      setOcells(oArray);
    }
    console.log(xArray, oArray);
    setTurn((prev) => {
      if (prev === 'x') {
        return 'o';
      } else {
        return 'x';
      }
    });

    const status = winningCombinations.some((combArray) => {
      return combArray.every((cell) => {
        if (turn === 'x') {
          return xArray.includes(cell);
        } else {
          return oArray.includes(cell);
        }
      });
    });

    if (status) {
      setGameStatus(`${turn} won!`);
    }
  };

  return (
    <div className='App'>
      {gameStatus === 'playing' ? (
        <div className='board'>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => {
            return (
              <div
                id={`cell-${index}`}
                onClick={() => onCellClick(index)}
                key={index}
                className='cell'
              >
                {xCells.includes(index) && (
                  <>
                    <div className='crossbef'></div>
                    <div className='crossaf'></div>
                  </>
                )}
                {oCells.includes(index) && <div className='circle'></div>}
              </div>
            );
          })}
        </div>
      ) : (
        <div>{gameStatus}</div>
      )}
    </div>
  );
}
