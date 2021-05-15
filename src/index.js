import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './stylesheet.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//renders content from <App/> to display in root body of HTML
ReactDOM.render(<App />, document.getElementById('root'));
