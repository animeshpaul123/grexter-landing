import React from "react";
import { Row, Col } from "reactstrap";
import "./style.css";

const GoogleStaticMap = props => {
  const { address, name } = props;


  return (
    <React.Fragment>
      <Row className="mapRow">
        <Col md="6" sm="12">
          <div className="addressText d-md-flex h-100 justify-content-center flex-column text-left">
            <h3>Address</h3>
            <h4>{address}</h4>
          </div>
        </Col>
        <Col
          md="6"
          sm="12"
          className="mapView "
        >
          <iframe
            width="100%"
            frameBorder="0"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyALm2_qqHb8Wy1q6lv-ytAJdutUx0JYSrU&q=Grexter ${name}`}
            scrolling="no"
            draggable="no"
          ></iframe>
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default GoogleStaticMap;
