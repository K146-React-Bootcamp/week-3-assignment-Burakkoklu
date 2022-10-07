import React from 'react';

const Todos = ({ todos, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
      {todos.map(todos => (
        <li key={todos.id} className='list-group-item'>
          {todos.title}
        </li>
      ))}
    </ul>
  );
};

export default Todos;