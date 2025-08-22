import React, { useState } from 'react';
import './App.css';

export default function Login({ setToken }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.msg || 'Login failed');
      setToken(data.token);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={e => setUsername(e.target.value)} 
        required />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={e => setPassword(e.target.value)} 
        required />
      <button type="submit">Login</button>
      {error && <div className="error-message">{error}</div>}
    </form>
  );
}
