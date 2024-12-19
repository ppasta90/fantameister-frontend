import React, { useState } from 'react';
import { useNavigate } from "react-router";

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { email:username, password };
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
    navigate("/");
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <h1 className='mb-4'>Login</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
        <input className='border p-2 rounded-md' type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
        <input className='border p-2 rounded-md' type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;