import React from 'react';

class TodoItem extends React.Component {
	render() {
		const completedStyle = {
			fontStyle: 'italic',
			color: '#595959',
			opacity: 0.4,
			textDecoration: 'line-through',
		};
		return (
			<li className="item">
				<input
					type="checkbox"
					className="checkbox"
					checked={this.props.todo.completed}
					onChange={() => {
						this.props.handleFromTodosList(
							this.props.todo.id
						);
					}}
				/>
				<button
					onClick={() => {
						this.props.handleDeltodo(
							this.props.todo.id
						);
					}}
				>
					Delete
				</button>{' '}
				<span
					style={
						this.props.todo.completed
							? completedStyle
							: null
					}
				>
					{this.props.todo.title}
				</span>
			</li>
		);
	}
}

export default TodoItem;
