//node modules
import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
//components
import Button from "../Button";
import "./style.css";

//actual functional comopnents
const GrexModal = props => {
  //render functions
  const renderButton = () => {
    const buttonStyle = {
      color: "black",
      padding: "5px 15px 5px 15px",
      borderColor: "#f5c513"
    };
    return (
      <div>
        <Button
          id="submitFormButton"
          buttonStyle={buttonStyle}
          onClick={props.submitForm}
        >
          Submit
        </Button>
      </div>
    );
  };

  const ExternalCloseBtn = () => (
    <button
      className="close"
      style={{ position: "absolute", top: "-25px", right: "-25px" }}
      onClick={props.onClose}
    >
      <img
        alt="close icon"
        src="/static/images/close.svg"
        style={{ height: "20px", width: "20px" }}
      />
    </button>
  );

  const {
    isOpen,
    bgColor = "",
    heading = "",
    backdrop,
    color,
    children,
    onClose,
    onSubmit
  } = props;

  return (
    <div id="grexModalContainer">
      <Modal
        isOpen={isOpen}
        backdrop={true}
        toggle={onClose}
        id="grexModal"
        className="grex-modal-dialog"
      >
        <ExternalCloseBtn />

        <ModalHeader
          style={{ backgroundColor: `${bgColor}`, color: `${color}` }}
          className="grex-modal-header"
        >
          {heading}
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        {onSubmit && (
          <ModalFooter>{onSubmit ? renderButton() : null}</ModalFooter>
        )}
      </Modal>
    </div>
  );
};

const FullReqCallModal = props => {
  const { closeModal, reqForCall } = props;
  return (
    <div className="helper-modal">
      <div onClick={closeModal} className="close-fullreq-modal">
        <img alt="close icon" src="../static/images/close.svg" />
      </div>
      <div>
        <div className="helper-modal-header">
          <p className="helper-modal-header-1">
            Finding it hard to make a choice?
          </p>
          <p className="helper-modal-header-2">Let us help you out.</p>
          <div className="arrow-btn">
            <img
              alt="arrow"
              className="arrow-img"
              src="/static/images/white-arrow.png"
              alt=""
            />
            <div onClick={reqForCall} className="reqModalBigBtn">
              Request for call
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { FullReqCallModal, GrexModal as default };
