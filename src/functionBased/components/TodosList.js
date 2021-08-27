/* eslint-disable no-tabs */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import TodoItem from './TodoItem';

const TodosList = (props) => (
  <ul>
    {props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleDeltodo={props.delTodo}
        handleFromTodosList={
						props.handleFromTodoContainer
					}
        updateEditTodo={props.updateEditTodo}
      />
    ))}
  </ul>
);

export default TodosList;
