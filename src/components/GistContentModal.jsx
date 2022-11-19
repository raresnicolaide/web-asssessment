import React from "react";
import { createPortal } from "react-dom";

import "./GistContentModal.css";

function GistContentModal({ setOpenFile, files, name }) {
  function close() {
    setOpenFile(null);
  }
  return createPortal(
    <>
      <div className="ModalShadow" onClick={close}></div>
      <div className="Modal">
        <div className="ModalContent">
          <div className="ModalHeader">{files[name].filename}</div>
        </div>
      </div>
    </>,
    document.getElementById("app-modal")
  );
}

export default GistContentModal;
