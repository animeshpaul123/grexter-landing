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
    url: "",
    buildingData: {},
    nearbyProperties: {},
    landmarkToShow: 0,
    footer: {
      logoLink: "https://grexter.in",
      phone: "8880968000",
      instagram: "https://www.instagram.com/grexter_living/",
      facebook: "https://www.facebook.com/grexterhousing/",
      linkedin: "https://www.linkedin.com/company/grexter"
    },
    bookVisitClicked: false,
    loader: true
  };

  getAllUrlParams(url) {
    let queryString = url ? url.split("?")[1] : window.location.search.slice(1);

    let obj = {};

    if (queryString) {
      queryString = queryString.split("#")[0];

      let arr = queryString.split("&");

      for (var i = 0; i < arr.length; i++) {
        let a = arr[i].split("=");
        

        let paramName = a[0];
        let paramValue = typeof a[1] === "undefined" ? true : a[1];

        paramName = paramName.toLowerCase();
        if (typeof paramValue === "string")
          paramValue = paramValue.toLowerCase();

        if (paramName.match(/\[(\d+)?\]$/)) {
          let key = paramName.replace(/\[(\d+)?\]/, "");
          if (!obj[key]) obj[key] = [];

          if (paramName.match(/\[\d+\]$/)) {
            let index = /\[(\d+)\]/.exec(paramName)[1];
            obj[key][index] = paramValue;
          } else {
            obj[key].push(paramValue);
          }
        } else {
          if (!obj[paramName]) {
            obj[paramName] = paramValue;
          } else if (obj[paramName] && typeof obj[paramName] === "string") {
            obj[paramName] = [obj[paramName]];
            obj[paramName].push(paramValue);
          } else {
            obj[paramName].push(paramValue);
          }
        }
      }
    }
    return obj;
  }
  componentDidMount() {
    // let params = window.location.search;
    // console.log(window.location.href);

    // const id = params.split("=")[1] || 25;

    let url = window.location.href;

    this.setState({ url, landmarkToShow: this.getAllUrlParams(url).landmark });
    this.getBuildingData(this.getAllUrlParams(url).id || 42);

    if (this.state.nearbyProperties.length > 0) {
      setTimeout(() => {
        this.setState({
          showFixedBtn: true
        });
      }, 3000);
    }
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

      nearbyProperties = nearbyProperties.slice(1, 4);
      this.setState({
        buildingData,
        nearbyProperties,
        // selectOptionsar,
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
      // selectOptionsar,
      landmarkToShow,
      loader,
      showFixedBtn
    } = this.state;
    const {
      address,
      images,
      name,
      description,
      landmarks,
      location,
      area,
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
              area={area}
              name={name}
              desc={description}
              bookVisitClicked={bookVisitClicked}
              landmarks={landmarks}
              landmarkToShow={landmarkToShow}
              showFixedBtn={showFixedBtn}
              bookVisitClickHandler={this.bookVisitClickHandler}
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

        <Yellow2nut text="Address and Maps" />
        <GoogleStaticMap address={address} name={name} location={location} />
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
