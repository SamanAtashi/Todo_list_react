import React from 'react';

class TodoItem extends React.Component {
	state = {
		editing: false,
	};

	handleEdit = () => {
		this.setState({
			editing: true,
		});
	};

	handleUpdatedDone = (e) => {
		if (e.key === 'Enter') {
			this.setState({ editing: false });
		}
	};

	render() {
		let viewMode = {};
		let editMode = {};

		if (this.state.editing) {
			viewMode.display = 'none';
		} else {
			editMode.display = 'none';
		}

		const { completed, id, title } = this.props.todo;
		const completedStyle = {
			fontStyle: 'italic',
			color: '#595959',
			opacity: 0.4,
			textDecoration: 'line-through',
		};
		return (
			<li className="item">
				<div onDoubleClick={this.handleEdit} style={viewMode}>
					{' '}
					<input
						type="checkbox"
						className="checkbox"
						checked={completed}
						onChange={() => {
							this.props.handleFromTodosList(id);
						}}
					/>
					<button
						onClick={() => {
							this.props.handleDeltodo(id);
						}}
					>
						Delete
					</button>{' '}
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
						this.props.updateEditTodo(
							e.target.value,
							id
						);
					}}
					onKeyDown={this.handleUpdatedDone}
				/>
			</li>
		);
	}
}

export default TodoItem;
