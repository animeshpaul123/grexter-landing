import React from "react";
import { Row, Col } from "reactstrap";
import "./style.css";

const GoogleStaticMap = props => {
  const { address, location } = props;
  if (location) {
    var { longitude, latitude } = location;
  }

  //console.log(longitude, latitude);

  return (
    <React.Fragment>
      <Row className="mapRow">
        <Col md="12" sm="6">
          <div className="addressText d-md-flex h-100 justify-content-center flex-column text-left">
            <h3>Address</h3>
            <h4>{address}</h4>
          </div>
        </Col>
        <Col md="12" sm="6" className="mapView">
          <span></span>
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default GoogleStaticMap;
