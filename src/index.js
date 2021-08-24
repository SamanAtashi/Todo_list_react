import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import TodoContainer from './functionBased/components/TodoContainer';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<TodoContainer />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
