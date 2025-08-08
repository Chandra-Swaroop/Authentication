import { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../config/apiConfig';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }


    axios.post(`${BASE_URL}/signup`, 
      { name, email, password, confirm_password: confirmPassword }, 
      { headers: { 'Content-Type': 'application/json' } }
    )
    .then(res => alert(res.data.msg || 'Signup successful'))
    .catch(err => alert(err.response?.data?.detail || 'Signup failed'))
    .finally(() => setLoading(false));
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <form onSubmit={handleSignUp} className="w-100 " style={{ maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Sign Up</h2>

        <div className="mb-3">
          <input
            type="text"
            className="form-control rounded-pill"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            className="form-control rounded-pill"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control rounded-pill"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            className="form-control rounded-pill"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-success rounded-pill" >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
