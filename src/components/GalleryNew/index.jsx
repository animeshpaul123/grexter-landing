import React, { Component } from 'react';
import Slider from 'react-slick';
import { LoadersArr2 } from '../Rooms/loaderhelper';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import './index.css';
import GalleryImg from '../Gallery/GalleryImg';

class GalleryNew extends Component {
	state = {
		mouseEnter: false
	};
	NextArrow = (props) => {
		const { onClick } = props;
		return (
			<div className="f-arrow-btn next-arrow-btn" onClick={onClick}>
				<FaArrowRight className="f-arrow-svg" />
			</div>
		);
	};
	PrevArrow = (props) => {
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
		const { images = [] } = this.props;
		let style = {
			width: images.length <= 3 && '60%'
		};
		let slideToBeShown = 4;
		if (images.length <= 4) {
			slideToBeShown = images.length - 1;
		}
		const settings = {
			className: 'center',
			centerMode: false,
			infinite: true,
			dots: true,
			lazyLoad: true,
			autoplay: true,
			autoplaySpeed: 2000,
			arrows: mouseEnter,
			speed: 500,
			slidesToShow: slideToBeShown,
			slidesToScroll: 1,
			nextArrow: <this.NextArrow />,
			prevArrow: <this.PrevArrow />
		};
		const gallery = images.length
			? images.map((img) => <GalleryImg key={img.id} sm={12} md={12} src={img.url} />)
			: LoadersArr2.map((img) => <GalleryImg key={img.name} sm={12} md={3} src={img.src} />);
		return (
			<div
				className="slider-container-gallery"
				onMouseEnter={this.showArrow}
				onMouseLeave={this.hideArrow}
				style={style}
			>
				<Slider {...settings}>{gallery}</Slider>
			</div>
		);
	}
}

export default GalleryNew;
