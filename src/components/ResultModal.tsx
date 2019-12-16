import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import modalUtil from "../utils/modal.util";
import { ModalAPI } from "../../interfaces";

const ResultModal = () => {
  const [show, setShow] = useState(false);
  const [options, setOptions] = useState({
    title: "",
    body: "",
    success: false
  });
  const [modalApi] = useState<ModalAPI>({
    name: "result",
    open: (options) => {
      setOptions(options);
      setShow(true);
    },
    cleanup: () => setShow(false)
  });

  useEffect(() => modalUtil._registerModal(modalApi), []);

  const bgClass = options.success ? "bg-green-500" : "bg-red-500";

  return (
    <Modal show={show} handleClose={() => modalApi.close()}>
      <div className={bgClass}>
        <h1 className="text-white">{options.title}</h1>
        <p className="text-white">{options.body}</p>
      </div>
    </Modal>
  );
};

export default ResultModal;
