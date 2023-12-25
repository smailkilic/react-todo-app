import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [todos, setTodos] = useState([]);

  const deleteTodo = (index) => {
    // const updatedTodos = todos.filter(todo => todo !== id); // Silinmeyenler
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos); // Güncellenmiş todo listesi.
  }


  return (
    <>
      <ToastContainer />
      <TodoForm setTodos={setTodos} todos={todos} />
      <TodoList todos={todos} deleteTodo={deleteTodo}/>
    </>
  )
}

export default App
