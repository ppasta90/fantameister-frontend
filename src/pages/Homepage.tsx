import { useNavigate } from 'react-router';

const Homepage = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };
  return (
    <>
      <div>Homepage</div>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Homepage;
