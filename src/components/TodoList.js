import React, { useState } from 'react';
import TodoListItem from './TodoListItem';

const TodoList = () => {

  let [todos, setAddTodo] = useState([
    {
      todo: 'Will enjoy my breakfast'
    },
    {
      todo: 'Have a great day with my kids'
    },
    {
      todo: 'Do some sports'
    },
  ]);

  let [newTodo, setInputChange] = useState('');

  const handleAddItem = e => {
    e.preventDefault();

    setAddTodo(todos = [{ todo: newTodo }, ...todos]);
    setInputChange(newTodo = '');
  }

  const handleChange = e => {
    setInputChange(newTodo = e.target.value);
  }

  const handleDelete = (item) => {
    const todoDeleted = todos.filter(t => t.todo !== item.todo);
    setAddTodo(todoDeleted)
  }



  return (
    <div className="container">
      <div className="d-flex flex-column">
        <form className="form-inline">
          <div className="form-group mx-sm-3 m-2">
            <input onChange={handleChange} value={newTodo} type="text" className="form-control" placeholder="Enter your todo..." />
          </div>
          <button onClick={handleAddItem} type="submit" className="btn btn-primary m-2">Add</button>
        </form>
        <div>
          <TodoListItem items={todos} onItemDelete={handleDelete} />
        </div>
      </div>
    </div>
  )
}

export default TodoList;
