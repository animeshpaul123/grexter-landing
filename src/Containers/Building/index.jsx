import React, { Component, Fragment } from "react";

import Cover from "../../Components/Cover";
import Rooms from "../../Components/Rooms";
import Gallery from "../../Components/Gallery";
import Inclusive from "../../Components/Inclusive";
import GoogleStaticMap from "../../Components/GoogleStaticMap";
import OtherProperties from "../../Components/OtherProperties";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

import coverImg from "../../static/images/chill.jpg";
import LandingCover from "./LandingCover";
import Yellow2nut from "../../Components/Yellow2nut";

// css starts
import "./style.css";

class Building extends Component {
  state = {
    buildingData: {},
    nearbyProperties: {},
    footer: {
      logoLink: "https://grexter.in",
      phone: "8880968000",
      instagram: "https://www.instagram.com/grexter_living/",
      facebook: "https://www.facebook.com/grexterhousing/",
      linkedin: "https://www.linkedin.com/company/grexter"
    },
    bookVisitClicked: false,
    selectOptionsar: []
  };

  async componentWillMount() {
    let params = window.location.search;
    // let params = queryString.parse(url);
    const id = params.split("=")[1];
    console.log(id);
    let f = 35;
    const res = await fetch(
      `https://backend.grexter.in/buildings/${id}?include=location,amenities,landmarks,area,subarea`
    );
    const buildingData = await res.json();

    // const response = await fetch(
    //   `https://backend.grexter.in/nearby-buildings?include=location,landmarks,area,layouts,layout_prices,building_images&lon=&lat=`
    // );
    // const allBuildingsData = await response.json();
    // console.log(allBuildingsData);

    const res1 = await fetch(
      `https://backend.grexter.in/nearby-buildings?include=location,landmarks,area,layouts,layout_prices,building_images&lon=${buildingData.location.longitude}&lat=${buildingData.location.latitude}`
    );

    let nearbyProperties = await res1.json();

    const selectOptionsar = [];

    nearbyProperties.map(data => {
      selectOptionsar.push({
        name: data.name,
        id: data.id
      });
    });

    console.log(selectOptionsar);

    nearbyProperties = nearbyProperties.slice(1, 4);
    this.setState({ buildingData, nearbyProperties, selectOptionsar });
  }

  bookVisitClickHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      this.setState({
        bookVisitClicked: true
      });
    }, 800);
  };
  render() {
    const { nearbyProperties, bookVisitClicked, selectOptionsar } = this.state;
    const {
      address,
      images,
      name,
      id,
      location,
      description,
      layouts = []
    } = this.state.buildingData;
    const { logoLink } = this.state.footer;

    // const { subLayouts } = layouts.subLayouts;

    console.log(
      "address====",
      address,
      "images====",
      images,
      "name====",
      name,
      "id====",
      id,
      "location====",
      location,
      "description====",
      description,
      "layouts====",
      layouts
    );

    return (
      <Fragment>
        <Header />
        <Cover images={images}>
          <LandingCover
            name={name}
            desc={description}
            bookVisitClicked={bookVisitClicked}
            selectOptionsar={selectOptionsar}
          />
        </Cover>
        <Yellow2nut text="Rooms" />
        <Rooms
          layouts={layouts}
          bookVisitClickHandler={this.bookVisitClickHandler}
        />
        <Yellow2nut text="Inclusive" />
        <Inclusive />
        <Yellow2nut text="Address and Maps  " />
        <GoogleStaticMap address={address} location={location} />
        <Yellow2nut text="Other Properties" />
        <OtherProperties nearby={nearbyProperties} />
        <Footer {...this.state.footer} />
      </Fragment>
    );
  }
}

export default Building;
