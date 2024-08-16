'use client';
import { useEffect, useState } from 'react';


export default function Page({params}) {
  const {id} = params;
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassWord] = useState('');
  const [message, setMessage] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch(`https://backend-six-teal.vercel.app/api/users/${id}`);
        if (!res.ok) {
          console.error('Failed to fetch data');
          return;
        }
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
 
  getUsers()
  // const interval  = setInterval(getUsers, 1000);
  // return () => clearInterval(interval );
}, []);

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await fetch('https://backend-six-teal.vercel.app/api/users', {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
        },
        body: JSON.stringify({ id, firstname, lastname, username, password }),
      });

      if (!res.ok) {
        throw new Error('Failed to Upadate. Please try again.');
      }

      const result = await res.json();
      setMessage('Update successful!');
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
            Edit Form {JSON.stringify(id)}
          </div>
          <div className="card-body">
            {message && <div className="alert alert-info">{message}</div>}

            {items.map((item) =>(
            <form className="row g-3" onSubmit={handleUpdateSubmit}>
              <div className="col-md-6">
                <label htmlFor="firstname" className="form-label">First Name</label>
                <div className="input-group">
                  <span className="input-group-text"><i className="bi bi-person-vcard"></i></span>
                  <input type="text" className="form-control" id="firstname" value={item.firstname} onChange={(e) => setFirstName(e.target.value)} required />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="lastname" className="form-label">Last Name</label>
                <div className="input-group">
                  <span className="input-group-text"><i className="bi bi-person-vcard-fill"></i></span>
                  <input type="text" className="form-control" id="lastname" value={item.lastname} onChange={(e) => setLastName(e.target.value)} required />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="username" className="form-label">Username</label>
                <div className="input-group">
                  <span className="input-group-text"><i className="bi bi-person-vcard"></i></span>
                  <input type="text" className="form-control" id="username" value={item.username} onChange={(e) => setUserName(e.target.value)} required />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="input-group">
                  <span className="input-group-text"><i className="bi bi-person-vcard-fill"></i></span>
                  <input type="password" className="form-control" id="password" value={item.password} onChange={(e) => setPassWord(e.target.value)} required />
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-success"><i className="bi bi-box-arrow-right"></i> UPDATE</button>
              </div>
            </form>
            ))}

          </div>
        </div>
      </div>
    </>
  );
}
