import React from 'react';
import { useNavigate } from 'react-router';

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };
  return (
    <nav className="p-4 border">
      <ul className="flex gap-4 xsm:flex-col md:flex-row">
        <li>Home</li>
        <li>Classifica</li>
        <li>Formazioni</li>
        <li>Calendario</li>
        <li className="md:ml-auto sm:ml-0">Account</li>
      </ul>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
