import React from 'react'
import CrossImg from '../images/icon-cross.svg'
import CheckImg from '../images/icon-check.svg'

const Todo = ({ text, todos, setTodos, todo }) => {
  const deleteHandler = () => {
    setTodos(todos.filter(el => el.id !== todo.id))

  }

  const completeHandler = () => {
    setTodos(todos.map(item => {
      if(item.id === todo.id) {
        return {...item, completed: !item.completed}
      }
      return item
    }))
  }

  return (
    <li className='todo-app-list-each'>
      <button onClick={completeHandler}><span className={`circle ${todo.completed ? "active" : ""}`}><img className='check' src={CheckImg} alt="" /></span></button>
      <p className={`${todo.completed ? "active" : ""}`}>{text}</p>
      <button onClick={deleteHandler} className='delete'><img className='cross' src={CrossImg} alt="" /></button>
    </li>
  )
}

export default Todo