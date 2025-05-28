import { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Daftar Pengguna</h2>
      <ul className="space-y-2">
        {users.map((user, idx) => (
          <li key={idx} className="border p-2 rounded">{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
