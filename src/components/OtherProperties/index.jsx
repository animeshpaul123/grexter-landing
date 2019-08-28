import React from "react";
import Slider from "react-slick";
import Carrousel from "../../Components/Card/Carrousel";
import "./style.css";
import { LoadersArr } from "../Rooms/loaderhelper";

const OtherProperties = props => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: true,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const { nearby } = props;
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
      return (
        <Carrousel
          key={building.name}
          name={building.name}
          areaName={areaName}
          coverImage={coverImage}
        />
      );
    });
  }
  console.log(LoadersArr);

  const preLoder = LoadersArr.map(n => (
    <Carrousel coverImage={n.src} key={n.name} />
  ));

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {nearby && nearby.length > 0 ? nearByBuildings : preLoder}
      </Slider>
    </div>
  );
};

export default OtherProperties;
