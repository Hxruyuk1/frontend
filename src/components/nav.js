'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {jwtDecode} from 'jwt-decode'; // Use named import if necessary
import styles from '../app/nav.module.css'; // Assuming you have a custom CSS file

const Navbar = () => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUsername(decodedToken.username);
      } catch (error) {
        console.error('Invalid token', error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUsername(null);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${styles.navbar}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          STARBUG
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex justify-content-center">
            <li className="nav-item mx-4">
              <Link href="/" className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item mx-4">
              <Link href="/About" className="nav-link">About</Link>
            </li>
            <li className="nav-item mx-4">
              <Link href="/Service" className="nav-link">Service</Link>
            </li>
            <li className="nav-item mx-4">
              <Link href="/Contact" className="nav-link">Contact</Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            {username ? (
              <>
                <span className={`navbar-text me-3 fw-bold ${styles.username}`}>Welcome, <strong>{username}</strong></span>
                <button onClick={handleLogout} className="btn btn-outline-danger">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/Signup">
                  <button className="btn btn-outline-primary me-2">Sign Up</button>
                </Link>
                <Link href="/Signin">
                  <button className="btn btn-outline-secondary">Sign In</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
