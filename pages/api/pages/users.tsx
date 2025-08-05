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
    <main style={{ maxWidth: 800, margin: '3rem auto', padding: '1rem', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>รายชื่อผู้ใช้</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead style={{ backgroundColor: '#4caf50', color: 'white' }}>
          <tr>
            <th style={{ padding: '12px' }}>ลำดับ</th>
            <th style={{ padding: '12px' }}>ชื่อ</th>
            <th style={{ padding: '12px' }}>อีเมล</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan={3} style={{ padding: '20px', textAlign: 'center' }}>กำลังโหลดข้อมูล...</td>
            </tr>
          ) : (
            users.map((user, index) => (
              <tr key={user.id} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '12px' }}>{index + 1}</td>
                <td style={{ padding: '12px' }}>{user.name}</td>
                <td style={{ padding: '12px' }}>{user.email}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </main>
  )
}
