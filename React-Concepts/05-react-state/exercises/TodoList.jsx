import React from 'react'
import { useState } from 'react'

const TodoList = () => {

    const[todos, setTodos] = useState([]);
    const[newTodo, setNewTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
         if (newTodo.trim() === '') return;

         setTodos([...todos, newTodo]);
         setNewTodo('');
    }

  return (
    <div>
        <h1>My First Todo List:</h1>

        <form onSubmit={handleSubmit}>
            <input type="text"
                placeholder='Enter Todo'
                value={newTodo}
                onChange={(e)=> setNewTodo(e.target.value)}
            />
            <button type='submit'>Add Todo</button>
        </form>

        {todos.map((item, index)=>(
            <li key={index}>{item}</li>
        ))}
    </div>
  )
}

export default TodoList