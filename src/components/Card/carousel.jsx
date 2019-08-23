import React, { Component } from "react";
import Slider from "react-slick";

class CarouselCard extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const { data = [] } = this.props;
    return (
      <>
        {data.length > 0 ? (
          <Slider {...settings}>
            {data.map((item, index) => {
              return (
                <div key={index} className="carousel-image-block">
                  <img
                    alt="property images"
                    src={item.src.replace(
                      "https://s3-ap-southeast-1.amazonaws.com/grexter-images/",
                      "https://dmmlkxre2zmz3.cloudfront.net/"
                    )}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "contain"
                    }}
                  />
                </div>
              );
            })}
          </Slider>
        ) : (
          <Slider {...settings}>
            <div className="carousel-image-block">
              <img
                alt="coming soon property image"
                src="https://d2lb8po6ulqbmf.cloudfront.net/newassets/comingsoon-carousel.jpg"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          </Slider>
        )}
      </>
    );
  }
}

export default CarouselCard;
