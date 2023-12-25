import React, { useState } from "react";
import { Button, Col, Modal, Nav, Row } from "react-bootstrap";

const Footer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Nav className="footer-align">
        <Nav.Item style={{ flex: "100%" }}>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Nav.Link>
                Copyright © 2023 - Weon.org.in. Visit our{" "}
                <span onClick={handleShow} className="text-decoration-underline">
                  Privacy policy
                </span>
                &nbsp; to Learn more
              </Nav.Link>
            </Col>
          </Row>
        </Nav.Item>
      </Nav>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Privacy Policy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          At www.org.in, we take the privacy of our users seriously. This
          Privacy Policy document outlines the types of personal information we
          collect, how we use it, and the measures we take to safeguard your
          information when you use our services related to immigration, job
          placements, HR services, and permanent staffing. Information
          Collection and Use We may collect personal information from users
          visiting our website voluntarily. This information may include, but is
          not limited to, names, email addresses, contact numbers, addresses,
          educational and professional backgrounds, and other details necessary
          for immigration services, job placements, HR services, and staffing
          purposes. How We Use Collected Information • Immigration Services: The
          personal information collected may be used to assist in
          immigration-related processes, applications, and documentation. • Job
          Placements and Staffing: Information gathered may be used to match job
          seekers with potential employment opportunities and for internal
          staffing purposes. • HR Services: Information collected may be
          utilized to provide HR-related services, including but not limited to
          payroll, benefits administration, and employee management. Protection
          of Information We implement appropriate data collection, storage, and
          processing practices and security measures to protect against
          unauthorized access, alteration, disclosure, or destruction of your
          personal information, username, password, transaction information, and
          data stored on our site. Sharing Personal Information We do not sell,
          trade, or rent users' personal identification information to others.
          We may share generic aggregated demographic information not linked to
          any personal identification information regarding visitors and users
          with our business partners, trusted affiliates, and advertisers for
          the purposes outlined above. Third-Party Websites Users may find
          advertising or other content on our site that links to the sites and
          services of our partners, suppliers, advertisers,
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Footer;
