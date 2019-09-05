import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

import "./style.css";

const Carrousel = props => {
  const { name, areaName, coverImage, dis, onCardClick } = props;
  return (
    <Card className="mr-3" onClick={onCardClick}>
      <CardImg
        width="100%"
        src={
          coverImage
            ? coverImage
            : "https://d2lb8po6ulqbmf.cloudfront.net/newassets/comingsoon-carousel.jpg"
        }
        alt="Card image cap"
      />
      <CardBody className="card-foot">
        <CardTitle className="buildings-cardview-type">{name}</CardTitle>
        <CardText className="areaName">{areaName}</CardText>
        <p className="distance">{dis} km</p>
      </CardBody>
    </Card>
  );
};

export default Carrousel;
