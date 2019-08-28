import React from "react";
import Form from "../../../Components/Form";
import { Row, Col } from "reactstrap";
import "./style.css";

const LandingCover = props => {
  const { name, desc, bookVisitClicked } = props;
  return (
    <React.Fragment>
      <Row className="CoverRow">
        <Col md="6">
          <div className="centerText d-md-flex h-100 pt-4 flex-column text-left">
            <h1>{name}</h1>
            <h4>{desc}</h4>
          </div>
        </Col>
        <Col md="6">
          <div className="formCard">
            <Form bookVisitClicked={bookVisitClicked} />
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default LandingCover;
