import "./modal.css";
import React from "react";
import { ModalProps } from "../../interfaces";

function Modal({ handleClose, handleSave, show, children }: ModalProps) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className=" modal-main modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto modal p-10">
        {children}
        <div className=" mt-8 flex flex-row-reverse">
          {handleSave && (
            <button
              className="inline-block text-sm px-4 py-2 ml-4 leading-none border-2 bg-teal-500 text-white border-teal-500 hover:border-transparent hover:text-white hover:bg-teal-600 mt-4 lg:mt-0"
              onClick={handleSave}>
              Save
            </button>
          )}
          <button
            className="inline-block text-sm px-4 py-2 leading-none border-2 text-black border-black hover:border-transparent hover:text-white hover:bg-black mt-4 lg:mt-0"
            onClick={handleClose}>
            Close
          </button>
        </div>
      </section>
    </div>
  );
}

export default Modal;
