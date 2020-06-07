import React from 'react';
import logo from './logo.svg';
import './App.css';

const variable = 'Hello';
const logic = true;
const tern = false;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <t1 style={{
          color: 'grey',
          fontSize: 35
        }}>
          First app</t1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {variable}
        </p>
        <p>
          Number {4}
        </p>
        <p>
          Number {1+3}
        </p>
        <p>
          {logic && 'Logic is true'}
        </p>
        <p>
          {tern ? 'Tern is true' : 'Tern is false'}
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {undefined}
          {null}
          {false}
          {true}
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
