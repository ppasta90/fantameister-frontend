import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();
  const user = localStorage.getItem('user');

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { email:email, password };
    const response = await fetch('http://127.0.0.1:8000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data), 
    })

    if (response.status !== 200) { //guard clause
      navigate("/signup");
      return;
    }
    localStorage.setItem('user', JSON.stringify(data));
    navigate("/");
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <h1 className='mb-4'>Login</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
        <input className='border p-2 rounded-md' type="text" placeholder="Email" value={email} onChange={handleEmailChange} />
        <input className='border p-2 rounded-md' type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <button onClick={() => navigate("/signup")}>Signup</button></p>
    </div>
  );
};

export default LoginForm;