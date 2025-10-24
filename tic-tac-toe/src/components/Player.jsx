import { useState } from 'react';

export default function Player({ initialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleClick() {
    setIsEditing(editing => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let buttonText = isEditing ? 'Save' : 'Edit';

  let playerNameField = isEditing ? (
    <input type='text' required value={playerName} onChange={handleChange} />
  ) : (
    <span className='player-name'>{playerName}</span>
  );

  return (
    <li>
      <span className='player'>
        {playerNameField}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleClick}>{buttonText}</button>
    </li>
  );
}
