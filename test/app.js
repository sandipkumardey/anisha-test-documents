import React, { useState } from 'react';
import TodoItem from './TodoItem';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() === '') return;
    setTodos([...todos, input.trim()]);
    setInput('');
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>React To-Do List</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Add new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo}
            onDelete={() => removeTodo(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
