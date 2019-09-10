import React from "react";
import Form from "../../../Components/Form";
import { Row, Col } from "reactstrap";
import "./style.css";
import Button from "../../../Components/Button";

const LandingCover = props => {
  const {
    name,
    bookVisitClicked,
    area,
    landmarks = {},
    landmarkToShow,
    bookVisitClickHandler,
    showFixedBtn
  } = props;
  let LandmarkName;
  LandmarkName =
    landmarks[
      landmarkToShow > 2 ||
      landmarkToShow === "" ||
      landmarkToShow === undefined
        ? 0
        : landmarkToShow
    ].name;
  const styleFixed = showFixedBtn ? "fixed-anim" : null;

  console.log(landmarks, landmarkToShow, LandmarkName);

  return (
    <React.Fragment>
      <Row className="CoverRow">
        <Col md="6">
          <div className="centerText d-md-flex h-100 pt-4 flex-column text-left">
            <h1>{name}</h1>
            <h4>
              Spacious rooms for rent in{" "}
              <span style={{ color: "#f5c513", fontWeight: "500" }}>
                {area.display_name}
              </span>
              , near {LandmarkName}. <br /> <br />
              <span style={{ color: "#f5c513", fontWeight: "500" }}>
                Fully furnished spaces
              </span>{" "}
              with state of the art infrastructure and amenities. Ready to move
              in setup with new age coliving environment.
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
      {showFixedBtn && (
        <div className={"fixed-button-container d-md-none " + styleFixed}>
          <Button className="fixed-button" onClick={bookVisitClickHandler}>
            Book Now
          </Button>
        </div>
      )}
    </React.Fragment>
  );
};
export default LandingCover;
