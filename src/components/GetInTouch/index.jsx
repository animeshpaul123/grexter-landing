//node modules
import React, { Component } from "react";
import { Input } from "reactstrap";
import cogoToast from "cogo-toast";

//components
import GrexModal from "../Modals";
import kaptureContact from "./kapturecontact";

//styling
import "./style.css";

class GetInTouchModal extends Component {
  constructor(props) {
    super(props);
    this.Obj = new kaptureContact();
    this.state = {
      name: "",
      contact_number: "",
      email_id: "",
      message: "",
      loader: false,
      err: false
    };
  }

  handleChange = evt => {
    // check it out: we get the evt.target.name (which will be either "email" or "password")
    // and use it to target the key on our `state` object with the same name, using bracket syntax
    this.setState({ [evt.target.name]: evt.target.value });
  };
  handleCheck = () => {
    const { name, number, email_id, message } = this.state;
    if (name === "" || number === "" || email_id === "" || message === "") {
      this.setState({ err: true });
    } else this.handleSubmit();
  };

  handleSubmit = event => {
    const { closeModal } = this.props;
    const { name, contact_number, email_id, message } = this.state;
    this.setState({ loader: true, err: false });
    fetch("https://backend.grexter.in/contact-us", {
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
        email: email_id,
        source: "website"
      })
    }).then(response => {
      //do something awesome that makes the world a better place
      this.Obj.kapCall(name, contact_number, email_id, message);
      closeModal();
      this.setState({ loader: false });
      cogoToast.success("Request Submitted Successfully", {
        position: "top-right"
      });
    });
  };

  render() {
    const { isOpen, closeModal } = this.props;
    const { loader, err, name, contact_number, email_id, message } = this.state;

    return (
      <div>
        <GrexModal
          isOpen={isOpen}
          heading="Get in Touch with us"
          backdrop={true}
          color="#062f6e"
          onClose={closeModal}
          onSubmit
          submitForm={this.handleCheck}
        >
          <div className="requirement-form">
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
              placeholder="Sales/ Business Enquiry / Any Other Enquiry"
              name="message"
              className="input-text"
              value={message}
              onChange={this.handleChange}
            />
            {loader ? <div className="loader" /> : null}
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

export default GetInTouchModal;
