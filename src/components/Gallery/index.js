import React from "react";
import { Row } from "reactstrap";
import GalleryImg from "./GalleryImg";
import { LoadersArr2 } from "../Rooms/loaderhelper";
// import './index.css';

const Gallery = props => {
  const { images = [] } = props;
  let size = 3;
  if (images.length <= 2) {
    size = 6;
  } else if (images.length === 5) {
    size = 4;
  }
  const gallery = images.length
    ? images.map(img => (
        <GalleryImg key={img.id} sm={12} md={size} src={img.url} />
      ))
    : LoadersArr2.map(img => (
        <GalleryImg key={img.name} sm={12} md={3} src={img.src} />
      ));

  return (
    <Row
      className=" gallery-row d-md-flex justify-content-center"
      style={{ marginRight: 0, marginLeft: 0 }}
    >
      {gallery}
    </Row>
  );
};

export default Gallery;
