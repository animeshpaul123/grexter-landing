//node modules
import React from "react";
import { Row, Col } from "reactstrap";
import Router from "next/router";
import { FaSearch } from "react-icons/fa";

//components
import Menu from "../MenuIcon";
import Search from "../Search";

//styling
import "./style.css";

const redirect = page => {
  page
    ? (Router.push(page), scrollTo({ top: 0, behavior: "smooth" }))
    : scrollTo({ top: 0, behavior: "smooth" });
};

const FixedHeader = props => {
  const { page, searchicon } = props || "";
  return (
    <>
      <div className="grex-fixed-header animated fadeInDown">
        <Menu logoStyle={{ top: "25px" }} />
        <Row>
          <Col xs={{ size: 6 }}>
            <div className="logo">
              <img
                alt="grexter logo"
                src="/static/images/home/logo-white.png"
                className="fixed-class-logo"
                onClick={() => {
                  redirect("/");
                }}
              />
              <img
                alt="grexter logo"
                src="/static/images/home/community-logo-white.png"
                className="comunity-fixed-header"
                onClick={() => {
                  redirect("/community");
                }}
              />
            </div>
          </Col>
          <Col xs={{ size: 6 }}>
            {searchicon ? (
              <div className="header-search-icon-mob">
                <FaSearch
                  onClick={() => {
                    redirect();
                  }}
                  className="header-search-icon-mob"
                  size={32}
                  color="#f5c513"
                />
              </div>
            ) : null}
            <div className="search fixed-search">
              <Search page_type={page} />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default FixedHeader;
