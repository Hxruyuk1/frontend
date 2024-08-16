'use client';
import { useState } from 'react';
import { useEffect, useState } from 'react';

export default function Page({params}){
  const {id} = params;
}

export default function Page() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassWord] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await fetch('https://backend-six-teal.vercel.app/api/users', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: JSON.stringify({ firstname, lastname, username, password }),
      });

      if (!res.ok) {
        throw new Error('Failed to sign up. Please try again.');
      }

      const result = await res.json();
      setMessage('Edit successful!');
      setFirstName('');
      setLastName('');
      setUserName('');
      setPassWord('');
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error: ' + error.message);
    }
  };

  return (
    <>
      <br /><br /><br />
      <div className="container">
        <div className="card">
          <div className="card-header bg-success text-white">
            Edit Form {id}
          </div>
          <div className="card-body">
            {message && <div className="alert alert-info">{message}</div>}
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-md-6">
                <label htmlFor="firstname" className="form-label">First Name</label>
                <div className="input-group">
                  <span className="input-group-text"><i className="bi bi-person-vcard"></i></span>
                  <input type="text" className="form-control" id="firstname" value={firstname} onChange={(e) => setFirstName(e.target.value)} required />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="lastname" className="form-label">Last Name</label>
                <div className="input-group">
                  <span className="input-group-text"><i className="bi bi-person-vcard-fill"></i></span>
                  <input type="text" className="form-control" id="lastname" value={lastname} onChange={(e) => setLastName(e.target.value)} required />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="username" className="form-label">Username</label>
                <div className="input-group">
                  <span className="input-group-text"><i className="bi bi-person-vcard"></i></span>
                  <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUserName(e.target.value)} required />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="input-group">
                  <span className="input-group-text"><i className="bi bi-person-vcard-fill"></i></span>
                  <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassWord(e.target.value)} required />
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-success"><i className="bi bi-box-arrow-right"></i> Edit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
