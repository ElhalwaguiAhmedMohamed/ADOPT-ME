import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
const modalRoot = document.getElementById("modal");

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    modalRoot.appendChild(elRef.current); //insert the div to the dom
    return () => modalRoot.removeChild(elRef.current); //clean up after done  //preventing memory leaks
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
