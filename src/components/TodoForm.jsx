import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import IconCheck from '../images/icon-check.svg'

const TodoForm = ({ inputText, setInputText, setTodos, todos, mode }) => {
  const [focused, setFocused] = useState()
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  const handleSubmit = e => {
    e.preventDefault()

    if(inputText.trim() === ''){
      return
    }
    setTodos([...todos, {text: inputText, completed: false, id: nanoid()}])

    setInputText('')
  }

  const handleChange = e => {
    setInputText(e.target.value)
  }

  return (
    <form className={`todo-app-form ${mode ? 'light' : ''}`} onSubmit={handleSubmit}>
      <button className='todo-app-form-btn'><span className='circle'><img className='check' src={IconCheck} alt="" /></span></button>
      {focused && <p>Currently Typing</p>}
      <input value={inputText} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} className='todo-app-form-input' type="text" placeholder='Create a new todo...' />
    </form>
  )
}

export default TodoForm