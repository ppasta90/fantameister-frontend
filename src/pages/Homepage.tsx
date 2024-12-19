import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Homepage = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };
  const user = localStorage.getItem('user');

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return (
    <>
      <div>Homepage</div>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Homepage;
