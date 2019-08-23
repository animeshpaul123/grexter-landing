import React, { Component } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import "./style.css";

class Featured extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isClient: false
    };
  }

  componentDidMount() {
    this.setState({ windowWidth: window.innerWidth, isClient: true });
  }

  NextArrow = props => {
    const { onClick } = props;
    return (
      <div className="featured-arrow-right featured-arrow" onClick={onClick}>
        <IoIosArrowForward className="featured-arrow-svg" />
      </div>
    );
  };

  PrevArrow = props => {
    const { onClick } = props;
    return (
      <div className="featured-arrow-left featured-arrow" onClick={onClick}>
        <IoIosArrowBack className="featured-arrow-svg" />
      </div>
    );
  };

  render() {
    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      slidesToShow: 3,
      dots: false,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 4000,
      nextArrow: <this.NextArrow />,
      prevArrow: <this.PrevArrow />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            centerMode: true
          }
        }
      ]
    };

    const { data } = this.props;
    const { isClient } = this.state;
    return (
      <div className="featured-main-wrapper">
        <Slider {...settings}
         key={isClient ? "client" : "server"}
         >
          {data.map((each, k) => {
            const { heading, logo, designation, link } = each;
            return (
              <Col>
                <div className="featured-wrapper">
                  <div className="featured-image-warapper">
                    <img className="featured-image-logo" src={logo} alt="" />
                  </div>
                  <div className="featured-image-text">
                    <div className="featured-image-heading">{heading}</div>
                  </div>
                  <div className="featured-image-subtext">
                    <p className="featured-image-designation">{designation}</p>
                    <a href={link} target="_blank" rel="nofollow">
                      <div className="featured-image-designation">
                        See full article
                      </div>
                    </a>
                  </div>
                </div>
              </Col>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default Featured;
