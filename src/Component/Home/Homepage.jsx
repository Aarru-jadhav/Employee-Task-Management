// src/Component/Home/Homepage.jsx
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to the Company Portal</h1>
      <button onClick={() => navigate("/login")}>Login</button>
    </div>
  );
};

export default Homepage;
