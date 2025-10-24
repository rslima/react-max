import {useState} from 'react';

export default function Player({name, symbol}) {
    const [isEditing, setIsEditing] = useState(false);

    function handleClick() {
        setIsEditing(editing => !editing);
    }

    let buttonText = isEditing ? 'Save' : 'Edit';

    let playerName = isEditing ?
        <input type='text'/> :
        <span className='player-name'>{name}</span>;


    return (
        <li>
            <span className='player'>
                {playerName}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleClick}>{buttonText}</button>
        </li>
    );
}
