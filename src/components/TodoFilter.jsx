import React from 'react'

const TodoFilter = ({ setStatus, status, mode, todos, mobile, setTodos }) => {
  const statusHandler = (e) => {
    setStatus(e.target.id)
  }

  const deleteAll = () => {
    setTodos(todos.filter(el => el.completed === false))
  }

  return (
    <div className={`todo-app-filtering ${mode ? 'light' : ''}`}>
      {mobile === false && <p>{todos.length} {todos.length > 1 ? "items" : "item"} left</p>}
      <div className='todo-app-filtering-btns'>
        <button onClick={statusHandler} className={status == 'all' ? "clicked" : ""} id='all'>All</button>
        <button onClick={statusHandler} className={status == 'active' ? "clicked" : ""} id='active'>Active</button>
        <button onClick={statusHandler} className={status == 'completed' ? "clicked" : ""}id='completed'>Completed</button>
      </div>
      {mobile === false && <p onClick={deleteAll} className='todo-app-list-filter-clear'>Clear Completed</p>}
    </div>
  )
}

export default TodoFilter