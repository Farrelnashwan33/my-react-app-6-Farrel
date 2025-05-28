import { useState } from 'react';

const EditUser = () => {
  const [name, setName] = useState(''); // ambil dari API kalau mau
  const handleUpdate = (e) => {
    e.preventDefault();
    // Kirim update ke API
    alert('User updated!');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Edit Profil</h2>
      <form onSubmit={handleUpdate}>
        <input
          className="border p-2 w-full mb-4"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">Simpan</button>
      </form>
    </div>
  );
};

export default EditUser;
