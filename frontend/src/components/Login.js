import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../Register.css'; 

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

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

       if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || 'Login failed');
  }


  localStorage.setItem('token',data.token)
  console.log(data.token);
  navigate('/');
} catch (err) {
  // Catch the error and display its message
  setError(err.message);
}
 };

  return (
    <div className="auth-page-container">
      <div className="auth-form-card">
        <h2 className="auth-title">Welcome Back!</h2>
        <p className="auth-subtitle">Sign in to continue</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input 
              id="username"
              type="text" 
              placeholder="Enter your username" 
              value={username} 
              onChange={e => setUsername(e.target.value)} 
              required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input 
              id="password"
              type="password" 
              placeholder="Enter your password" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              required />
          </div>
          <button type="submit" className="auth-button">Log In</button>
        </form>
        {error && <div className="error-message">{error}</div>}
        <div className="auth-link-container">
          Don't have an account? 
        </div>
      </div>
    </div>
  );
}