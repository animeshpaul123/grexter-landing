import React from "react";
import { Col, Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import notAvailableImage from "../../static/images/notAvailable.jpg";
import "./style.css";
import Button from "../Button/index";
import Image from "react-shimmer";

const RoomsCard = props => {
  let { name, price, src, bookVisitClickHandler } = props;
  let notAvailable = true;
  if (name || src || price) {
    notAvailable = false;
  }

  if (name && src === "") {
    src =
      "https://d2lb8po6ulqbmf.cloudfront.net/newassets/comingsoon-carousel.jpg";
  }

  return (
    <Col sm="12" md="6" className="building-card-container ">
      <Card>
        <CardImg
          // top
          width="100%"
          src={src ? src : notAvailableImage}
          alt="Card image cap"
          fallback={<p>Loading...</p>}
        />
        {notAvailable ? (
          <CardBody>
            <CardTitle className="buildings-cardview-type">
              Not Available
            </CardTitle>
          </CardBody>
        ) : (
          <CardBody className="card-foot">
            <CardTitle className="buildings-cardview-type">{name}</CardTitle>
            <CardText className="price-tag"> ₹ {price}</CardText>
            <Button onClick={bookVisitClickHandler}>Book A Visit</Button>
          </CardBody>
        )}
      </Card>
    </Col>
  );
};

RoomsCard.defaultProps = {
  name: " ",
  price: " ",
  src: "https://d2lb8po6ulqbmf.cloudfront.net/newassets/comingsoon-carousel.jpg"
};

export default RoomsCard;
