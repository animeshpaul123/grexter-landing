import React from "react";
import { Row, Col } from "reactstrap";
import "./style.css";

const GoogleStaticMap = props => {
  const { address, name, location = {} } = props;

  return (
    <React.Fragment>
      <Row className="mapRow">
        <Col md="6" sm="12">
          <div className="addressText d-md-flex h-100 justify-content-center flex-column text-left">
            <h3>Address</h3>
            <h4>{address}</h4>
          </div>
        </Col>
        <Col md="6" sm="12" className="mapView ">
          {name === "Vega" || "Cosmos" ? (
            <iframe
              width="100%"
              frameBorder="0"
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCoWjs75Ave4auzfDU1gQK-mo2NYLX6SfU&q=${location.latitude},${location.longitude}`}
              scrolling="no"
              draggable="no"
              title="google map"
            />
          ) : (
            <iframe
              width="100%"
              frameBorder="0"
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCoWjs75Ave4auzfDU1gQK-mo2NYLX6SfU&q=Grexter ${name}`}
              scrolling="no"
              draggable="no"
              title="google map"
            />
          )}
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default GoogleStaticMap;
