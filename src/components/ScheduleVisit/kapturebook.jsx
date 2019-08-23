import React, { Component } from "react";
import Axios from "axios";

class KaptureBook extends Component {
  typeofroom = sub_layout_id => {
    if (sub_layout_id == 1) {
      return "private";
    } else return "shared";
  };
  kapBook = (
    buildingdata,
    name,
    contact_number,
    date_of_visit,
    time_of_visit,
    sub_layout_id,
    email_id
  ) => {
    const { operational_managers } = buildingdata || {};
    const data = [
      {
        enquiry_id: "",
        customer_name: name,
        phone: contact_number,
        assign_emp_name: (operational_managers[0] || "").name,
        email_id: email_id,
        campaign_name: "Website",
        action: "SVS",
        product_details: [
          {
            product_name: buildingdata.name,
            product_type: "",
            rate: "",
            quantity: "1",
            prod_attr3: this.typeofroom(sub_layout_id)
          }
        ],
        site_visit_scheduled: [
          {
            visit_date: date_of_visit,
            sales_manager: (operational_managers[0] || "").name,
            time_slot: time_of_visit
          }
        ]
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
          "Basic d3Nmd3FzM3d6M3hqZ2l2c2FvZnI5d242eDhlMm5jeWJscXh4endtNjMxMDl3cHRkcno="
      }
    })
      .then(response => response.status)
      .catch(err => console.warn(err));
  };
}

export default KaptureBook;
