// import React, { useState } from 'react';
// import './App.css';

// export default function Register() {
//   const [name, setName] = useState('');
//   const [email,setEmail] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');
//     setError('');
//     try {
//       const res = await fetch('http://localhost:5000/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username,password,name,email}),
//       });
//         const data = await res.json();
//       if (!res.ok) throw new Error(data.msg || 'Registration failed');
//       localStorage.setItem("token",data.token)
    
//       setMessage('Registration successful! You can now log in.');
//       setName('');
//       setUsername('');
//       setEmail('');
//       setPassword('');
      
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <form className="form-container" onSubmit={handleSubmit}>
//       <h2>Register</h2>
//        <input 
//         type="text" 
//         placeholder="Name" 
//         value={name} 
//         onChange={e => setName(e.target.value)} 
//         required />
//       <input 
//         type="text" 
//         placeholder="Username" 
//         value={username} 
//         onChange={e => setUsername(e.target.value)} 
//         required />
//      <input 
//         type="email" 
//         placeholder="Email" 
//         value={email} 
//         onChange={e => setEmail(e.target.value)} 
//         required />
//       <input 
//         type="password" 
//         placeholder="Password" 
//         value={password} 
//         onChange={e => setPassword(e.target.value)} 
//         required />
//       <button type="submit">Register</button>
//       {message && <div style={{color: 'green', textAlign: 'center', marginTop: '10px'}}>{message}</div>}
//       {error && <div className="error-message">{error}</div>}
//     </form>
//   );
// }
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import '../Register.css'; // New, improved CSS file

export default function Register({setToken}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // const navigate = useNavigate();

   const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, name, email }),
      });

       const data = await res.json();
      if (!res.ok) {
        throw new Error(data.msg || 'Registration failed');
      }
     
       localStorage.setItem('token',data.token)

      
    } catch (err) {
      // Catch the error and display its message
      setError(err.message);
    }
  };


  return (
    <div className="auth-page-container">
      <div className="auth-form-card">
        <h2 className="auth-title">Create an Account</h2>
        <p className="auth-subtitle">Join us to start shopping!</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input 
              id="name"
              type="text" 
              placeholder="Full Name" 
              value={name} 
              onChange={e => setName(e.target.value)} 
              required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input 
              id="email"
              type="email" 
              placeholder="example@example.com" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              required />
          </div>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input 
              id="username"
              type="text" 
              placeholder="Choose a username" 
              value={username} 
              onChange={e => setUsername(e.target.value)} 
              required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input 
              id="password"
              type="password" 
              placeholder="Create a strong password" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              required />
          </div>
          <button type="submit" className="auth-button">Register</button>
        </form>
        {error && <div className="error-message">{error}</div>}
        <div className="auth-link-container">
          Already have an account
        </div>
      </div>
    </div>
  );
}