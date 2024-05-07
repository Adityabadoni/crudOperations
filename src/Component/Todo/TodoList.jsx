import React, { useEffect, useState } from 'react';

const TodoList = ({ data }) => {
  const [todos, setTodos] = useState(data);

  const handleDelete = (index) => {
    // Create a copy of the current todos array
    const updatedTodos = [...todos];
    // Remove the todo at the specified index
    updatedTodos.splice(index, 1);
    // Update the state with the new todos array
    setTodos(updatedTodos);
  };

  useEffect(() => {
    // Update todos state when data prop changes
    setTodos(data);
  }, [data]); // Re-run effect when data prop changes

  return (
    <div>
      <div className='list'>
        <ul style={{ padding: 0 }}>
          {todos.map((item, index) => (
            <li key={index} style={{ listStyle: 'none', width: '100%', border: '', marginBottom: '10px', padding: '10px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' ,backgroundColor:"lightgrey"}}>
              <span>{item}</span>
              <button className='btn btn-danger' onClick={() => handleDelete(index)}>-</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
