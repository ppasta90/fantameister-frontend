import LoginForm from './components/LoginForm'
import './App.css'
import SignupForm from './components/SignUp'
import { Routes, Route } from 'react-router'
import Homepage from './pages/Homepage'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm />} />
    </Routes>
    </>
  )
}

export default App
