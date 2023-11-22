import React, { useState } from 'react';
import '../Styles/modal.css';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className='Modal-div'>
      <button className='openModal' onClick={openModal}>Modalni ochish</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>Atakhanova Madina</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;