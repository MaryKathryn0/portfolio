import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// importing App function from App.js file
import App from './App';
// adding bootstrap css which use fro all child components
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

