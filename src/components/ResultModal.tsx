import React from "react";
import Modal from "./Modal";

const ResultModal = ({ options, modal }) => {

  const bgClass = options.success ? "border-green-400 border-t-8" : "border-red-400 border-t-8";

  return (
    <Modal show={modal.isActive} handleClose={() => modal.close()}>
      <div className={bgClass}>
        <h1 className="text-black text-lg font-bold mt-6">{options.title}</h1>
        <p className="text-black text-base font-normal mt-2">{options.body}</p>
      </div>
    </Modal>
  );
};

export default ResultModal;
