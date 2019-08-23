import React from "react";
import { Modal } from "reactstrap";
import "./style.css";

const SuccessModal = props => {
  const { isOpen, closeModal, children } = props;
  return (
    <div>
      <Modal className="modal-md" isOpen={isOpen} toggle={closeModal}>
        <div className="suc-modal-header">
          <div class="animation-ctn">
            <div class="icon icon--order-success svg">
              <img alt="success" src="/static/images/bsuccess.svg" />
            </div>
          </div>
        </div>
        <div className="suc-modal-body">{children}</div>
      </Modal>
    </div>
  );
};

export default SuccessModal;
