import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Game from "./components/Game"
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Game />
  </React.StrictMode>,
  document.getElementById('root')
);