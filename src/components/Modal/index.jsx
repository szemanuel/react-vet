import React from 'react';
import "./modal.css"

const Modal = () => {
  return (
    <div className="modal-container">
      <div className="modal-body">
        <button className="modal-close">X </button>
        <h1> Deleting </h1>
        <p> You are going to delete this client </p>
        <button className="modal-btn"> Confirm </button>
      </div>
    </div> 
  );
};

export { Modal }