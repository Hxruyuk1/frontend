'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const [items, setItems] = useState([]);
  const router = useRouter();

  // ตรวจสอบ token ตอนเข้าเพจ
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/Signin'); // รีไดเร็กต์ไปที่หน้าเข้าสู่ระบบถ้าไม่มี token
    }
  }, [router]);

  const handleDeleteSubmit = async (id) => {
    try {
      const res = await fetch('https://backend-six-teal.vercel.app/api/users', {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error('Server error:', errorData);
        throw new Error(errorData.message || 'Failed to delete. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch('https://backend-six-teal.vercel.app/api/users');
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

    getUsers();
    const interval = setInterval(getUsers, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <br /><br /><br /><br />
      <div className="container">
        <div className="card">
          <div className="card-header">
            Users List
          </div>
          <div className="card-body">
            <div className="row">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th className='col-md-2 text-center'>#</th>
                    <th className='col-md-4'>Firstname</th>
                    <th className='col-md-4'>Lastname</th>
                    <th className='col-md-1'>Edit</th>
                    <th className='col-md-1'>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td className='text-center'>{item.id}</td>
                      <td>{item.firstname}</td>
                      <td>{item.lastname}</td>
                      <td><Link href={`/users/edit/${item.id}`} className="btn btn-warning">Edit</Link></td>
                      <td><button onClick={() => handleDeleteSubmit(item.id)} className="btn btn-danger">Del</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <br /><br />
    </>
  );
}
