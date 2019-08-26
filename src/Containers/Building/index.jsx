import React, { Component, Fragment } from 'react';

import Cover from '../../Components/Cover';
import Rooms from '../../Components/Rooms';
import Gallery from '../../Components/Gallery';
import Inclusive from '../../Components/Inclusive';
import GoogleStaticMap from '../../Components/GoogleStaticMap';
import OtherProperties from '../../Components/OtherProperties';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

import coverImg from '../../static/images/chill.jpg';
import LandingCover from './LandingCover';

// css starts
import './style.css';

class Building extends Component {
	state = {
		buildingData: {},
		footer: {
			logoLink: 'https://grexter.in',
			phone: '8880968000',
			instagram: 'https://www.instagram.com/grexter_living/',
			facebook: 'https://www.facebook.com/grexterhousing/',
			linkedin: 'https://www.linkedin.com/company/grexter'
		},
		cover: {
			coverImg: coverImg
		}
	};

	async componentDidMount() {
		const res = await fetch(
			`https://backend.grexter.in/buildings/33?include=location,amenities,landmarks,area,subarea`
		);
		const buildingData = await res.json();
		this.setState({ buildingData });
	}
	render() {
		const { address, images, name, id, location, description, layouts = [] } = this.state.buildingData;
		const { logoLink } = this.state.footer;

		// const { subLayouts } = layouts.subLayouts;

		console.log(
			'address====',
			address,
			'images====',
			images,
			'name====',
			name,
			'id====',
			id,
			'location====',
			location,
			'description====',
			description,
			'layouts====',
			layouts
		);

		return (
			<Fragment>
				<Header />
				<Cover {...this.state.cover}>
					<LandingCover />
				</Cover>
				<Rooms layouts={layouts} />
				<Gallery images={images} />
				<Inclusive />
				<GoogleStaticMap address={address} location={location} />
				<OtherProperties />
				<Footer {...this.state.footer} />
			</Fragment>
		);
	}
}

export default Building;
