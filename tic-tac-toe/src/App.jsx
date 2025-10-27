import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/Player';
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './winning-combinations';

function App() {
  const [gameMoves, setGameMoves] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(rowIndex, cellIndex) {
    setActivePlayer(prevPlayer => (prevPlayer === 'X' ? 'O' : 'X'));
    setGameMoves(prevMoves => {
      let currentPlayer = 'X';

      if (prevMoves.length > 0 && prevMoves[0].player === 'X') {
        currentPlayer = 'O';
      }

      return [
        { player: currentPlayer, square: { row: rowIndex, col: cellIndex } },
        ...prevMoves,
      ];
    });
  }

  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <Player
            initialName='Player 1'
            symbol='X'
            isActive={activePlayer === 'X'}
          />
          <Player
            initialName='Player 2'
            symbol='O'
            isActive={activePlayer === 'O'}
          />
        </ol>
        <GameBoard turns={gameMoves} onSelectSquare={handleSelectSquare} />
      </div>
      <Log moves={gameMoves} />
    </main>
  );
}

export default App;
