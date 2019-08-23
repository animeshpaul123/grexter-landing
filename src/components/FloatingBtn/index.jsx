import React, { Component } from "react";
import { TiBell } from "react-icons/ti";
import { FaWhatsapp, FaArrowLeft, FaPhone } from "react-icons/fa";
import "./style.css";

class FloatingBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  buttonToggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    const { isOpen } = this.state;
    const { whatsappClick, phoneClick } = this.props;
    return (
      <div className="floating-btn-container">
        <div className="floating-btn-sub-container">
          <div className="floating-main-component" onClick={this.buttonToggle}>
            <div className={isOpen ? "rotate-floating-btn" : "rotate-floating-btn spin"} >
              {isOpen ? (
                <div>
                   <FaArrowLeft className="floating-bell-icon" />
                </div>
              ) : (
                <div>
                  <TiBell className="floating-bell-icon" />
                </div>
              )}
            </div>
          </div>
          <div
            className={
              isOpen
                ? "floating-sub-component-conatiner floating-button-open"
                : "floating-sub-component-conatiner"
            }
          >
            <div
              onClick={whatsappClick}
              className="floating-sub-component floating-whatsapp"
            >
              <FaWhatsapp className="floating-sub-icon floating-wp-icon" />
            </div>
            <div
              onClick={phoneClick}
              className="floating-sub-component floating-phone"
            >
              <FaPhone className="floating-sub-icon floating-phone-icon" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FloatingBtn;
