import './Signup.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Signup with:', email, password);
    navigate('/feed');
  };

  return (
    <div className="signup">
      <div className="overlay">
        <h2>Create Account</h2>
        <form onSubmit={handleSignup}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Sign Up</button>
        </form>
        <p onClick={() => navigate('/')}>Back to Home</p>
      </div>
    </div>
  );
};

export default Signup;