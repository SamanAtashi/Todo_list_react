/* eslint-disable no-use-before-define */
/* eslint-disable no-tabs */
/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Route, Switch } from 'react-router-dom';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';
import About from '../../pages/About';
import NotMatch from '../../pages/NotMatch';
import Navbar from './Navbar';

const TodoContainer = () => {
  const [todos, setTodos] = useState(getInitialTodos());

  const handleCheck = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => todo.id !== id),
    ]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const updateEditTodo = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    );
  };

  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div className="container">
            <div className="inner">
              <Header className="header" />
              <InputTodo
                addTodoProps={addTodoItem}
              />
              <TodosList
                todos={todos}
                delTodo={delTodo}
                handleFromTodoContainer={
									handleCheck
								}
                updateEditTodo={updateEditTodo}
              />
            </div>
          </div>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </>
  );
};

export default TodoContainer;
