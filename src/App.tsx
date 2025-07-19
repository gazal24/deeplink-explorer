import React from 'react';
import './App.css';
import DeeplinkGenerator from './components/DeeplinkGenerator';
import Logo from './components/Logo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <Logo size={48} className="header-logo" />
          <h1>Deeplink Explorer</h1>
        </div>
        <DeeplinkGenerator />
      </header>
    </div>
  );
}

export default App;
