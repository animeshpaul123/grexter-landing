//node modules
import React, { Component } from "react";
import { Input } from "reactstrap";
import moment from "moment";
import cogoToast from "cogo-toast";

//components
import GrexModal from "../Modals";
import kaptureRequire from "./kapturerequire";

//styling
import "./style.css";

class RequirementModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expected_area: "",
      shifting_date: "",
      budget: 0,
      name: "",
      contact_number: "",
      email_id: "",
      message: "",
      loader: false,
      err: false
    };
    this.Obj = new kaptureRequire();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let today_date = new Date();
    this.setState({ shifting_date: moment(today_date).format("YYYY-MM-DD") });
  }

  handleChange = evt => {
    // check it out: we get the evt.target.name (which will be either "email" or "password")
    // and use it to target the key on our `state` object with the same name, using bracket syntax
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleCheck = () => {
    const { name, number, email_id } = this.state;
    if (name === "" || number === "" || email_id === "") {
      this.setState({ err: true });
    } else this.handleSubmit();
  };

  handleSubmit = () => {
    const { closeModal } = this.props;
    this.setState({ loader: true, err: false });
    // prettier-ignore
    const { name, contact_number, message, email_id, expected_area, budget, shifting_date } = this.state;
    fetch("https://backend.grexter.in/special-requirement", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },

      //make sure to serialize your JSON body
      body: JSON.stringify({
        name: name,
        contact_number: contact_number,
        message: message,
        email_id: email_id,
        area: expected_area,
        budget: budget,
        shifting_date: moment(shifting_date).format("MMM DD YYYY")
      })
    }).then(response => {
      //do something awesome that makes the world a better place
      closeModal();
      this.Obj.kapCall(
        name,
        contact_number,
        message,
        email_id,
        expected_area,
        budget,
        shifting_date
      );
      this.setState({ loader: false });
      cogoToast.success("Request Submitted Successfully", {
        position: "top-right"
      });
    });
  };

  render() {
    const { isOpen, closeModal } = this.props;
    // prettier-ignore
    const { loader, err, name, contact_number, message, email_id, expected_area, budget, shifting_date } = this.state;

    return (
      <div>
        <GrexModal
          isOpen={isOpen}
          heading="Tell us your requirement"
          backdrop={true}
          color="#062f6e"
          onClose={closeModal}
          onSubmit
          submitForm={this.handleCheck}
        >
          <div className="requirement-form">
            <Input
              type="text"
              placeholder="Where are you looking to stay?"
              name="expected_area"
              className="input-text"
              value={expected_area}
              onChange={this.handleChange}
            />
            <Input
              type="date"
              name="shifting_date"
              className="input-text"
              onChange={this.handleChange}
              value={shifting_date}
            />
            <Input
              type="number"
              placeholder="What's your Approximate Budget?"
              name="budget"
              className="input-text"
              onChange={this.handleChange}
            />
            <Input
              type="text"
              placeholder="Name"
              name="name"
              className="input-text"
              value={name}
              onChange={this.handleChange}
            />
            <Input
              type="text"
              maxLength={10}
              placeholder="Phone Number"
              name="contact_number"
              className="input-text"
              value={contact_number}
              onChange={this.handleChange}
            />
            <Input
              type="email"
              placeholder="Email Id"
              name="email_id"
              className="input-text"
              value={email_id}
              onChange={this.handleChange}
            />
            <Input
              type="textarea"
              placeholder="message"
              name="message"
              className="input-text"
              value={message}
              onChange={this.handleChange}
            />
            {loader ? <div class="loader" /> : null}
            {err ? (
              <div className="error-text">
                Please Fill in all the fields before proceeding
              </div>
            ) : null}
          </div>
        </GrexModal>
      </div>
    );
  }
}

export default RequirementModal;
