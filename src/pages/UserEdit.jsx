import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAppStore from '../store';

export default function UserEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const users = useAppStore((state) => state.users);
  const updateUser = useAppStore((state) => state.updateUser);

  const userToEdit = users.find((user) => user.id === parseInt(id));

  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    birthdate: '',
    currentColleague: ''
  });

  useEffect(() => {
    if (userToEdit) {
      setForm(userToEdit);
    }
  }, [userToEdit]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(form);
    navigate('/');
  };

  if (!userToEdit) {
    return <h2>Pengguna tidak ditemukan</h2>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Edit Pengguna</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nama:</label><br />
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label><br />
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Alamat:</label><br />
          <input type="text" name="address" value={form.address} onChange={handleChange} />
        </div>
        <div>
          <label>Tanggal Lahir:</label><br />
          <input type="date" name="birthdate" value={form.birthdate} onChange={handleChange} />
        </div>
        <div>
          <label>Sekolah/Instansi:</label><br />
          <input type="text" name="currentColleague" value={form.currentColleague} onChange={handleChange} />
        </div>
        <br />
        <button type="submit">Simpan Perubahan</button>
      </form>
    </div>
  );
}
