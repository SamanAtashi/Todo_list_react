import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import TodoContainer from './functionBased/components/TodoContainer';

ReactDOM.render(
	<React.StrictMode>
		<TodoContainer />
	</React.StrictMode>,
	document.getElementById('root')
);
