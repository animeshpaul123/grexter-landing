//node modules
import React from "react";
import Shimmer from "react-shimmer-effect";
import { Col, Row } from "reactstrap";
import injectSheet from "react-jss";

//styling
import "./style.css";

const StyleSheet = {
  container: {
    border: "0px solid rgba(255, 255, 255, 1)",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, .1)",
    borderRadius: "4px",
    backgroundColor: "white",
    display: "flex",
    padding: "16px",
    width: "200px"
  },
  circle: {
    height: "56px",
    width: "56px",
    borderRadius: "50%"
  },
  line: {
    width: "93%",
    height: "30px",
    alignSelf: "center",
    borderRadius: "8px"
  },
  rect: {
    width: "95%",
    height: "320px",
    backgroundSize: "800px 320px",
    marginTop: "3%",
    alignSelf: "center",
    marginLeft: "13px",
    borderRadius: "15px"
  },
  button: {
    width: "90%",
    height: "40px",
    alignSelf: "center",
    borderRadius: "20px"
  }
};

const App = props => {
  const { classes } = props;
  return (
    <>
      <Col md="12" sm="12" lg="6">
        <div className="property-card-container">
          <div className="property-card-head">
            <Shimmer>
              <div className={classes.rect} />
            </Shimmer>
          </div>
          <div className="property-card-foot">
            <Row>
              <Col md="7" sm="7">
                <div className="card-sub-area">
                  <Shimmer>
                    <div className={classes.line} />
                  </Shimmer>
                </div>
              </Col>

              <Col md="5" sm="5">
                <div className="card-sub-area">
                  <Shimmer>
                    <div className={classes.line} />
                  </Shimmer>
                </div>
              </Col>
            </Row>
            <br />
            <Row>
              <Col md="4">
                <div className="card-sub-area">
                  <Shimmer>
                    <div className={classes.button} />
                  </Shimmer>
                </div>
              </Col>
              <Col md="4">
                <div className="card-sub-area">
                  <Shimmer>
                    <div className={classes.button} />
                  </Shimmer>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Col>
    </>
  );
};

export default injectSheet(StyleSheet)(App);
