import React, { useState, useEffect, useLayoutEffect } from 'react'
import MoonImg from '../images/icon-moon.svg'
import SunImg from '../images/icon-sun.svg'
import TodoFilter from './TodoFilter'

import TodoForm from './TodoForm'
import TodoList from './TodoList'

const TodoApp = () => {
  // useState
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])
  const [mode, setMode] = useState(false)
  const [size, setSize] = useState(0)
  const [mobile, setMobile] = useState(true)

  // useLayoutEffect
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth)
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  useEffect(() => {
    if(size > 600) {
      setMobile(false)
    } else {
      setMobile(true)
    }
  }, [size])

  // useEffect
  useEffect(() => {
    filterHandler()
  }, [status, todos])

  // Functions
  const filterHandler = () => {
    switch(status){
      case 'active':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break
      default:
        setFilteredTodos(todos)
        break
    }
  }

  const modeHandler = () => {
    setMode(prevMode => !prevMode)
  }



  return (
    // MAIN PAGE
    <div className={`todo ${mode ? 'light' : ''}`}>
      {/* NAVBAR */}
      <nav>
        <h1>TODO</h1>
        <button onClick={modeHandler}><img src={mode == 'light' ? MoonImg : SunImg} alt="" /></button>
      </nav>

      {/* TODO CONTENT */}
      <div className="todo-app">
        <TodoForm 
          setInputText={setInputText}
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          mode={mode}
        />

        <TodoList 
          todos={todos}
          filteredTodos={filteredTodos}
          setTodos={setTodos}
          mode={mode}
          mobile={mobile}
        />
        <TodoFilter
          status={status}
          setStatus={setStatus}
          mode={mode}
          todos={todos}
          mobile={mobile}
          setTodos={setTodos}
        />
      </div>
    </div>
  )
}

export default TodoApp