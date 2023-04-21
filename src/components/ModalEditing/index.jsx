import React from 'react';
import "./modalEditing.css"

const ModalEditing = () => {
  return (
    <div className="modal-container">
      <div className="modal-body">
        <button className="modal-close">X </button>
        <div className="loginInputs">
          <input className="inputType" placeholder="Full Name" />
          <input className="inputType" placeholder="Email" />
          <input className="inputType" placeholder="Adress" />
          <input className="inputType" placeholder="Phone Number" />
        </div>      
        <button className="modal-btn"> Confirm </button>
      </div>
    </div> 
  );
};

export { ModalEditing }