import React from "react";
import Form from "../../../Components/Form";
import { Row, Col } from "reactstrap";
import "./style.css";

const LandingCover = props => {
  const {
    name,
    bookVisitClicked,
    area,
    landmarks = {},
    landmarkToShow
  } = props;
  let LandmarkName;
  debugger;
  LandmarkName =
    landmarks[
      landmarkToShow > 2 ||
      landmarkToShow === "" ||
      landmarkToShow === undefined
        ? 0
        : landmarkToShow
    ].name;

  console.log(landmarks, landmarkToShow, LandmarkName);

  return (
    <React.Fragment>
      <Row className="CoverRow">
        <Col md="6">
          <div className="centerText d-md-flex h-100 pt-4 flex-column text-left">
            <h1>{name}</h1>
            <h4>
              Spacious rooms for rent in {area.display_name}, near{" "}
              {LandmarkName}. Fully furnished spaces with state of the art
              infrastructure and amenities.
            </h4>
            <h4>
              Ready to move in setup with new age coliving environment.
              <br />
              <br /> Let me know your thoughts on the same.
            </h4>
            {name ? (
              ""
            ) : (
              <span className="welcome-wrapper">
                <h2 className="welcome">
                  <span className="living-spaces">Living Spaces </span> for the
                  young{" "}
                </h2>
                <p className="subWelcome">
                  Adulting is stressful enough - finding the perfect pad doesn't
                  have to be!
                </p>
              </span>
            )}
          </div>
        </Col>
        <Col md="6">
          <div className="formCard" id="form">
            <Form bookVisitClicked={bookVisitClicked} name={name} />
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default LandingCover;
