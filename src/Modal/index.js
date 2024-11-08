import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

function Modal({children}) {
    return ReactDOM.createPortal(
        <div className="ModalListStyle">
            {children}
        </div>,
        document.getElementById('ModalList')
    );
}

export {Modal};