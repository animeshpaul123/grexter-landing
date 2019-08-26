//node modules
import React, { Component } from "react";
import cogoToast from "cogo-toast";
import { FormGroup, Input, FormFeedback } from "reactstrap";

//components
import GrexModal from "../Modals";
import kapcall from "./kapturecall";

//styling
import "./style.css";

class RequestCall extends Component {
  constructor(props) {
    super(props);
    this.Obj = new kapcall();
    this.state = {
      name: "",
      contact_number: "",
      validate: {},
      loader: false
    };
  }

  onNameChange = async e => {
    await this.setState({ name: e.target.value });
    const { name } = this.state;

    const { validate } = this.state;

    if (/^[A-z ]+$/.test(name)) {
      validate.nameErr = false;
    } else {
      validate.nameErr = true;
    }

    this.setState({ validate });
  };

  onPhnumChange = async e => {
    await this.setState({ contact_number: e.target.value });

    const { contact_number } = this.state;

    const { validate } = this.state;

    if (/^\d{10}$/.test(contact_number)) {
      validate.phnumErr = false;
    } else {
      validate.phnumErr = true;
    }
    this.setState({ validate });
  };

  checkForm = () => {
    const { validate, name, contact_number } = this.state;

    if (name === "") {
      validate.nameErr = true;
    }
    if (contact_number === "") {
      validate.phnumErr = true;
    }

    this.setState({ validate });

    if (!validate.nameErr && !validate.phnumErr) {
      this.submitForm();
    }
  };

  submitForm = () => {
    const { closeModal } = this.props;
    const { name, contact_number } = this.state;
    this.setState({ loader: true });

    fetch("https://backend.grexter.in/contact-us", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        name: name,
        contact_number: contact_number,
        message: "I am a Customer",
        email: "",
        source: "website"
      })
    }).then(response => {
      closeModal();
      this.Obj.kapReqCall(name, contact_number);
      this.setState({ loader: false });
      cogoToast.success("Request Submitted Successfully", {
        position: "top-right"
      });
      closeModal();
    });
  };

  render() {
    const { isOpen, closeModal } = this.props;
    const { loader, validate } = this.state;
    const { nameErr, phnumErr } = validate;

    return (
      <div>
        <GrexModal
          isOpen={isOpen}
          heading="Request for a call"
          color="#062f6e"
          backdrop={true}
          onClose={closeModal}
          submitForm={this.checkForm}
        >
          <form className="requirement-form">
            <FormGroup>
              <p className="our-promise-message">
                {" "}
                <span className="our-promise">Our promise</span>
                <br /> We will get back to you within 24-48 hrs.
                <br /> Don't worry we will never spam you
              </p>
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                placeholder="Name"
                className="request-input-text req-inp-1"
                invalid={false}
                name="name"
                onChange={this.onNameChange}
                invalid={nameErr}
              />
              <FormFeedback invalid>Please enter a valid name</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                placeholder="Phone Number"
                className="request-input-text"
                invalid={phnumErr}
                name="contact_number"
                maxLength={10}
                onChange={this.onPhnumChange}
              />
              <FormFeedback invalid>
                Please enter a valid phone number
              </FormFeedback>
            </FormGroup>
            <FormGroup>
              <div onClick={this.checkForm} className="request-input-btn">
                Submit
              </div>
            </FormGroup>
          </form>
          {loader ? <div className="loader" /> : null}
        </GrexModal>
      </div>
    );
  }
}

export default RequestCall;
