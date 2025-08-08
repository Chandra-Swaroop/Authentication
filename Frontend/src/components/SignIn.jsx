import { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../config/apiConfig';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    axios.post(`${BASE_URL}/signin`, { email, password }, {
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => { navigate('/home');
      alert(res.data.msg || 'Login successful');
    })
    .catch(err => alert(err.response?.data?.detail || 'Login failed'))
    .finally(() => setLoading(false));
  };

return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <form onSubmit={handleSignIn} className="w-100" style={{ maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Sign In</h2>

        <div className="mb-3">
          <input
            type="email"
            className="form-control rounded-pill"
            placeholder="Enter your email..."
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control rounded-pill"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-success rounded-pill">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
