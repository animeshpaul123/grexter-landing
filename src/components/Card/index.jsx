import React from "react";
import { Col, Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import "./style.css";
import Button from "../Button/index";

const RoomsCard = props => {
  let { name, price, src, bookVisitClickHandler } = props;

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
          src={src}
          alt="Card image cap"
          fallback={<p>Loading...</p>}
        />

        <CardBody className="card-foot">
          <CardTitle className="buildings-cardview-type">{name}</CardTitle>
          <CardText className="price-tag"> ₹ {price}</CardText>
          <Button onClick={bookVisitClickHandler}>Book A Visit</Button>
        </CardBody>
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
