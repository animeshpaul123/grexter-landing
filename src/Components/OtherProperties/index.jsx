import React, { Component } from "react";
import Slider from "react-slick";
import Carrousel from "../../Components/Card/Carrousel";
import "./style.css";
import { LoadersArr } from "../Rooms/loaderhelper";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

class OtherProperties extends Component {
  state = {
    mouseEnter: false
  };
  NextArrow = props => {
    const { onClick } = props;
    return (
      <div className="f-arrow-btn next-arrow-btn" onClick={onClick}>
        <FaArrowRight className="f-arrow-svg" />
      </div>
    );
  };
  PrevArrow = props => {
    const { onClick } = props;
    return (
      <div className="f-arrow-btn prev-arrow-btn" onClick={onClick}>
        <FaArrowLeft className="f-arrow-svg" />
      </div>
    );
  };
  showArrow = () => this.setState({ mouseEnter: true });
  hideArrow = () => this.setState({ mouseEnter: false });
  render() {
    const { mouseEnter } = this.state;
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      lazyLoad: true,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: mouseEnter,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <this.NextArrow />,
      prevArrow: <this.PrevArrow />
    };
    const { nearby } = this.props;
    let nearByBuildings;
    if (nearby && nearby.length > 0) {
      nearByBuildings = nearby.map(building => {
        let coverImage = "";
        building.building_images.forEach(img => {
          if (img.is_cover_image === 1) {
            coverImage = img.url;
          }
        });
        const areaName = building.area.display_name;
        const dis = building.distance.toFixed(2);
        return (
          <Carrousel
            id={building.id}
            key={building.name}
            name={building.name}
            areaName={areaName}
            coverImage={coverImage}
            dis={dis}
          />
        );
      });
    }

    const preLoder = LoadersArr.map(n => (
      <Carrousel coverImage={n.src} key={n.name} />
    ));

    return (
      <div
        className="slider-container"
        onMouseEnter={this.showArrow}
        onMouseLeave={this.hideArrow}
      >
        <Slider {...settings}>
          {nearby && nearby.length > 0 ? nearByBuildings : preLoder}
        </Slider>
      </div>
    );
  }
}

export default OtherProperties;
