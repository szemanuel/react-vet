import React from 'react';
import './BodyChapu.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Welcome } from '../Welcome/index';
import { Signup } from '../Signup/index';
import { Login } from '../Login/index';
import { PlanPricing } from '../Planpricing/index';
import { NoMatch } from '../NoMatch/index';



const BodyChapu = () => {
  return (
    <div className="loginPage">
      <BrowserRouter>
        <Routes>
          <Route path="/welcome" element={<Welcome />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/planprincing" element={<PlanPricing />}/>
          <Route path="/signup" element={<Signup />}/>
          //agregar el resto de las páginas acá
          <Route path="/noMatch" element={<NoMatch />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export { BodyChapu };
