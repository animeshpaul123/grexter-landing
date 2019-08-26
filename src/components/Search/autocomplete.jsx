//node modules
import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";
import { FaSearch } from "react-icons/fa";

//styling
import "./style.css";

class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
    this.location = {};
    this.state = {
      location: {
        lat: null,
        long: null
      },
      windowWidth: null
    };
  }

  componentDidMount() {
    this.setState({ windowWidth: window.innerWidth });
    if (document) {
      try {
        var bangaloreBounds = new google.maps.LatLngBounds(
          new google.maps.LatLng(12.864162, 77.43861),
          new google.maps.LatLng(13.139807, 77.711895)
        );
        this.autocomplete = new google.maps.places.Autocomplete(
          this.autocompleteInput.current,
          { bounds: bangaloreBounds, strictBounds: true }
        );
        this.autocomplete.addListener("place_changed", this.handlePlaceChanged);
      } catch (err) {
        console.log(err);
      }
    }
  }

  handlePlaceChanged = () => {
    const { onPlaceChanged } = this.props;
    const place = this.autocomplete.getPlace();
    onPlaceChanged(place);
    this.navigateproperty(place);
  };

  navigateproperty = place => {
    if (place.geometry == undefined) {
      Router.push("/property?lat=12.9279232&long=77.62710779999998");
    } else {
      this.redirectPage(place);
      const { location } = this.state;
      const { lat, long } = location;
      Router.push(`/property?lat=${lat}&long=${long}`).then(this.scrollPage());
    }
  };

  scrollPage = () => {
    const { page } = this.props;
    if (page === "PROPERTY") {
      window.scrollTo(0, 450);
    } else window.scrollTo(0, 0);
  };

  redirectPage = place => {
    this.setState({
      location: {
        lat: place.geometry.location.lat(),
        long: place.geometry.location.lng()
      }
    });
  };

  render() {
    const { location, windowWidth } = this.state;
    const { style, classCustom } = this.props;
    const { lat, long } = location;
    return (
      <div className="search-container">
        <input
          type="text"
          ref={this.autocompleteInput}
          placeholder="Where do you want to stay in Bangalore?"
          className={
            classCustom ? "search-input " + classCustom : "search-input"
          }
          onChange={this.inputText}
          style={style}
        />
        {lat === null && long === null ? (
          <button className="search-button">
            {windowWidth > 576 ? "SEARCH" : <FaSearch />}
          </button>
        ) : (
          <Link
            href={{ pathname: "/property", query: { lat: lat, long: long } }}
          >
            <button className="search-button">SEARCH</button>
          </Link>
        )}
      </div>
    );
  }
}

export default SearchComponent;
