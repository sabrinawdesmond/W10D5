import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

const Root = (props) => {
  return (
    <h1>Hello from Root</h1> 
  );
}
// ReactDOM.createRoot(document.getElementById('root'));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </ BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);