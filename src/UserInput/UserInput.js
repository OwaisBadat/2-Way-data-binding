import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
    return (
        <div className="Userinput">
            <p>Enter Username: <input type="text" 
            onChange={props.changed} 
            value={props.currentName}/></p>
        </div>
    )
}

export default UserInput;