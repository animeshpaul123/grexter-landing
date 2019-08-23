import React from "react";
import { Row, Col } from "reactstrap";
import Link from "next/link";
import "./style.css";

const NewGrexterFooter = () => {
  return (
    <>
      <div>
        <div className="footer">
          <div className="container">
            <Row className="footer-section">
              <Col lg="5" md="12" className="footer-one">
                <div className="foot-logo">
                  <img
                    alt="grexter logo blue"
                    className="footer-logo"
                    src="/static/images/home/logo-blue.png"
                  />
                </div>
              </Col>
              <Col lg="4" sm="12" className="footer-two">
                <h5>Company Information</h5>
                <ul>
                  <li>
                    <Link>
                      <a href="/about-us" title="About Us">
                        About Us
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <a href="/contact-us" title="Contact Us">
                        Contact Us
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/property?lat=&long=">Our Spaces</Link>
                  </li>
                  <li>
                    <Link>
                      <a href="/faqs" title="FAQ's">
                        FAQs
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/community" title="Community">
                      Community
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://medium.com/@grexter_information"
                      target="_blank"
                      rel="nofollow"
                      title="Blog"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <Link>
                      <a
                        href="https://dashboard.grexter.in/dashboard/log-in"
                        target="_blank"
                        rel="nofollow"
                        title="Login"
                      >
                        Log In
                      </a>
                    </Link>
                  </li>
                </ul>
              </Col>

              <Col lg="3" sm="12" className="footer-four">
                <div className="single-fta">
                  <h5 className="fta-title">Contact Us</h5>
                  <ul className="fta-list">
                    <img
                      alt="phone icon"
                      className="tel"
                      src="/static/images/footer/tel.png"
                    />{" "}
                    <a href="tel:+918880968000" title="Phone">
                      (+91) 8880968000
                    </a>
                    <br />
                    <a href="mailto:support@grexter.in" title="Mail">
                      <img
                        alt="email icon"
                        className="tel"
                        src="/static/images/footer/mail.png"
                      />{" "}
                      support@grexter.in
                    </a>
                  </ul>
                </div>
                <div className="social-icons">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/grexterhousing/"
                    rel="nofollow"
                    title="Facebook"
                  >
                    <img
                      alt="facebook icon"
                      src="/static/images/footer/fb.png"
                    />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/grexter_living/"
                    rel="nofollow"
                    title="Instagram"
                  >
                    <img
                      alt="instagram icon"
                      src="/static/images/footer/insta.png"
                    />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/grexter"
                    rel="nofollow"
                    title="LinkedIn"
                  >
                    <img
                      alt="linkedin icon"
                      src="/static/images/footer/lnkd.png"
                    />
                  </a>
                </div>
              </Col>
            </Row>
            <div className="clearfix" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright-text">
          <p>© Copyright Grexter 2019. All Rights Reserved</p>
        </div>
        <div className="copyright-text">
          <p>
            {" "}
            <Link>
              <a href="/" title="Home">
                Home
              </a>
            </Link>{" "}
            |
            <Link>
              <a href="/terms-and-conditions" title="T&amp;C">
                Terms & Conditions
              </a>
            </Link>{" "}
            |
            <Link>
              <a href="/privacy-policy" title="Privacy Policy">
                Privacy Policy
              </a>
            </Link>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default NewGrexterFooter;
