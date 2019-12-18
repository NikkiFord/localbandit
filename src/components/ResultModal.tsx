import React from "react";
import Modal from "./Modal";

const ResultModal = ({ options, modal }) => {

  const bgClass = options.success ? "bg-green-500" : "bg-red-500";

  return (
    <Modal show={modal.isActive} handleClose={() => modal.close()}>
      <div className={bgClass}>
        <h1 className="text-white">{options.title}</h1>
        <p className="text-white">{options.body}</p>
      </div>
    </Modal>
  );
};

export default ResultModal;
