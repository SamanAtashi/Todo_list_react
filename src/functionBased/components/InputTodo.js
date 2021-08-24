import React, { useState } from 'react';

const InputTodo = (props) => {
	const [title, setTitle] = useState('');

	const handleInput = (e) => {
		setTitle(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (title.trim()) {
			props.addTodoProps(title);
			setTitle('');
		} else {
			alert('Please write item');
		}
	};

	return (
		<form onSubmit={handleSubmit} className="form-container">
			<input
				type="text"
				placeholder="Add Todo..."
				className="input-text"
				value={title}
				name="title"
				onChange={handleInput}
			/>
			<button className="input-submit">Submit</button>
		</form>
	);
};

export default InputTodo;
