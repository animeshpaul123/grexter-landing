import React, { Component } from 'react';
import Backup from '../../static/images/backup.png';
import Bills from '../../static/images/bills.png';
import Cafe from '../../static/images/cafe.png';
import Cleaning from '../../static/images/cleaning.png';
import Furniture from '../../static/images/furniture.png';
import Gaming from '../../static/images/gaming.png';
import Security from '../../static/images/security.png';
import Internet from '../../static/images/internet.png';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import './style.css';

class Inclusives extends Component {
	items = [
		{
			name: '24x7 Lift & Power Backup',
			img: Backup
		},
		{
			name: 'All Bills Coverd',
			img: Bills
		},
		{
			name: 'Cafetaria',
			img: Cafe
		},
		{
			name: 'Regular House Cleaning',
			img: Cleaning
		},
		{
			name: 'Fully Furnished',
			img: Furniture
		},
		{
			name: 'Dedicated Gaming Zone',
			img: Gaming
		},
		{
			name: 'Round-the-clock Security',
			img: Security
		},
		{
			name: 'High Speed Internet',
			img: Internet
		}
	];
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
	render() {
		const settings = {
			className: 'center',
			centerMode: false,
			infinite: true,
			dots: false,
			lazyLoad: true,
			autoplay: false,
			autoplaySpeed: 2000,
			arrows: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			nextArrow: <this.NextArrow />,
			prevArrow: <this.PrevArrow />,

			responsive: [
				{
					breakpoint: 766,
					settings: {
						slidesToShow: 2,
						centerMode: true
					}
				}
			]
		};
		return (
			<React.Fragment>
				<div className="icons-wrapper justify-content-around d-none d-md-flex">
					{this.items.map((item) => {
						return (
							<div className="icon" key={item.name}>
								<img src={item.img} alt={item.img} className="img lazy" />
								<p className="text">{item.name}</p>
							</div>
						);
					})}
				</div>
				<div className="icons-wrapper-slick d-md-none">
					<Slider {...settings}>
						{this.items.map((item) => {
							return (
								<div className="icon" key={item.name}>
									<img src={item.img} alt={item.img} className="img lazy m-auto" />
									<p className="text text-center">{item.name}</p>
								</div>
							);
						})}
					</Slider>
				</div>
			</React.Fragment>
		);
	}
}

export default Inclusives;
