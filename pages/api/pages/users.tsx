'use client'

import { useEffect, useState } from 'react'

type User = {
  id: number
  name: string
  email: string
}

export default function HomePage() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(console.error)
  }, [])

  return (
    <>
      <style>{`
        .user-list {
          max-width: 600px;
          margin: 2rem auto;
          font-family: Arial, sans-serif;
          border-collapse: collapse;
          width: 100%;
        }
        .user-list th, .user-list td {
          border: 1px solid #ddd;
          padding: 12px 15px;
          text-align: left;
        }
        .user-list th {
          background-color: #4CAF50;
          color: white;
        }
        .user-list tr:nth-child(even) {
          background-color: #f9f9f9;
        }
        .user-list tr:hover {
          background-color: #f1f1f1;
        }
        h1 {
          text-align: center;
          color: #333;
          margin-top: 2rem;
          font-size: 2rem;
        }
      `}</style>
      <h1>รายชื่อผู้ใช้</h1>
      <table className="user-list">
        <thead>
          <tr>
            <th>ลำดับ</th>
            <th>ชื่อ</th>
            <th>อีเมล</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
