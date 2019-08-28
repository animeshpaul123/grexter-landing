import React from "react";
import "./style.css";

const Cover = props => {
  // console.log('cover image', props.coverImg);
  const { images } = props;

  let coverImageSrc = [];
  let style;
  const defaultImage =
  "https://d2lb8po6ulqbmf.cloudfront.net/newassets/home_banner.jpg";
  if (images && images.length > 0) {
    coverImageSrc = images.find(img => {
      return img.is_cover_image === 1;
    });

    console.log("cover iamge .....................", coverImageSrc.url);
  }

  style = {
    background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${
      coverImageSrc.url ? coverImageSrc.url : defaultImage
    })`
  };

  return (
    <div className="container-fluid main clearfix o-0" style={style}>
      {props.children}
    </div>
  );
};

export default Cover;
