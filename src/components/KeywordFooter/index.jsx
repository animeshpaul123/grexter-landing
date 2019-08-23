import React, { Component } from "react";
import { TiArrowDownThick, TiArrowUpThick } from "react-icons/ti";

import customdata from "../../data/combine.json";
import "./style.css";

class KeywordsFooter extends Component {
  constructor(props) {
    super(props);
    this.state = { showActive: false, activeTab: "Room" };
  }

  toggleShow = () => {
    this.setState(prevState => ({ showActive: !prevState.showActive }));
  };

  toggleTab = tab => {
    this.setState({ activeTab: tab });
  };

  render() {
    const { showActive, activeTab } = this.state;
    return (
      <div className="hf-main-container">
        <div className="footer-toggle-btn" onClick={this.toggleShow}>
          More Links{" "}
          {showActive ? (
            <TiArrowUpThick size={14} color="white" />
          ) : (
            <TiArrowDownThick size={14} color="white" />
          )}
        </div>

        <div className={showActive ? "hf-container" : "hf-container-hidden"}>
          <ul className="nav nav-pills mb-3 justify-content-center">
            {customdata.map((each, k) => {
              return (
                <li key={k} className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => {
                      this.toggleTab(each.title);
                    }}
                  >
                    {each.title + "s"}
                  </a>
                </li>
              );
            })}
          </ul>

          <div
            className={
              activeTab === "Room" ? "tab-cont" : "container tab-cont-hidden"
            }
          >
            <div className="row">
              {customdata[0].body.map((each, k) => {
                return (
                  <li
                    key={k}
                    itemscope
                    itemtype="https://schema.org/SiteNavigationElement"
                    className="in-links-nav col-md-2"
                  >
                    <a
                      className="in-links-nav"
                      href={each.link}
                      title={each.inTitle}
                      itemprop="url"
                    >
                      <span itemprop="name">{each.inTitle}</span>
                    </a>
                  </li>
                );
              })}
            </div>
          </div>

          <div
            className={
              activeTab === "Flat" ? "tab-cont" : "container tab-cont-hidden"
            }
          >
            <div className="row">
              {customdata[1].body.map((each, k) => {
                return (
                  <li
                    key={k}
                    itemscope
                    itemtype="https://schema.org/SiteNavigationElement"
                    className="in-links-nav col-md-2"
                  >
                    <a
                      className="in-links-nav"
                      href={each.link}
                      title={each.inTitle}
                      itemprop="url"
                    >
                      <span itemprop="name">{each.inTitle}</span>
                    </a>
                  </li>
                );
              })}
            </div>
          </div>

          <div
            className={
              activeTab === "House" ? "tab-cont" : "container tab-cont-hidden"
            }
          >
            <div className="row">
              {customdata[2].body.map((each, k) => {
                return (
                  <li
                    key={k}
                    itemscope
                    itemtype="https://schema.org/SiteNavigationElement"
                    className="in-links-nav col-md-2"
                  >
                    <a
                      className="in-links-nav"
                      href={each.link}
                      title={each.inTitle}
                      itemprop="url"
                    >
                      <span itemprop="name">{each.inTitle}</span>
                    </a>
                  </li>
                );
              })}
            </div>
          </div>

          <div
            className={
              activeTab === "PG" ? "tab-cont" : "container tab-cont-hidden"
            }
          >
            <div className="row">
              {customdata[3].body.map((each, k) => {
                return (
                  <li
                    key={k}
                    itemscope
                    itemtype="https://schema.org/SiteNavigationElement"
                    className="in-links-nav col-md-2"
                  >
                    <a
                      className="in-links-nav"
                      href={each.link}
                      title={each.inTitle}
                      itemprop="url"
                    >
                      <span itemprop="name">{each.inTitle}</span>
                    </a>
                  </li>
                );
              })}
            </div>
          </div>

          <div
            className={
              activeTab === "Apartment"
                ? "tab-cont"
                : "container tab-cont-hidden"
            }
          >
            <div className="row">
              {customdata[4].body.map((each, k) => {
                return (
                  <li
                    key={k}
                    itemscope
                    itemtype="https://schema.org/SiteNavigationElement"
                    className="in-links-nav col-md-2"
                  >
                    <a
                      className="in-links-nav"
                      href={each.link}
                      title={each.inTitle}
                      itemprop="url"
                    >
                      <span itemprop="name">{each.inTitle}</span>
                    </a>
                  </li>
                );
              })}
            </div>
          </div>

          <div
            className={
              activeTab === "Studio-Apartment"
                ? "tab-cont"
                : "container tab-cont-hidden"
            }
          >
            <div className="row">
              {customdata[5].body.map((each, k) => {
                return (
                  <li
                    key={k}
                    itemscope
                    itemtype="https://schema.org/SiteNavigationElement"
                    className="in-links-nav col-md-2"
                  >
                    <a
                      className="in-links-nav"
                      href={each.link}
                      title={each.inTitle}
                      itemprop="url"
                    >
                      <span itemprop="name">{each.inTitle}</span>
                    </a>
                  </li>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default KeywordsFooter;
