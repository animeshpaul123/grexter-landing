import React, { Component } from "react";
import Slider from "react-slick";
import { LoadersArr2 } from "../Rooms/loaderhelper";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "./index.css";
import GalleryImg from "../Gallery/GalleryImg";

class GalleryNew extends Component {
  state = {
    mouseEnter: false,
    photoIndex: 0,
    isOpen: false
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
    const { mouseEnter, photoIndex, isOpen } = this.state;
    const { images = [] } = this.props;
    let style = {
      width: images.length <= 3 && "60%"
    };
    let slideToBeShown = 4;
    if (images.length <= 4) {
      slideToBeShown = images.length - 1;
    }
    const settings = {
      className: "center",
      centerMode: false,
      infinite: true,
      dots: true,
      lazyLoad: true,
      autoplay: false,
      autoplaySpeed: 2000,
      arrows: mouseEnter,
      speed: 500,
      slidesToShow: slideToBeShown,
      slidesToScroll: 1,
      nextArrow: <this.NextArrow />,
      prevArrow: <this.PrevArrow />,

      responsive: [
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 1,
            centerMode: true
          }
        }
      ]
    };
    const imagesArr = [];
    const gallery = images.length
      ? images.map((img, i) => {
          imagesArr.push(img.url);
          return (
            <GalleryImg
              key={img.id}
              sm={12}
              md={12}
              src={img.url}
              showModal={() => {
                this.setState({ isOpen: true, photoIndex: i });
              }}
            />
          );
        })
      : LoadersArr2.map(img => (
          <GalleryImg key={img.name} sm={12} md={3} src={img.src} />
        ));
    return (
      <React.Fragment>
        <div
          className="slider-container-gallery"
          onMouseEnter={this.showArrow}
          onMouseLeave={this.hideArrow}
          style={style}
        >
          <Slider {...settings}>{gallery}</Slider>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={imagesArr[photoIndex]}
            nextSrc={imagesArr[(photoIndex + 1) % imagesArr.length]}
            prevSrc={
              imagesArr[(photoIndex + imagesArr.length - 1) % imagesArr.length]
            }
            onCloseRequest={() => {
              this.setState({ isOpen: false });
            }}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex:
                  (photoIndex + imagesArr.length - 1) % imagesArr.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % imagesArr.length
              })
            }
          />
        )}
      </React.Fragment>
    );
  }
}

export default GalleryNew;
