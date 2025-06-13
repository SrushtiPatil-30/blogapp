import './Welcome.css';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome">
      <div className="overlay">
        <h3>Everyday New</h3>
        <h1>Travel Blog</h1>
        <button className="btn" onClick={() => navigate('/feed')}>SIGN IN</button>
        <button className="btn btn-blue">SIGN IN WITH FACEBOOK</button>
      </div>
    </div>
  );
};

export default Welcome;
