import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Navbar from '../components/Navbar';

const Homepage = () => {
  const user = localStorage.getItem('user');
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user]);

  return (
    <main className="border">
      <h1 className="p-4">FantaMeister</h1>
      <Navbar />
    </main>
  );
};

export default Homepage;
