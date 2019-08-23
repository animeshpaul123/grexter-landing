import React, { Component } from "react";
import SearchComponent from "./autocomplete";

class Search extends Component {
  state = {
    place: {}
  };

  showPlaceDetails = place => {
    this.setState({ place });
  };

  render() {
    const { page_type, className } = this.props || "";
    return (
      <div>
        <SearchComponent
          onPlaceChanged={this.showPlaceDetails}
          page={page_type}
          classCustom={className}
        />
      </div>
    );
  }
}

export default Search;
