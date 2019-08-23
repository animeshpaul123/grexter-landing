import React from "react";
import "./style.css";

const CustomMarker = props => {
  const { data } = props;
  const queryname = `Grexter ${data.name}`;

  let googlelink = "";
  googlelink = `https://www.google.com/maps/search/${queryname}`;

  return (
    <div className="arrow_box">
      <div className="map-building-name">{data.name}</div>
      <div className="map-area-name">
        {(data.area || {}).display_name || ""}
      </div>
      <div className="map-sub-area-name">
        Near {(data.landmarks[0] || {}).name || {}}
      </div>
      <div>
        <span>
          <img
            alt="direction icon"
            src="/static/images/icondirection.png"
            className="direction-logo"
          />
        </span>
        <a target="_blank" className="google-link" href={googlelink}>
          open in google maps
        </a>
      </div>
    </div>
  );
};

export default CustomMarker;
