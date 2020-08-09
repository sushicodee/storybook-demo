import React from 'react'
import Todo from '../Todo/Todo';
import "./TodoList.scss";

function TodoList({todos , handleDelete ,handleChecked}) {
    return (
        <div className = "todo-list">
            <ul>
                {todos.map((todo,index) => <Todo id = {todo.id} isChecked = {todo.isCompleted} title = {todo.title} handleDelete = {handleDelete} handleChecked = {handleChecked}/>)}
            </ul>
        </div>            
    )
}
export default TodoList;
