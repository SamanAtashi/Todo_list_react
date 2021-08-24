import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';
class TodoContainer extends React.Component {
	state = {
		todos: [],
	};

	// after page loaded , we re-render from local-storage
	componentDidMount() {
		const storage = localStorage.getItem('todos');
		const useStore = JSON.parse(storage);
		if (useStore) {
			this.setState({ todos: useStore });
		}
	}

	// getting the present todos and storing them in the local storage
	componentDidUpdate(prevProps, prevState) {
		if (prevState.todos !== this.state.todos) {
			const temp = JSON.stringify(this.state.todos);
			localStorage.setItem('todos', temp);
		}
	}

	handleCheck = (id) => {
		this.setState((prevState) => ({
			todos: prevState.todos.map((todo) => {
				if (todo.id === id) {
					return {
						...todo,
						completed: !todo.completed,
					};
				}
				return todo;
			}),
		}));
	};

	delTodo = (id) => {
		this.setState({
			todos: [
				...this.state.todos.filter((todo) => {
					return todo.id !== id;
				}),
			],
		});
	};

	addTodoItem = (title) => {
		const newTodo = {
			id: uuidv4(),
			title: title,
			completed: false,
		};
		this.setState({
			todos: [...this.state.todos, newTodo],
		});
	};

	updateEditTodo = (updatedTitle, id) => {
		this.setState({
			todo: this.state.todos.map((todo) => {
				if (todo.id === id) {
					todo.title = updatedTitle;
				}
				return todo;
			}),
		});
	};

	render() {
		return (
			<div className="container">
				<div className="inner">
					<Header className="header" />
					<InputTodo addTodoProps={this.addTodoItem} />
					<TodosList
						todos={this.state.todos}
						delTodo={this.delTodo}
						handleFromTodoContainer={this.handleCheck}
						updateEditTodo={this.updateEditTodo}
					/>
				</div>
			</div>
		);
	}
}
export default TodoContainer;
