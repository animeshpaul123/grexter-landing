//node modules
import React, { Component } from "react";
import { Row, Col } from "reactstrap";
//components
import Button from "../Button";
import RequirementModal from "../RequirementModal";
import CallingModal from "../CallingModal";

//styling
import "./style.css";

class CallGrexter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isCallingOpen: false
    };
  }

  toggleModal = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  toggleCallingModal = () => {
    this.setState(prevState => ({
      isCallingOpen: !prevState.isCallingOpen
    }));
  };

  render() {
    const { isOpen, isCallingOpen } = this.state;
    const buttonStyleCall = {
      padding: "12px 0px",
      width: "100%",
      borderColor: "#292c74",
      color: "black",
      marginBottom: "24px"
    };
    const buttonStyleReq = {
      padding: "12px 0px",
      width: "100%",
      borderColor: "#f5c513",
      color: "black"
    };
    return (
      <div className="callgrex-container animated fadeIn">
        <div className="dot-logo">
          <img alt="dot" src="/static/images/home/dot.svg" className="dot" />
        </div>
        <div className="dot-compare-text">Still Confused?</div>
        <div className="dot-subtext">
          Getting your own place can be a big deal! Let us help
          <br /> you make the right choice
        </div>
        <div className="callGrexterBtnContainer">
          <Row>
            <Col md={{ size: 4, offset: 2 }}>
              <Button
                buttonStyle={buttonStyleCall}
                onClick={this.toggleCallingModal}
              >
                CALL A GREXPERT
              </Button>
            </Col>
            <Col md="4">
              <Button buttonStyle={buttonStyleReq} onClick={this.toggleModal}>
                TELL US YOUR REQUIREMENT
              </Button>
            </Col>
          </Row>
        </div>
        <div>
          <RequirementModal isOpen={isOpen} closeModal={this.toggleModal} />
        </div>
        <div>
          <CallingModal
            isOpen={isCallingOpen}
            closeModal={this.toggleCallingModal}
          />
        </div>
      </div>
    );
  }
}

export default CallGrexter;
