import React from "react";
import "./Modal.css";

function Modal({ isOpen, setOpen, shipwreck}) {
    return <div className="modal-container">
        <div className="modal-header">
          <p className="close">&times;</p>
        </div>
        <div className="modal-body">
            <h1>Modal</h1>
        </div>
    </div>
}

export default Modal;