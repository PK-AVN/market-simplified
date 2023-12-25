import React from "react";
import { Accordion, Col, Row } from "react-bootstrap";

const FAQ = () => {
  return (
    <>
      <section className="section-dark">
        <h2 className="faq-main-text mb-5">FAQS</h2>
        <Row>
          <Col md={6}>
            <Row>
              <Col sm={12}>
                <Accordion className="faq-main">
                  <Accordion.Item>
                    <Accordion.Header>
                      What services does Weon offer?
                    </Accordion.Header>
                    <Accordion.Body>
                      Weon Immigration provides visas, work permits, talent acquisition, and compliance consulting, simplifying immigration and HR processes for individuals and businesses.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col sm={12}>
                <Accordion className="faq-main">
                  <Accordion.Item>
                    <Accordion.Header>
                    What is the cost of Weon services?
                    </Accordion.Header>
                    <Accordion.Body>
                    Our fees vary based on your immigration/HR needs. Transparent pricing discussed in the initial consultation. Our aim: competitive rates for top-notch services.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row>
              <Col sm={12}>
                <Accordion className="faq-main">
                  <Accordion.Item>
                    <Accordion.Header>
                    What categories of visas does Weon provide assistance for?
                    </Accordion.Header>
                    <Accordion.Body>
                    We can assist with a wide range of visa categories, including work visas, family reunification visas, student visas, investor visas, and more. Our team of experts is well-versed in the requirements for each type of visa.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col sm={12}>
                <Accordion className="faq-main">
                  <Accordion.Item>
                    <Accordion.Header>
                      What is the cost of Weon services?In which countries does Weon offer immigration support
                    </Accordion.Header>
                    <Accordion.Body>
                    We provide global immigration services, specializing in the immigration regulations of countries such as the US, Canada, Australia, the UK, and numerous others, leveraging our extensive expertise.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>

    </>
  );
};

export default FAQ;
