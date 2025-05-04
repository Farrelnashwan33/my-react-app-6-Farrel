import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAppStore from '../store';

export default function UserAdd() {
  const navigate = useNavigate();
  const addUser = useAppStore((state) => state.addUser);

  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    birthdate: '',
    currentColleague: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ ...form, id: Date.now() });
    navigate('/');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Tambah Pengguna</h2>
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
        <button type="submit">Simpan</button>
      </form>
    </div>
  );
}
