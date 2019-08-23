import React, { Component } from "react";
import "./style.css";
import Button from "../Button";
import CarouselCard from "./carousel";

const Card = props => {
  const renderBasicCard = props => {
    return (
      <div className="card-basic">
        {props.image_src ? (
          <img
            alt="Property image"
            src={props.image_src.replace(
              "https://s3-ap-southeast-1.amazonaws.com/grexter-images/",
              "https://dmmlkxre2zmz3.cloudfront.net/"
            )}
            className="card-basic-image"
          />
        ) : (
          <img
            alt="Coming soon property image"
            src="https://d2lb8po6ulqbmf.cloudfront.net/newassets/comingsoon-carousel.jpg"
            className="card-basic-image"
          />
        )}
      </div>
    );
  };

  const renderCarousel = props => {
    return <CarouselCard data={props.carousel_images} />;
  };

  const renderBookNow = props => {
    const buttonStyle = {
      height: "45px",
      width: "193px",
      color: "#292c74",
      paddingTop: "9px",
      textAlign: "center",
      borderColor: "#f7d142"
    };
    const {buttonClassName} = props;  
    return (
      <div className="col-sm-12 book-now-block" onClick={props.onClick}>
        {props.cost ? (
          <div className="price-tag">₹{props.cost.toLocaleString() || {}}</div>
        ) : (
          <div className="price-tag-not-available">Not Available</div>
        )}
        {props.cost && (
          <Button className={ buttonClassName ? "book-now-btn-building " + buttonClassName : "book-now-btn-building"} buttonStyle={buttonStyle}>
            Book A Visit
          </Button>
        )}
      </div>
    );
  };
  const renderTitle = props => {
    return (
      <div className="card-foot-details">
        <div className="card-foot-title">{props.building_name}</div>
        <div className="card-foot-subtitle">{props.building_location}</div>
      </div>
    );
  };

  const renderIcon = props => {
    return (
      <div className="icon-head">
        {props.room_type === "private" ? (
          <img
            alt="person icon single"
            src="/static/images/buildings/single.png"
          />
        ) : (
          <img
            alt="person icon shared"
            src="/static/images/buildings/sharedicon.png"
          />
        )}
      </div>
    );
  };
  return (
    <div
      className="card-container"
      style={{ height: `${props.height}`, width: `${props.width}` }}
      onClick={props.onRedirect}
    >
      <div className="card-head" id="grex-card">
        {props.type === "basic" && renderBasicCard(props)}
        {props.type === "carousel" && renderCarousel(props)}
        {props.icon && renderIcon(props)}
      </div>
      <div className="card-foot">
        {props.booking ? renderBookNow(props) : renderTitle(props)}
      </div>
    </div>
  );
};

export default Card;
