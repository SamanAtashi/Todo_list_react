import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import TodoContainer from './functionBased/components/TodoContainer';

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
