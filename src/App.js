import React, {useState } from 'react';
import './App.scss';
import Input from "./components/Input/Input"
import Button from './components/Button/Button';
import TodoList from './components/TodoList/TodoList';
import Counter from './components/Counter/Counter';
import ImagesApp from './components/ImagesApp/ImagesApp';

function App() {
  const [input, setinput] = useState('');
  const [todos, settodos] = useState([]);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id:Math.floor(Math.random() * 100),
      date:Date.now(),
      title:input,
      isCompleted:false,
    }
    settodos([...todos,todo]);
    setinput('');
  }

  const findByIndex = (id) => {
    return todos.findIndex(todo => todo.id === id);
  }
  
  const handleDelete = (id) => {
      const newTodos = [...todos];
      const ind = findByIndex(id);
      newTodos.splice(ind,1);
      settodos(newTodos);
  }

  const handleChecked = (id) => {
    const ind = findByIndex(id);
    const newTodos = [...todos];
    const todoItem = newTodos[ind];
    todoItem.isCompleted = !todoItem.isCompleted;
    newTodos.splice(ind,1,todoItem)
    settodos(newTodos);
  }
  const clearTodos = () => {
    settodos([]);
  }

  return (
    <div className="App">
      <div className = "images-app">
        <ImagesApp/>
      </div>
      <div className = "counter-container">
        <Counter/>
      </div>
      <div className = "todo-container">
        <div className = "todo-maker">
        <Input label = "Enter Todo..." input = {input} setinput = {setinput}/>
        <Button input = {input} handleSubmit = {handleSubmit} label = "Create"/>
        </div>
        <TodoList todos= {todos} handleDelete = {handleDelete} handleChecked = {handleChecked}/>
        <div className = "todo-actions">
          <Button input = {todos.length} label = "clear Todos" handleSubmit = {clearTodos}/>
        </div>
      </div>
    </div>
  );
}

export default App;
