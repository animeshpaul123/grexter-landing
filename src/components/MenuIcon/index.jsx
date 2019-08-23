import React, { Component } from "react";
import { Modal } from "reactstrap";
import Link from "next/link";

import "./style.css";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  toggle = () => {
    this.setState(
      prevState => ({
        modal: !prevState.modal
      }),
      () => {
        this.changeOpacity();
      }
    );
  };

  changeOpacity = () => {
    var elem = document.getElementsByClassName("modal-backdrop");
    elem[0].style.opacity = "0.8";
  };

  render() {
    const { logoStyle } = this.props || {};
    const { modal } = this.state;
    const externalCloseBtn = (
      <button
        className="close"
        onClick={this.toggle}
        style={{
          position: "absolute",
          top: "44px",
          right: "24px",
          fontSize: "34px",
          padding: "16px",
          color: "white",
          opacity: 1,
          fontWeight: 100,
          zIndex: 10
        }}
      >
        X
      </button>
    );
    return (
      <div>
        <div className="menu-logo" style={logoStyle}>
          <img
            className="menu-icon-bars"
            alt="menu icon"
            src="/static/images/home/menu.svg"
            onClick={this.toggle}
          />
        </div>
        <div id="menu-container">
          <Modal
            isOpen={modal}
            toggle={this.toggle}
            className="menu-modal-dialog mymodal-backdrop.show "
            id="menu"
            external={externalCloseBtn}
          >
            <div className="menu-list">
              <Link href="/property?lat=&long=">
                <div className="menu-list-text" onClick={this.toggle}>
                  Our Spaces
                </div>
              </Link>
              {/* <div className="menu-list-text">Blog</div> */}
              <Link href="/faqs">
                <div className="menu-list-text" onClick={this.toggle}>
                  FAQs
                </div>
              </Link>
              <Link href="/community">
                <div className="menu-list-text" onClick={this.toggle}>
                  Community
                </div>
              </Link>
              <Link href="/about-us">
                <div className="menu-list-text" onClick={this.toggle}>
                  About Us
                </div>
              </Link>
              {/* <div className="menu-list-text">Business Enquiries</div> */}
              <Link href="/contact-us">
                <div className="menu-list-text" onClick={this.toggle}>
                  Contact Us
                </div>
              </Link>
              <a
                style={{ color: "white" }}
                href="https://medium.com/@grexter_information"
                target="_blank"
                rel="nofollow"
              >
                <div className="menu-list-text" onClick={this.toggle}>
                  Blog
                </div>
              </a>
              <a
                style={{ color: "white" }}
                href="https://dashboard.grexter.in/dashboard/log-in"
                target="_blank"
                rel="nofollow"
              >
                <div className="menu-list-text" onClick={this.toggle}>
                  Login
                </div>
              </a>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Menu;
