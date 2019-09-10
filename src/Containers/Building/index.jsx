import React, { Component, Fragment } from "react";
import LazyLoad from "react-lazyload";

import Cover from "../../Components/Cover";
import Rooms from "../../Components/Rooms";
import Inclusive from "../../Components/Inclusive";
import GoogleStaticMap from "../../Components/GoogleStaticMap";
import OtherProperties from "../../Components/OtherProperties";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

import LandingCover from "./LandingCover";
import Yellow2nut from "../../Components/Yellow2nut";

// css starts
import "./style.css";
import ErrorBoundary from "../ErrorBoundary";
import GalleryNew from "../../Components/GalleryNew";

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
    selectOptionsar: [],
    selectOption: "",
    loader: true,
    showFixedBtn: false
  };

  componentDidMount() {
    let params = window.location.search;
    const id = params.split("=")[1] || 25;
    this.getBuildingData(id);
  }

  getBuildingData = async id => {
    this.setState({
      loader: true
    });

    try {
      const res = await fetch(
        `https://backend.grexter.in/buildings/${id}?include=location,amenities,landmarks,area,subarea`
      );
      const buildingData = await res.json();

      const res1 = await fetch(
        `https://backend.grexter.in/nearby-buildings?include=location,landmarks,area,layouts,layout_prices,building_images&lon=${buildingData.location.longitude}&lat=${buildingData.location.latitude}`
      );

      let nearbyProperties = await res1.json();

      const selectOptionsar = [];

      nearbyProperties.forEach(data => {
        selectOptionsar.push({
          name: data.name,
          id: data.id
        });
      });

      nearbyProperties = nearbyProperties.slice(1, 4);
      this.setState({
        buildingData,
        nearbyProperties,
        selectOptionsar,
        loader: false
      });
      if (nearbyProperties.length) {
        window.setTimeout(() => this.setState({ showFixedBtn: true }), 3000);
      }
    } catch (err) {
      console.log(err.status);
    }
  };

  bookVisitClickHandler = async () => {
    await setTimeout(() => {
      this.setState({
        bookVisitClicked: true
      });
    }, 800);
    setTimeout(() => {
      this.setState({ bookVisitClicked: false });
    }, 810);
  };

  render() {
    const {
      nearbyProperties,
      bookVisitClicked,
      selectOptionsar,
      loader,
      showFixedBtn
    } = this.state;
    const {
      address,
      images,
      name,
      description,
      layouts = []
    } = this.state.buildingData;

    return loader ? (
      <div className="loader" />
    ) : (
      <Fragment>
        <Header />
        <Cover images={images}>
          <ErrorBoundary>
            <LandingCover
              name={name}
              desc={description}
              bookVisitClicked={bookVisitClicked}
              selectOptionsar={selectOptionsar}
              bookVisitClickHandler={this.bookVisitClickHandler}
              showFixedBtn={showFixedBtn}
            />
          </ErrorBoundary>
        </Cover>
        <Yellow2nut text="Rooms" />
        <LazyLoad>
          <Rooms
            layouts={layouts}
            bookVisitClickHandler={this.bookVisitClickHandler}
          />
        </LazyLoad>
        <LazyLoad>
          <Yellow2nut text="Inclusive" />
        </LazyLoad>

        <Inclusive />

        {images.length ? (
          <Fragment>
            <Yellow2nut text="Gallery" />
            <LazyLoad>
              <GalleryNew images={images} />
            </LazyLoad>
          </Fragment>
        ) : null}

        <Yellow2nut text="Address and Maps  " />
        <GoogleStaticMap address={address} name={name} />
        <Yellow2nut text="Other Properties" />
        <LazyLoad>
          <OtherProperties nearby={nearbyProperties} />
        </LazyLoad>
        <Footer {...this.state.footer} />
      </Fragment>
    );
  }
}

export default Building;
