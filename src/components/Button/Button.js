import React from 'react';
import "./Button.scss";

const Button = ({label,handleSubmit,input}) => {

    return (
        <div  className = "todo-button">
            <button data-testid = "button" disabled = {!input} onClick = {e => handleSubmit(e)}>{label}</button>
        </div>
    )
}
export default Button
