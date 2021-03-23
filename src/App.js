import React from 'react';
import { NameGenerator } from './features/counter/NameGenerator.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NameGenerator />
      </header>
    </div>
  );
}

export default App;
