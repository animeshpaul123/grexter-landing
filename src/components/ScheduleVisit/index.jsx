//node modules
import React, { Component } from "react";
import moment from "moment";
import { Input, FormGroup, Label, FormFeedback } from "reactstrap";

//components
import GrexModal from "../Modals";
import SuccessModal from "../../components/SuccessModal";
import kapturebook from "./kapturebook";

//styling
import "./style.css";

class ScheduleVisitModal extends Component {
  constructor(props) {
    super(props);
    this.Obj = new kapturebook();
    this.state = {
      building_id: "",
      contact_number: "",
      date_of_visit: "",
      email_id: "",
      layout_id: 6,
      sub_layout_id: "",
      message: "",
      name: "",
      status: "",
      time_of_visit: "10AM-12PM",
      toast: false,
      loader: false,
      err: false,
      validate: {}
    };
  }

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value, err: false });
  };

  handleCheck = () => {
    const {
      name,
      email_id,
      contact_number,
      date_of_visit,
      sub_layout_id
    } = this.state;

    const { validate } = this.state;

    if (name === "") {
      validate.nameErr = true;
    }
    if (email_id === "") {
      validate.emailErr = true;
    }
    if (contact_number === "") {
      validate.phnumErr = true;
    }

    this.setState(validate);

    if (
      name === "" ||
      email_id === "" ||
      contact_number === "" ||
      date_of_visit === "" ||
      sub_layout_id === ""
    ) {
      this.setState({ err: true });
    } else {
      this.setState({ err: false }, event => {
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
  };

  handleEmailChange = async evt => {
    await this.setState({ [evt.target.name]: evt.target.value, err: false });

    const { email_id } = this.state;

    const { validate } = this.state;

    if (
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email_id
      )
    ) {
      validate.emailErr = false;
    } else {
      validate.emailErr = true;
    }

    this.setState({ validate });
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
  };

  handleSubmit = () => {
    const { buildingdata, closeModal } = this.props;
    // prettier-ignore
    const { name, contact_number, message, date_of_visit, email_id,sub_layout_id, time_of_visit } = this.state;
    this.setState({ loader: true });
    fetch("").then(response => {
      closeModal();
      this.Obj.kapBook(
        buildingdata,
        name,
        contact_number,
        date_of_visit,
        time_of_visit,
        sub_layout_id,
        email_id
      );
      this.setState({ toast: true, loader: false });
      closeModal();
    });
  };

  render() {
    const { isOpen, closeModal } = this.props;
    const timeslot = ["10AM-12PM", "12PM-2PM", "2PM-4PM", "4PM-6PM", "6PM-8PM"];
    const { buildingdata } = this.props || {};
    const { layouts } = buildingdata || [];
    // prettier-ignore
    const { toast, loader, err, name, contact_number, message, date_of_visit, email_id, sub_layout_id, time_of_visit, validate } = this.state;

    return (
      <div>
        <GrexModal
          isOpen={isOpen}
          heading="Book A Visit"
          backdrop={true}
          color="#062f6e"
          onClose={closeModal}
          onSubmit
          submitForm={this.handleCheck}
        >
          <form className="requirement-form">
            <FormGroup>
              <Input
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
              <Input
                type="email"
                placeholder="Email Id"
                className="input-text"
                invalid={false}
                name="email_id"
                value={email_id}
                onChange={this.handleEmailChange}
                invalid={validate.emailErr}
              />
              <FormFeedback invalid>Please enter a valid email</FormFeedback>
            </FormGroup>
            {layouts ? (
              <FormGroup tag="fieldset">
                <div>Select Room Type: </div>
                {layouts.map((item, index) => {
                  return item.sub_layouts.map(initem => {
                    if (initem.id === 1) {
                      return (
                        <FormGroup
                          check
                          style={{ marginLeft: 1, marginRight: 3 }}
                        >
                          <Label check>
                            <Input
                              type="radio"
                              name="sub_layout_id"
                              onChange={this.handleChange}
                              value={initem.id}
                              checked={sub_layout_id == initem.id}
                            />{" "}
                            Private
                          </Label>
                        </FormGroup>
                      );
                    } else if (initem.id === 2) {
                      return (
                        <FormGroup check>
                          <Label check>
                            <Input
                              type="radio"
                              name="sub_layout_id"
                              value={sub_layout_id}
                              onChange={this.handleChange}
                              value={initem.id}
                              checked={sub_layout_id == initem.id}
                            />{" "}
                            Shared/Double
                          </Label>
                        </FormGroup>
                      );
                    } else if (initem.id === 3) {
                      return (
                        <FormGroup check>
                          <Label check>
                            <Input
                              type="radio"
                              name="sub_layout_id"
                              value={sub_layout_id}
                              onChange={this.handleChange}
                              value={initem.id}
                              checked={sub_layout_id == initem.id}
                            />{" "}
                            Three Sharing
                          </Label>
                        </FormGroup>
                      );
                    } else if (initem.id === 4) {
                      return (
                        <FormGroup check>
                          <Label check>
                            <Input
                              type="radio"
                              name="sub_layout_id"
                              value={sub_layout_id}
                              onChange={this.handleChange}
                              value={initem.id}
                              checked={sub_layout_id == initem.id}
                            />{" "}
                            Four Sharing
                          </Label>
                        </FormGroup>
                      );
                    }
                  });
                })}
              </FormGroup>
            ) : (
              <FormGroup tag="fieldset" style={{ display: "flex" }}>
                <div>Select Room Type: </div>
                <FormGroup check style={{ marginLeft: 1, marginRight: 3 }}>
                  <Label check>
                    <Input
                      type="radio"
                      name="sub_layout_id"
                      onChange={this.handleChange}
                      value={1}
                    />{" "}
                    Private
                  </Label>
                </FormGroup>

                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="sub_layout_id"
                      value={sub_layout_id}
                      onChange={this.handleChange}
                      value={2}
                    />{" "}
                    Shared
                  </Label>
                </FormGroup>
              </FormGroup>
            )}
            <FormGroup>
              <Label for="exampleSelect">Visiting Date</Label>
              <Input
                type="date"
                max={moment()
                  .add(1, "months")
                  .format("YYYY-MM-DD")}
                name="date"
                invalid={false}
                name="date_of_visit"
                value={date_of_visit}
                onChange={this.handleChange}
                invalid={validate.dateErr}
              />
              <FormFeedback invalid>
                The field cannot be left blank
              </FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Time Slot</Label>
              <Input
                type="select"
                name="select"
                id="exampleSelect"
                invalid={false}
                name="time_of_visit"
                value={time_of_visit}
                onChange={this.handleChange}
              >
                {timeslot.map((item, index) => {
                  return <option key={index}>{item}</option>;
                })}
              </Input>
              <FormFeedback>The field cannot be left blank</FormFeedback>
            </FormGroup>
          </form>
          {err ? (
            <div className="error-text">
              Please Fill in all the fields before proceeding
            </div>
          ) : null}
          <div>{loader ? <div className="loader" /> : null}</div>
        </GrexModal>
        {toast ? (
          <SuccessModal
            isOpen={toast}
            closeModal={() => {
              this.setState({ toast: false });
            }}
          >
            <div className="sched-suc-modal-h">Great!</div>
            <div className="sched-suc-modal-b">Your Booking is Successful</div>
          </SuccessModal>
        ) : null}
      </div>
    );
  }
}

export default ScheduleVisitModal;
