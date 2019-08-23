import React, { Component } from "react";
import Axios from "axios";

class KaptureCall extends Component {
  kapReqCall = (name, contact_number) => {
    const data = [
      {
        customer_name: name,
        phone: contact_number,
        email_id: "",
        message: "I am a customer"
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
          "Basic dGs1bW56Nmh4em1zaXdiNXhsY2U4ZndieXo0NjV5NXVhcnlmdXVveGg5YmZtNGRscnk="
      }
    })
      .then(response => response.status)
      .catch(err => console.warn(err));
  };
}

export default KaptureCall;
