import React from 'react';
import './App.css';
import DeeplinkGenerator from './components/DeeplinkGenerator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Deeplink Explorer</h1>
        <DeeplinkGenerator />
      </header>
    </div>
  );
}

export default App;
