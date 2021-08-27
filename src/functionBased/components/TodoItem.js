/* eslint-disable react/button-has-type */
/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (e) => {
    if (e.key === 'Enter') {
      setEditing(false);
    }
  };

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const { completed, id, title } = props.todo;

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  useEffect(() => () => {
    console.log('Cleaning Up...');
  }, []);

  return (
    <li className="item">
      <div onDoubleClick={handleEdit} style={viewMode}>
        {' '}
        <input
          type="checkbox"
          className="checkbox"
          checked={completed}
          onChange={() => {
					  props.handleFromTodosList(id);
          }}
        />
        <button
          onClick={() => {
					  props.handleDeltodo(id);
          }}
        >
          <FaTrash />
        </button>
        {' '}
        <span style={completed ? completedStyle : null}>
          {title}
        </span>
      </div>
      <input
        type="text"
        className="textInput"
        style={editMode}
        value={title}
        onChange={(e) => {
				  props.updateEditTodo(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

export default TodoItem;
