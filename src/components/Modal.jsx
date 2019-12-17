import "./modal.css"
import React from "react";

function ModalComponent () {
    const [show, setShow] = React.useState(false); 
    return (
      <main>
        <h1>React Modal</h1>
        <Modal show={show} handleClose={() => setShow(false)} className="">
          <p className="text-2xl font-bold border-solid border-black border-b-2">
            Modal
          </p>
          <p>modal stuffs go here</p>
        </Modal>
  
        <button
          className="mt-6 ml-4 items-end self-center flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2"
          type="button"
          onClick={() => setShow(true)}
          >
          Open
        </button>
      </main>
    );
  };
  
  function Modal ({ handleClose, show, children }) {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className=" modal-main modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto modal p-10">
          {children}
          <div className=" flex flex-row-reverse">
            <button className="inline-block text-sm px-4 py-2 ml-4 leading-none border-2 bg-teal-500 text-white border-teal-500 hover:border-transparent hover:text-white hover:bg-teal-600 mt-4 lg:mt-0">
              Save
            </button>
            <button
              className="inline-block text-sm px-4 py-2 leading-none border-2 text-black border-black hover:border-transparent hover:text-white hover:bg-black mt-4 lg:mt-0"
              onClick={handleClose}
              >
              Close
            </button>
          </div>
        </section>
      </div>
    );
  };

export default ModalComponent;