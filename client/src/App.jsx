import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Auth from './screen/auth';
import Dashboard from './screen/dashboard';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/dashboard/*' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
