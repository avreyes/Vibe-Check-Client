import React, { useState, useEffect } from 'react';
import { AccountBox } from './components/auth';
import './App.css';

function App() {

  const [sessionToken, setSessionToken] = useState('');

  useEffect (() => {
      if (localStorage.getItem('token')) {
          setSessionToken(localStorage.getItem('token'));
      }
  }, [])

  const updateToken = (newToken) => {
      localStorage.setItem('token', newToken);
      setSessionToken(newToken);
  }

  const clearSession = () => {
      localStorage.clear();
      setSessionToken('');
  }

  return (
    <div className="App">
      <AccountBox updateToken={ updateToken }/>
    </div>
  );
}

export default App;
