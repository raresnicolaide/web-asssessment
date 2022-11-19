import React from "react";
import { createPortal } from "react-dom";

function GistContentModal({ setOpenFile, files, name }) {
  function close() {
    setOpenFile(null);
  }
  return createPortal(
    <>
      <div onClick={close}></div>
      <div>
        <div>{files[name].filename}</div>
      </div>
    </>,
    document.getElementById("app-modal")
  );
}

export default GistContentModal;
