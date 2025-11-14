import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const COMPLEX_PASSWORD = 'P3r!y@r$cr33n$2025';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'periyarscreens' && password === COMPLEX_PASSWORD) {
      setError('');
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/add-post');
    } else {
      setError('Invalid username or password');
      localStorage.clear();
    }
  };

  return (
    <>
      
      <div style={{ maxWidth: 350, margin: '60px auto', padding: 24, background: '#fff', borderRadius: 8, boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 24 }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <label style={{ display: 'block', marginBottom: 8 }}>Username</label>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          style={{ width: '100%', padding: 8, marginBottom: 16, borderRadius: 4, border: '1px solid #ccc' }}
          required
        />
        <label style={{ display: 'block', marginBottom: 8 }}>Password</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ width: '100%', padding: 8, marginBottom: 16, borderRadius: 4, border: '1px solid #ccc' }}
          required
        />
        {error && <div style={{ color: 'red', marginBottom: 12 }}>{error}</div>}
        <button type="submit" style={{ width: '100%', padding: 10, background: '#1976d2', color: '#fff', border: 'none', borderRadius: 4, fontWeight: 600 }}>Login</button>
      </form>
      </div>
    </>
  );
}

export default Login;

