import React, { Component, Fragment } from "react";

import Cover from "../../Components/Cover";
import Rooms from "../../Components/Rooms";
import Gallery from "../../Components/Gallery";
import Inclusive from "../../Components/Inclusive";
import GoogleStaticMap from "../../Components/GoogleStaticMap";
import OtherProperties from "../../Components/OtherProperties";
import Footer from "../../Components/Footer";

class Building extends Component {
  state = {
    buildingData: {}
  };

  async componentDidMount() {
    const res = await fetch(
      `https://backend.grexter.in/buildings/33?include=location,amenities,landmarks,area,subarea`
    );
    const json = await res.json();
    this.setState({
      buildingData: json
    });
  }
  render() {
    const {
      address,
      images,
      name,
      id,
      location,
      description,
      layouts
    } = this.state.buildingData;

    // const { subLayouts } = layouts.subLayouts;

    console.log(address, images, name, id, location, description, layouts);

    return (
      <Fragment>
        <Cover name={name} description={description} />
        <Rooms layouts={layouts} />
        <Gallery images={images} />
        <Inclusive />
        <GoogleStaticMap address={address} location={location} />
        <OtherProperties />
        <Footer />
      </Fragment>
    );
  }
}

export default Building;
