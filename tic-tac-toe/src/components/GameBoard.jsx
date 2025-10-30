const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { row, col } = turn.square;
    gameBoard[row][col] = turn.player;
  }

  return (
    <ol id='game-board'>
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex} className='row'>
          <ol>
            {row.map((playerSymbol, cellIndex) => (
              <li key={cellIndex} className='cell'>
                <button
                  onClick={() => onSelectSquare(rowIndex, cellIndex)}
                  disabled={playerSymbol !== null}>
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
