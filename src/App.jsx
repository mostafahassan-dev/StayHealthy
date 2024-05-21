import React from 'react';

import './App.css';

import { Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Landing_Page/LandingPage';
import Login from './Components/Login/Login';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';


function App() {

  return (
    <div className="App">
          <Navbar/>

            <Routes>
              <Route path="/" element={<LandingPage/>}/>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Sign_Up/>}/>
              <Route path='/instant-consultation' element={<InstantConsultation/>}/>
            </Routes>
            
              
    </div>
  );
}

export default App;