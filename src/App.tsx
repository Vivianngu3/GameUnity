import React from 'react';
import Heading from './component/text/Heading'
import logo from './res/images/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
      <Heading type='section'>Section</Heading>
      <Heading type='title'>Title</Heading>
      <Heading type='section' allCaps={true}>Section</Heading>
      <Heading type='title' allCaps={true}>Sprout</Heading>
    </div>
  );
}

export default App;
