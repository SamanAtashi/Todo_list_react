import React from 'react';

class TodoItem extends React.Component {
	render() {
    const { completed, id, title } = this.props.todo
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
					checked={completed}
					onChange={() => {
						this.props.handleFromTodosList(
							id
						);
					}}
				/>
				<button
					onClick={() => {
						this.props.handleDeltodo(
							id
						);
					}}
				>
					Delete
				</button>{' '}
				<span
					style={
						completed
							? completedStyle
							: null
					}
				>
					{title}
				</span>
			</li>
		);
	}
}

export default TodoItem;
