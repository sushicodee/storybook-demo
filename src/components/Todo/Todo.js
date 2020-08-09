import React from 'react'
import "./Todo.scss";

function Todo({id,title,handleDelete,isChecked,handleChecked}) {

    const todoClass = isChecked ? 'todo-item-completed':null;
    return (
        <li key = {id} className = {`todo-item ${todoClass}`}>
            {/* <input type = "checkbox" checked = {isChecked} onClick = {() => handleChecked(id)}/> */}
            {title}
            <button onClick = {() => handleDelete(id)}>X</button>
        </li>
    )
}
export default Todo;
