import React from 'react';
import "./modal.css"

const Modal = () => {
  return (
    <div className="modal-container">
      <div className="modal-body">
        <button className="modal-close">X </button>
        <p> Prueba modal </p>
      </div>
    </div> 
  );
};

export { Modal }