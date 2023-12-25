import React from 'react'

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div className="todo-container">
        {todos.map((todo, index) => (
            <div key={index} className='todo-item'>
                <p>{todo}</p>
                <i class="fa-solid fa-circle-xmark times-circle" onClick={() => deleteTodo()}></i>
            </div>
        ))}
    </div>
  )
}

export default TodoList