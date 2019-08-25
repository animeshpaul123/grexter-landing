import React from "react";
import { Container, Row } from "reactstrap";
import RoomCard from "../Card";
import "./style.css";
// import moduleName from '../../static/images/'

const Rooms = props => {
  const { layouts } = props;
  const { sub_layouts = [] } = layouts[0] || {};

  let single_occupancy = [];
  let double_occupancy = [];
  let triple_occupancy = [];
  let four_occupancy = [];

  if (sub_layouts.length > 0) {
    sub_layouts.forEach(subLayout => {
      let price = "";
      let src = "";
      switch (subLayout.id) {
        case 1:
          price = subLayout.price || null;
          subLayout.images.forEach(image => {
            src = image.url || null;
          });
          single_occupancy.push(price, src, "Private");
          break;
        case 2:
          price = subLayout.price || null;

          subLayout.images.forEach(image => {
            src = image.url || null;
          });
          double_occupancy.push(price, src, "Shared");
          break;
        case 3:
          price = subLayout.price || null;
          subLayout.images.forEach(image => {
            src = image.url || null;
          });
          triple_occupancy.push(price, src, "Three Sharing");
          break;
        case 4:
          price = subLayout.price || null;
          subLayout.images.forEach(image => {
            src = image.url || null;
          });
          four_occupancy.push(price, src, "Four Sharing");
          break;

        default:
          single_occupancy = [];
          double_occupancy = [];
          triple_occupancy = [];
          four_occupancy = [];
          break;
      }
    });
  }

  const LayoutsArray = [
    single_occupancy,
    double_occupancy,
    triple_occupancy,
    four_occupancy
  ];

  const SubLayouts = LayoutsArray.map(sLayout => {
    return (
      <RoomCard
        key={sLayout[2]}
        name={sLayout[2]}
        src={sLayout[1]}
        price={sLayout[0]}
      />
    );
  });

  return (
    <Container>
      <Row>{SubLayouts}</Row>
    </Container>
  );
};

export default Rooms;
