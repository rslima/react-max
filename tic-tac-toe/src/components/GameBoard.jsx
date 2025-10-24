import { useState } from 'react';
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ activePlayer, onSelectSquare }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleCellClick(rowIndex, cellIndex) {
    setGameBoard(prevBoard => {
      const newBoard = [...prevBoard.map(row => [...row])];
      newBoard[rowIndex][cellIndex] = activePlayer;
      onSelectSquare();
      return newBoard;
    });
  }

  return (
    <ol id='game-board'>
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex} className='row'>
          <ol>
            {row.map((playerSymbol, cellIndex) => (
              <li key={cellIndex} className='cell'>
                <button onClick={() => handleCellClick(rowIndex, cellIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
