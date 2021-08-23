import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodosList extends Component {
	render() {
		return (
			<ul>
				{this.props.todos.map((todo) => (
					<TodoItem
						key={todo.id}
						todo={todo}
                        handleDeltodo={this.props.delTodo}
						handleFromTodosList={
							this.props
								.handleFromTodoContainer
						}
					/>
				))}
			</ul>
		);
	}
}

export default TodosList;
