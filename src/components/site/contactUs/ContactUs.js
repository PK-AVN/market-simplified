import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons"
import React from "react";
import { Col, Nav, Row } from "react-bootstrap";

const ContactUs = () => {
  return (
    <>
      <section className="section-dark contact">
        <Row>
          <Col md={1} className="contact-icon">
            <FontAwesomeIcon icon={faPhone} />
          </Col>
          <Col md={3}>
            <p>Call Us:</p>
            <p>+91 7996300655</p>
            <p>Timings :</p>
            <p>Monday- Friday 8am to 6pm</p>
          </Col>
          <Col md={1} className="contact-icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </Col>
          <Col md={3}>
            <p>Email Us :</p>
            <p>infoweon11@gmail.com</p>
            <p>Available All days</p>
          </Col>
          <Col md={1} className="contact-icon">
            <FontAwesomeIcon icon={faGlobe} />
          </Col>
          <Col md={3}>
            <p>Virtual :</p>
            <p>www.weon.org.in</p>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default ContactUs;
