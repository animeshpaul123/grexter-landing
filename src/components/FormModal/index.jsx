import React from "react";
import { Button, Label, Form, Input, Modal, Container, Row, Col } from "reactstrap";
import "./style.css";

const FormModal = props => {
  const { isOpen, closeModal } = props;
  return (
    <div className="test-class">
      <Modal
        className="form-modal modal-lg"
        isOpen={isOpen}
        toggle={closeModal}
      >
        <div className="form-modal-header">Contact Us</div>
        <Container>
          <Row>
            <Col className="form-modal-left">
              <Form>
                <Input className="form-modal-input" placeholder="Name" />
                <Input
                  className="form-modal-input"
                  placeholder="Phone Number"
                />
                <Row>
                  <Col>
                    <Label>Private</Label>
                  </Col>
                  <Col>
                    <Label>Shared</Label>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Input type="radio" className="form-modal-input" />
                  </Col>
                  <Col>
                    <Input type="radio" className="form-modal-input" />
                  </Col>
                </Row>
                <Input
                  type="date"
                  className="form-modal-input"
                  placeholder="Date of Visit"
                />
                <Input
                  type="time"
                  className="form-modal-input"
                  placeholder="Time Slot"
                />
                <Button className="form-modal-button">Submit</Button>
              </Form>
            </Col>
            <Col className="form-modal-right">
              <div>Too lazy to fill up a form?</div>
              <br />
              <div>Request a callback from our Grexpert</div>
              <br />
              <Form>
                <Input className="form-modal-input" placeholder="Name" />
                <Input
                  className="form-modal-input"
                  placeholder="Phone Number"
                />
                <Button className="form-modal-button">Submit</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Modal>
    </div>
  );
};

export default FormModal;
