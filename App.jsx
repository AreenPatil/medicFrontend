import { useState } from 'react'
import './App.css'
import {Routes, Route } from 'react-router-dom'
import Login from './pages/login.jsx'
import Home from './pages/home'
import Appointments from './pages/appointments'
import Prescription from './pages/prescription'
import Contacts from './pages/contacts'
import Info from './pages/Info'
import './css/contacts.css'
import './css/prescription.css'
import './css/login.css'
import './css/home.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      {/* <Route path="/" /> */}
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/information" element={<Info />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/prescription" element={<Prescription />} />

    </Routes>

  );
}


export default App;
