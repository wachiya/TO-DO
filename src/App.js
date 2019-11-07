/* eslint-disable react/react-in-jsx-scope */
import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import TodoList from './TodoList';
import uuidv4 from 'uuid/v4';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
      <div>
        <h1> 100 THINGS TODO </h1>
      </div>
      <div className="todo-list">
        <TodoList todos={todos} toggleTodo={toggleTodo} />
      </div>

      <div className="input-block">
        <input ref={todoNameRef} type="text" />
        <button className="button" onClick={handleAddTodo}>Add Todo</button>
      </div>
      <button className="button" onClick={handleClearTodos}>Clear Completed</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </>
  )
}

export default App;
