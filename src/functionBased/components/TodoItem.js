import React, { useState, useEffect } from 'react';

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

	let viewMode = {};
	let editMode = {};

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

	useEffect(() => {
		return () => {
			console.log('Cleaning Up...');
		};
	},[]);

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
					props.updateEditTodo(e.target.value, id);
				}}
				onKeyDown={handleUpdatedDone}
			/>
		</li>
	);
};

export default TodoItem;
