import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import "./GistContentModal.css";

function GistContentModal({ setOpenFile, files, name }) {
  const [content, setContent] = useState("");

  function close() {
    setOpenFile(null);
  }

  useEffect(() => {
    let ignore = false;
    setContent("Loading...");
    getContent(files[name].raw_url).then(
      (result) => {
        if (!ignore) {
          setContent(result);
        }
      },
      (error) => setContent(error)
    );

    return () => {
      ignore = true;
    };
  }, [files, name]);

  async function getContent(url) {
    const res = await fetch(url);
    return res.text();
  }

  return createPortal(
    <>
      <div className="ModalShadow" onClick={close}></div>
      <div className="Modal">
        <header className="ModalHeader">{files[name].filename}</header>
        <section className="ModalContent">
          <code>{content}</code>
        </section>
      </div>
    </>,
    document.getElementById("app-modal")
  );
}

export default GistContentModal;
