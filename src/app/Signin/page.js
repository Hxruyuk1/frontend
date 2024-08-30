'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {jwtDecode} from 'jwt-decode';

export default function LoginPage() {
  const [username, setUserName] = useState('');
  const [password, setPassWord] = useState('');
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter(); // For redirecting after login

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUserName(decodedToken.username);
        setIsLoggedIn(true);
        router.push('/'); // Redirect to home or another page
      } catch (error) {
        console.error('Invalid token', error);
      }
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await fetch('https://backend-six-teal.vercel.app/api/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        throw new Error('Failed to log in. Please try again.');
      }

      const result = await res.json();
      const token = result.token; // Adjust this according to your API response

      // Store token in localStorage
      localStorage.setItem('token', token);

      // Decode username from the token
      const decodedToken = jwtDecode(token);
      setUserName(decodedToken.username);
      setIsLoggedIn(true);

      setMessage('Login successful!');
      window.location.reload();
      router.push('/'); // Redirect to home or another page
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error: ' + error.message);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
    setPassWord('');
    localStorage.removeItem('token');
    router.push('/signin'); // Redirect to the login page or another route
  };

  if (isLoggedIn) {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header bg-success text-white">
            Welcome, {username}!
          </div>
          <div className="card-body">
            <p>You are now logged in.</p>
            <button onClick={handleLogout} className="btn btn-outline-danger">
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <br /><br /><br />
      <div className="container">
        <div className="card">
          <div className="card-header bg-primary text-white">
            Login Form
          </div>
          <div className="card-body">
            {message && <div className="alert alert-info">{message}</div>}
            <form className="row g-3" onSubmit={handleLogin}>
              <div className="col-md-12">
                <label htmlFor="username" className="form-label">Username</label>
                <div className="input-group">
                  <span className="input-group-text"><i className="bi bi-person"></i></span>
                  <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUserName(e.target.value)} required />
                </div>
              </div>
              <div className="col-md-12">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="input-group">
                  <span className="input-group-text"><i className="bi bi-lock"></i></span>
                  <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassWord(e.target.value)} required />
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary"><i className="bi bi-box-arrow-in-right"></i> Log In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
