import React from 'react';

import { FaRegTrashAlt } from 'react-icons/fa';

const TodoListItem = (props) => {

  const { items, onItemDelete } = props;

  const d = new Date();

  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const month = months[d.getMonth()];
  const day = d.getDate()
  const today = `Your to do list for ${month}, ${day}`;


  return (
    <div>
      <h4>{today}</h4>
      <ul className="list-group">
        {items.map((item, i) => {
          return (<li key={i} className="list-group-item">{item.todo} <FaRegTrashAlt onClick={() => onItemDelete(item)} style={{ cursor: 'pointer' }} /></li>
          )
        })}
      </ul>
    </div>
  )
}

export default TodoListItem;