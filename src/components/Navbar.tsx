import { useNavigate } from 'react-router';

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const gotToAccunt = () => {
    alert('going to account settings?');
  };
  return (
    <nav className="p-4">
      <ul className="flex items-center gap-4 xsm:flex-col md:flex-row">
        <li>Home</li>
        <li>Classifica</li>
        <li>Calendario</li>
        <div className="flex xsm:flex-col md:flex-row items-center gap-2 md:ml-auto sm:ml-0">
          <button>Create a league</button>
          <button>Join a league</button>
          <button onClick={gotToAccunt}>Account</button>
        </div>
      <button onClick={handleLogout}>Logout</button>
      </ul>
    </nav>
  );
};

export default Navbar;
