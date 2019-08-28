//node modules
import React, { Component } from "react";
import { Input, FormGroup, Label, FormFeedback, Button } from "reactstrap";
import SuccessModal from "../SuccessModal";
//components

//styling
import "./style.css";

class ScheduleVisit extends Component {
  state = {
    contact_number: "",
    // layout_id: 6,
    // message: "",
    name: "",
    selectedInterestOption: "Hi",
    // interestOptions : [],
    // status: "",
    toast: false,
    loader: false,
    err: false,
    validate: {}
  };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value, err: false });
  };

  handleCheck = event => {
    event.preventDefault();
    const { name, contact_number } = this.state;

    const { validate } = this.state;
    if (name === "") {
      validate.nameErr = true;
    }
    if (contact_number === "") {
      validate.phnumErr = true;
    }

    this.setState(validate);

    if (validate.nameErr || validate.phnumErr) {
      this.setState({ err: true });
    } else {
      this.setState({ err: false }, event => {
        console.log(event);
        this.handleSubmit(event);
      });
    }
  };

  handleNameChange = async evt => {
    await this.setState({ [evt.target.name]: evt.target.value, err: false });

    const { name } = this.state;

    const { validate } = this.state;

    if (/^[A-z ]+$/.test(name)) {
      validate.nameErr = false;
    } else {
      validate.nameErr = true;
    }

    this.setState({ validate });
    console.log(validate);
  };

  handelPhnumChange = async evt => {
    await this.setState({ [evt.target.name]: evt.target.value, err: false });

    const { contact_number } = this.state;

    const { validate } = this.state;

    if (/^\d{10}$/.test(contact_number)) {
      validate.phnumErr = false;
    } else {
      validate.phnumErr = true;
    }
    this.setState({ validate });
    console.log(validate);
  };

  handleSubmit = e => {
    this.setState({ loader: true, toast: true });
  };

  render() {
    // prettier-ignore
    const { toast, loader, err, name, contact_number,  validate ,selectedInterestOption} = this.state;
    const { bookVisitClicked, selectOptionsar } = this.props;
    if (bookVisitClicked === true) {
      document.getElementById("name").focus();
    }
    return (
      <div className="form">
        <p className="formHeader">Let we Know You..!</p>
        <form>
          <FormGroup>
            <label style={{ fontSize: "14px", fontWeight: "bold" }}>
              Name :
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Name"
              className="input-text"
              invalid={false}
              name="name"
              value={name}
              onChange={this.handleNameChange}
              invalid={validate.nameErr}
            />
            <FormFeedback invalid>Please enter a valid name</FormFeedback>
          </FormGroup>
          <FormGroup>
            <label style={{ fontSize: "14px", fontWeight: "bold" }}>
              Phone :
            </label>
            <Input
              maxLength="10"
              type="text"
              placeholder="Phone Number"
              className="input-text"
              invalid={false}
              name="contact_number"
              value={contact_number}
              onChange={this.handelPhnumChange}
              invalid={validate.phnumErr}
            />
            <FormFeedback invalid>
              Please enter a valid phone number
            </FormFeedback>
          </FormGroup>
          <FormGroup>
            <label style={{ fontSize: "14px", fontWeight: "bold" }}>
              Your interest :
            </label>
            <Input
              maxLength="10"
              type="select"
              placeholder="Phone Number"
              className="input-text"
              invalid={false}
              value={selectedInterestOption}
            >
              {}
            </Input>
            <FormFeedback invalid>
              Please enter a valid phone number
            </FormFeedback>
          </FormGroup>
          <FormGroup>
            <button
              type="submit"
              className="btn bookAVisit submit"
              onClick={this.handleCheck}
            >
              Submit
            </button>
          </FormGroup>
        </form>
        {err ? (
          <div className="error-text">
            Please Fill in all the fields before proceeding
          </div>
        ) : null}
        <div>{loader ? <div className="loader" /> : null}</div>
        {toast ? (
          <SuccessModal
            isOpen={toast}
            closeModal={() => {
              this.setState({ toast: false });
            }}
          >
            <div className="sched-suc-modal-h">Great!</div>
            <div className="sched-suc-modal-b">
              We will contact you within 24 to 48 hours..!
            </div>
          </SuccessModal>
        ) : null}
      </div>
    );
  }
}

export default ScheduleVisit;
