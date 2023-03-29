import React from 'react';
import './style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/index';
import { Body } from './components/Body/index';
import { Footer } from './components/Footer/index';
import { Login } from './pages/Login/index';
import { Signup } from './pages/Signup/index';
import { Plan_pricing } from './pages/Planpricing/index';
import { Welcome } from './pages/Welcome/index';
import { NoMatch } from './pages/NoMatch/index';


export default function App() {
  return (
    <div>
     <BrowserRouter>
        <Routes>
          <Route path="/welcome" element={<Welcome />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/planprincing" element={<Plan_pricing />}/>
          <Route path="/signup" element={<Signup />}/>
          //agregar el resto de las páginas acá
          <Route path="*" element={<NoMatch />}/>
          </Routes>
      </BrowserRouter>
     </div>
  );
}
