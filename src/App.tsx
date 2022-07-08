import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { AppHeader } from './Layout/AppHeader/AppHeader';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Rebuild in progress.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
