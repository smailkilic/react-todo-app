import React from 'react'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

const TodoForm = ({ setTodos, todos }) => {
  const [todoValue, setTodoValue] = useState('');

  const handleSubmit = (e) => {
    if (todoValue === '') {
        toast.error('Please enter a todo!')
    } else if (todos.includes(todoValue)) {
        toast.error('Todo already exists!')
    } else if (todoValue.length < 3) {
        toast.error('Todo must be at least 3 characters long!')
    } else {
        const newTodo = todoValue.trim()
        setTodos([newTodo, ...todos]) // Yeni todo üstte listelensin.
        toast.success('Todo added')
    }
  }
  
  return (
      <form action="" id='todo-form'>
          <input type="text" id="form-input" placeholder='Please Enter Your Todo' onChange={(e) => setTodoValue(e.target.value)} value={todoValue} />
          <button onClick={(e) => {
              e.preventDefault();
              handleSubmit();
              setTodoValue('')
            }}>
              <i class="fa-solid fa-plus"></i>
          </button>
      </form>
    )
  }

export default TodoForm