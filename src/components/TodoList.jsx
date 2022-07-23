import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, setTodos, filteredTodos, mode, mobile }) => {
  const deleteAll = () => {
    setTodos(todos.filter(el => el.completed === false))
  }
  return (
    <ul className={`todo-app-list ${mode ? 'light' : ''}`}>
      {filteredTodos.map(todo => (
        <Todo key={todo.id} text={todo.text} todos={todos} setTodos={setTodos} todo={todo} />
      ))}
      {mobile && <div className="todo-app-list-filter">
        <p>{todos.length} {todos.length > 1 ? "items" : "item"} left</p>
        <p onClick={deleteAll} className='todo-app-list-filter-clear'>Clear Completed</p>
      </div>}
    </ul>
  )
}

export default TodoList