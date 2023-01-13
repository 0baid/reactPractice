import React, { useState } from "react";
import "./Modal.css";
const Modal = (props) => {
  
  return (
    props.openModal && (
      <div className="modal-root">
        <div className="modal-body">
          <div className="modal-header">
            <h3>Modal</h3>
            <div className="modal-close-button" onClick={() => props.setOpenModal(false)}>X</div>
          </div>
          <div className="modal-content">
            <h1>Make your Choice</h1>
            <div className="modal-content-images">
              <a href="https://dev.to/snkds/14-great-websites-to-learn-front-end-development-mpm"><img src={"/red_pill.png"} /></a>
              <a href="https://www.tiktok.com/en/"><img src={"/blue_pill.png"} /></a>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
