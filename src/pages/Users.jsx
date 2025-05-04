import { Link } from 'react-router-dom';
import useAppStore from '../store/';
import { useState } from 'react';

const Users = () => {
  const version = useAppStore((state) => state.version);
  const users = useAppStore((state) => state.users);
  const deleteUser = useAppStore((state) => state.deleteUser);

  const [search, setSearch] = useState('');

  const handleDelete = (id) => {
    const confirmed = window.confirm('Apakah Anda yakin ingin menghapus user ini?');
    if (confirmed) {
      deleteUser(id);
    }
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <h2>Daftar Pengguna</h2>
      
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Cari nama..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: '8px', width: '250px' }}
        />
      </div>

      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/user/${user.id}`}>
                  <button>Detail</button>
                </Link>
                <Link to={`/user/${user.id}/edit`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => handleDelete(user.id)}>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
