import React from "react";
import { Modal } from "reactstrap";
import "./style.css";

const SuccessModal = props => {
  const { isOpen, closeModal, children } = props;
  return (
    <div>
      <Modal className="modal-md" isOpen={isOpen} toggle={closeModal}>
        <div className="animation-ctn">
          <div className="icon icon--order-success svg"></div>
        </div>
        <div className="suc-modal-body">{children}</div>
      </Modal>
    </div>
  );
};

export default SuccessModal;
