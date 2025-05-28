import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './src/components/Login';
import Register from './src/components/Register';
import Dashboard from './src/components/Dashboard';
import PrivateRoute from './src/components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <nav>
          <Link to="/register">Registrasi</Link> |{' '}
          <Link to="/login">Login</Link> |{' '}
          <Link to="/users">Daftar Pengguna</Link>|{' '}
          {/* <Link to="/dashboard">Dashboard</Link> |{' '} */}
          {/* <Link to="/edituser">Edit profile</Link> |{' '} */}
          <Link to="/postfeed">CommentForm</Link> |{' '}
          <Link to="/postform">Buat Postingan</Link> |{' '}
        </nav>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
