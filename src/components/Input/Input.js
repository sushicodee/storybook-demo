import React from 'react'
import "./Input.scss";

const Input = ({label,input,setinput}) => {
    return (
        <div className = "todo-input">
            <input data-testid = 'input' value = {input} placeholder = {label} onChange = {e => setinput(e.target.value)}/>
        </div>
    )
}

export default Input
