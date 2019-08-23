import React from "react";

const SimpleMap = props => {
  const { markerData = {}, id, center } = props;
  const { lat, lng } = center || "";
  //console.log("map", id, center);
  // const lat_string = lat.toString();
  // const long_string = lng.toString();
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100%", width: "100%" }}>
      {id === 51 || id === 52 ? (
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyALm2_qqHb8Wy1q6lv-ytAJdutUx0JYSrU&q="${lat},${lng}"`}
          scrolling="no"
        />
      ) : (
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyALm2_qqHb8Wy1q6lv-ytAJdutUx0JYSrU&q=Grexter ${
            markerData.name
          }`}
          scrolling="no"
        />
      )}
    </div>
  );
};

export default SimpleMap;
