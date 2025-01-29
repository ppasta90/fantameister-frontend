import { useNavigate } from 'react-router';

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };
  return (
    <nav className="p-4 border">
      <ul className="flex items-center gap-4 xsm:flex-col md:flex-row">
        <li>Home</li>
        <li>Classifica</li>
        <li>Calendario</li>
        <div className="flex xsm:flex-col md:flex-row items-center gap-2 md:ml-auto sm:ml-0">
          <button>Create a league</button>
          <button>Join a league</button>
          <li>Account</li>
        </div>
      </ul>
      {/* <button onClick={handleLogout}>Logout</button> */}
    </nav>
  );
};

export default Navbar;
