//node modules
import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Router from "next/router";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

//components
import Menu from "../MenuIcon";
import Button from "../Button";

import "./style.css";

class FixedHeaderGen extends Component {
  constructor() {
    super();
    this.state = { dropdown: false };
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick);
  }

  setWrapperRef = node => {
    this.wrapperRef = node;
  };

  handleClick = event => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.dropdownClose();
    }
  };

  dropdownClose = () => {
    this.setState({ dropdown: false });
  };

  dropdownToggle = () => {
    this.setState(prevState => {
      this.setState({ dropdown: !prevState.dropdown });
    });
  };

  render() {
    const buttonStyle = {
      border: "1px solid #f7d142",
      padding: "9px 36px 9px 36px",
      color: "white",
      marginTop: "15px",
      margin: "auto",
      textAlign: "center"
    };
    const buttonStyle2 = {
      border: "1px solid #f7d142",
      padding: "9px 50px 9px 50px",
      color: "white",
      backgroundColor: "#F5C513",
      marginTop: "15px",
      margin: "auto",
      textAlign: "center"
    };

    const { openModal, onPhone, onWhatsapp } = this.props;
    const { dropdown } = this.state;

    return (
      <>
        <div className="grex-fixed-header-gen animated fadeInDown">
          <Menu logoStyle={{ top: "30px" }} />
          <Row>
            <Col xs={{ size: 5 }}>
              <div className="logo fx-header-logo-container">
                <img
                  alt="grexter logo"
                  src="/static/images/home/logo-white.png"
                  className="fixed-class-logo-gen"
                  onClick={() => {
                    Router.push("/");
                    scrollTo({ top: 0, behavior: "smooth" });
                  }}
                />
              </div>
            </Col>
            <Col className="fx-header-btns">
              <div ref={this.setWrapperRef} className="book-now-gen-req">
                <Button
                  buttonStyle={buttonStyle2}
                  onClick={this.dropdownToggle}
                >
                  Request a Call
                </Button>
                {dropdown ? (
                  <div className="header-dropdown animated fadeInDown">
                    <Row>
                      <div className="book-now-whatsapp" onClick={onWhatsapp}>
                        <FaWhatsapp
                          className="fx-header-whatsapp-icon-dt"
                          size={30}
                          color="white"
                        />
                        <div id="whatsapptext">WhatsApp</div>
                      </div>
                    </Row>

                    <Row>
                      <div className="book-now-phone" onClick={onPhone}>
                        <FaPhone
                          className="fx-header-phone-icon-dt"
                          size={22}
                          color="white"
                        />
                        <div id="phonetext">Phone</div>
                      </div>
                    </Row>
                  </div>
                ) : null}
              </div>
              <div className="book-now-gen">
                <Button buttonStyle={buttonStyle} onClick={openModal}>
                  Explore More
                </Button>
              </div>
            </Col>
            <Col className="fx-header-btns-mobile" xs="7">
              <div className="fx-btns-mobile-wrapper">
                <FaWhatsapp
                  onClick={onWhatsapp}
                  className="fx-header-whatsapp-icon"
                  size="32"
                  color="#5bce6f"
                />
                <FaPhone color="#17b0f4" onClick={onPhone} size="28" />
              </div>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default FixedHeaderGen;
