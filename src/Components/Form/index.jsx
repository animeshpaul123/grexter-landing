//node modules
import React, { Component } from "react";
import { Input, FormGroup, FormFeedback } from "reactstrap";
import SuccessModal from "../SuccessModal";
//components

//styling
import "./style.css";

class ScheduleVisit extends Component {
  state = {
    contact_number: "",
    name: "",
    email: "",
    toast: false,
    sent: false,
    loader: false,
    err: false,
    emailTouched: false,
    validate: {}
  };

  // handleChange = evt => {
  //   this.setState({ [evt.target.name]: evt.target.value, err: false });
  // };

  handleCheck = event => {
    event.preventDefault();

    const { name, contact_number, email, emailTouched } = this.state;
    console.log(email);

    const { validate } = this.state;

    this.setState({ validate });

    if (name === "") {
      validate.nameErr = true;
    }
    if (contact_number === "") {
      validate.phnumErr = true;
    }
    this.setState(validate);

    if (
      validate.nameErr ||
      validate.phnumErr ||
      (emailTouched && validate.emailErr)
    ) {
      this.setState({ err: true });
    } else {
      this.setState({ err: false }, event => {
        this.handleSubmit(event);
      });
    }
  };

  handleNameChange = async evt => {
    await this.setState({ name: evt.target.value, err: false });
    const { name } = this.state;
    const { validate } = this.state;
    if (/^[A-z ]+$/.test(name)) {
      validate.nameErr = false;
    } else {
      validate.nameErr = true;
    }
    this.setState({ validate });
  };

  handelPhnumChange = async evt => {
    await this.setState({ contact_number: evt.target.value, err: false });
    const { contact_number } = this.state;
    const { validate } = this.state;

    if (/^\d{10}$/.test(contact_number)) {
      validate.phnumErr = false;
    } else {
      validate.phnumErr = true;
    }
    this.setState({ validate });
  };

  handelEmailChange = async evt => {
    await this.setState({
      email: evt.target.value,
      err: false,
      emailTouched: true
    });
    const { email } = this.state;
    const { validate } = this.state;

    if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
      validate.emailErr = false;
    } else {
      validate.emailErr = true;
    }
    if (email === "") {
      validate.emailErr = false;
    }
    this.setState({ validate }, () => console.log(this.state));
  };

  handleSubmit = async e => {
    const { name: buildingName } = this.props;
    this.setState({ loader: true });
    let authKey =
      "ZW13dnl4bzd4dGF6MXlvaG9zeWIxZHk0N2dyMG9rYXEwOWlzb2N6ZTNxMndoMGYyZjI=";
    const { name, contact_number, email } = this.state;
    console.log(this.state);

    try {
      const res = await fetch(
        "https://grexter.kapturecrm.com/add-update-enquiry-from-other-source.html",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${authKey}`
          },
          body: JSON.stringify([
            {
              customer_name: name,
              phone: contact_number,
              email_id: email,
              campaign_name: "website",
              secSource: buildingName
            }
          ])
        }
      );

      const data = await res.json();
      this.setState({ loader: false, sent: data.status, toast: true }, () => {
        if (this.state.sent === "success") {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "landing_page_form_submit",
            validation: "Success"
          });
          this.setState({ name: "", contact_number: "", email: "" });
        }
      });
    } catch (error) {
      this.setState({ loader: false, toast: true });
    }
  };

  render() {
    const {
      toast,
      loader,
      err,
      name,
      contact_number,
      email,
      validate,
      sent
    } = this.state;

    const { bookVisitClicked, selectOptionsar } = this.props;
    let disabledCls = "",
      disabled = false;
    if (bookVisitClicked === true) {
      document.getElementById("name").focus();
    }
    if (selectOptionsar && selectOptionsar.length <= 0) {
      disabledCls = "disable-btn";
      disabled = true;
    }
    return (
      <div className="form">
        <p className="formHeader">Book A Visit</p>
        <form>
          <FormGroup>
            <label style={{ fontSize: "14px", fontWeight: "bold" }}>
              Name :
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Name*"
              className="input-text"
              invalid={validate.nameErr}
              name="name"
              value={name}
              onChange={this.handleNameChange}
            />
            <FormFeedback invalid>
              {name ? "Please enter only Letters" : "Please enter Your Name"}
            </FormFeedback>
          </FormGroup>
          <FormGroup>
            <label style={{ fontSize: "14px", fontWeight: "bold" }}>
              Phone :
            </label>
            <Input
              maxLength="10"
              type="text"
              placeholder="Phone Number*"
              className="input-text"
              name="contact_number"
              value={contact_number}
              onChange={this.handelPhnumChange}
              invalid={validate.phnumErr}
            />
            <FormFeedback invalid>
              {contact_number
                ? "Please enter a valid phone number"
                : "Please enter Phone Number"}
            </FormFeedback>
          </FormGroup>
          <FormGroup>
            <label style={{ fontSize: "14px", fontWeight: "bold" }}>
              Email{" "}
              <span style={{ fontSize: "10px", color: "grey" }}>
                (optional)
              </span>{" "}
              :
            </label>
            <Input
              type="email"
              placeholder="Your Email"
              className="input-text"
              name="email"
              value={email}
              onChange={this.handelEmailChange}
              invalid={validate.emailErr}
            />
            <FormFeedback invalid>
              Please enter a valid Email address
            </FormFeedback>
          </FormGroup>
          <FormGroup>
            <button
              type="submit"
              className={`btn bookAVisit submit ${disabledCls}`}
              disabled={disabled}
              onClick={this.handleCheck}
            >
              {loader ? "Sending..." : "Submit"}
            </button>
          </FormGroup>
        </form>
        {err ? (
          <div className="error-text">Name* and Phone Number* is required</div>
        ) : null}
        {toast ? (
          <SuccessModal
            isOpen={toast}
            closeModal={() => {
              this.setState({ toast: false });
            }}
          >
            <div className="sched-suc-modal-h">
              {sent === "success" ? "Great!" : "Oops!"}
            </div>
            <div className="sched-suc-modal-b">
              {sent === "success"
                ? "We will contact you within 24 to 48 hours..!"
                : "try again!"}
            </div>
          </SuccessModal>
        ) : null}
      </div>
    );
  }
}

export default ScheduleVisit;
