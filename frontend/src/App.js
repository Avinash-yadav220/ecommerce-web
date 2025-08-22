import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import './App.css';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [page, setPage] = useState('login');

  const handleSetToken = t => {
    setToken(t);
    localStorage.setItem('token', t);
  };

  const handleLogout = () => {
    setToken('');
    localStorage.removeItem('token');
    setPage('login');
  };

  return (
    <div>
      <button className="switch-button" onClick={() => setPage('login')}>Login</button>
      <button className="switch-button" onClick={() => setPage('register')}>Register</button>

      {token ? (
        <div className="welcome-container">
          <h2>Welcome! You are logged in.</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        page === 'login' ? 
          <Login setToken={handleSetToken} /> : 
          <Register />
      )}
    </div>
  );
}

export default App;
