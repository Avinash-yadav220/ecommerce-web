import React, { useState } from 'react';
import './App.css';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.msg || 'Registration failed');
      setMessage('Registration successful! You can now log in.');
      setUsername('');
      setPassword('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Register</h2>
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
      <button type="submit">Register</button>
      {message && <div style={{color: 'green', textAlign: 'center', marginTop: '10px'}}>{message}</div>}
      {error && <div className="error-message">{error}</div>}
    </form>
  );
}
