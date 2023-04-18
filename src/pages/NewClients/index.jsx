import React, { useState } from 'react';
import './NewClients.css';

const NewClients = () => {
  return (
    <div className="page">
      <header className="">
        <h1 className="logo"> Vte </h1>
        <h1 className="welcome"> New Client</h1>
        <h1 className="hamburguer">hamburguer</h1>
      </header>
      <main className="userLogin">
        <div className="loginInputs">
          <input className="inputType" placeholder="Full Name" />
          <input className="inputType" placeholder="Email" />
          <input className="inputType" placeholder="Adress" />
          <input className="inputType" placeholder="Phone Number" />
        </div>
        <div className="userOptions">
          <a href="#">Confirm</a>
        </div>
      </main>
    </div>
  );
};

export { NewClients };
