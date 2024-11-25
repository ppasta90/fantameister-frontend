import React, { useState } from "react";

const SignupForm = () => {
    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password_confirmation, setPasswordConfirmation] = useState("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        const data = {username, name, email, password, password_confirmation}
        const response = await fetch("http://127.0.0.1:8000/api/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
        'Accept': 'application/json',
            },
            body: JSON.stringify(data)
        })
        console.log("Response = ", response)
    }

    const handleUsernameRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }
    const handleNameRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleEmailRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handlePasswordRegister = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const handlePasswordConfirmation = (e:React.ChangeEvent<HTMLInputElement>) =>
        setPasswordConfirmation(e.target.value)


    return (
        <div>
          <h1 className='mb-4'>Login</h1>
          <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
            <input className='border p-2 rounded-md' type="text" placeholder="Username" value={username} onChange={handleUsernameRegister} />
            <input className='border p-2 rounded-md' type="text" placeholder="Name" value={name} onChange={handleNameRegister} />
            <input className='border p-2 rounded-md' type="text" placeholder="Email" value={email} onChange={handleEmailRegister} />
            
            <input className='border p-2 rounded-md' type="password" placeholder="Password" value={password} onChange={handlePasswordRegister} />
            <input className='border p-2 rounded-md' type="password" placeholder="Confirm Password" value={password_confirmation} onChange={handlePasswordConfirmation} />

            <button type="submit">Register</button>
          </form>
        </div>
      );
}

export default SignupForm