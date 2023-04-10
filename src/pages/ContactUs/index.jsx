import React from 'react';
import './Contactus.css';

const ContactUs = () => {
  return (
    <div className="loginPage">
      <header className="menu">
        <h1 className="logo"> Vte </h1>
        <h1 className="welcome">Welcome to Vte!!</h1>
        <h1></h1>      
      </header>  
        
      <main className="userLogin">
        <div className="loginInputs">
        <input className="inputType" placeholder="Name"/> 
        <input className="inputType" placeholder="Phone"/> 
        <input className="inputType" placeholder="Email"/>
        <input className="inputType" placeholder="Message"/>
        </div>
        <div className="userOptions">
        <a href="#">Confirm</a>      
        </div>
      </main>
    </div>
  );
};

export { ContactUs };