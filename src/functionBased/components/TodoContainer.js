import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

// // getting the present todos and storing them in the local storage
// componentDidUpdate(prevProps, prevState) {
// 	if (prevState.todos !== this.state.todos) {
// 		const temp = JSON.stringify(this.state.todos);
// 		localStorage.setItem('todos', temp);
// 	}
// }

const TodoContainer = () => {
	const [todos, setTodos] = useState(getInitialTodos());

	const handleCheck = (id) => {
		setTodos((prevState) =>
			prevState.map((todo) => {
				if (todo.id === id) {
					return {
						...todo,
						completed: !todo.completed,
					};
				}
				return todo;
			})
		);
	};

	const delTodo = (id) => {
		setTodos([
			...todos.filter((todo) => {
				return todo.id !== id;
			}),
		]);
	};

	const addTodoItem = (title) => {
		const newTodo = {
			id: uuidv4(),
			title: title,
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
			})
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
		<div className="container">
			<div className="inner">
				<Header className="header" />
				<InputTodo addTodoProps={addTodoItem} />
				<TodosList
					todos={todos}
					delTodo={delTodo}
					handleFromTodoContainer={handleCheck}
					updateEditTodo={updateEditTodo}
				/>
			</div>
		</div>
	);
};

export default TodoContainer;
