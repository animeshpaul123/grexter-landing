import React from "react";
import Backup from "../../static/images/backup.png";
import Bills from "../../static/images/bills.png";
import Cafe from "../../static/images/cafe.png";
import Cleaning from "../../static/images/cleaning.png";
import Furniture from "../../static/images/furniture.png";
import Gaming from "../../static/images/gaming.png";
import Security from "../../static/images/security.png";
import Internet from "../../static/images/internet.png";

import "./style.css";

const Inclusives = () => {
  const items = [
    {
      name: "24x7 Lift & Power Backup",
      img: Backup
    },
    {
      name: "All Bills Coverd",
      img: Bills
    },
    {
      name: "Cafetaria",
      img: Cafe
    },
    {
      name: "Regular House Cleaning",
      img: Cleaning
    },
    {
      name: "Fully Furnished",
      img: Furniture
    },
    {
      name: "Dedicated Gaming Zone",
      img: Gaming
    },
    {
      name: "Round-the-clock Security",
      img: Security
    },
    {
      name: "High Speed Internet",
      img: Internet
    }
  ];
  return (
    <div className="icons-wrapper d-flex justify-content-around">
      {items.map(item => {
        return (
          <div className="icon" key={item.name}>
            <img src={item.img} alt={item.img} className="img lazy" />
            <p className="text">{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Inclusives;
