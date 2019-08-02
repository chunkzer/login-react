import React, { useState } from 'react';
import logo from './logo.svg';
import { LoginForm } from './components/LoginForm';
import './App.css';

function App() {
  const [signingUp, setSigningUp] = useState(false);
  const [logginIn, setLoggingIn] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LoginForm />
      </header>
    </div>
  );
}

export default App;
