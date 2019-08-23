import React, { Component } from "react";
import Axios from "axios";

class kaptureRequire extends Component {
  kapCall = (
    name,
    contact_number,
    message,
    email_id,
    expected_area,
    budget,
    shifting_date
  ) => {
    const data = [
      {
        customer_name: name,
        phone: contact_number,
        email_id: email_id,
        campaign_name: "",
        Budget: budget,
        "Expected Area": expected_area,
        "Expected Date": shifting_date
      }
    ];
    Axios({
      method: "post",
      url:
        "https://grexter.kapturecrm.com/add-update-enquiry-from-other-source.html",
      data: data,
      headers: {
        "Content-Type": "application/json;",
        Accept: "application/json",
        Authorization:
          "Basic MDE4NzBwMDh2aWpiOGo1enc1OTN3bG14azBuNnlwdDI1ZGs3aXI2c3dyODFzaGI4c2s="
      }
    })
      .then(response => response.status)
      .catch(err => console.warn(err));
  };
}

export default kaptureRequire;
