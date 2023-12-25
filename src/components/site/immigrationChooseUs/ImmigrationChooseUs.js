import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const ImmigrationChooseUs = () => {
  return (
    <>
        <section className="section-dark">
            <h2>Why Choose Us?
            </h2>
            <p className="mb-3">At weon org, we understand that embarking on an
            immigration journey is a life-changing decision.
            </p>
            <Row>
                <Col md={6}>
                    <Card className="immi-choose-card odd">
                        <Card.Body>
                        <p className="immi-main-text pb-2">Comprehensive Services
                        </p>
                        <p className="immi-sub-text">From visa applications to permanent residency and citizenship, we offer a wide range of immigration services to meet your requirements at every stage of your journey. You can rely on us for end-to-end support.
                        </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                <Card className="immi-choose-card even">
                        <Card.Body>
                        <p className="immi-main-text pb-2">Ethical and Transparent
                        </p>
                        <p className="immi-sub-text">Integrity is at the core of our services. We provide transparent and ethical guidance, ensuring that you understand the  entire  process, associated costs, and potential outcomes before you proceed
                        </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                <Card className="immi-choose-card odd">
                        <Card.Body>
                        <p className="immi-main-text pb-2">Personalized Guidance
                        </p>
                        <p className="immi-sub-text">We recognize that every immigration case is unique, and that’s why we provide tailored solutions. Our expert advisors work closely with you to understand your specific goals and
                        challenges.
                        </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                <Card className="immi-choose-card even">
                        <Card.Body>
                        <p className="immi-main-text pb-2">Legal Powers
                        </p>
                        <p className="immi-sub-text">Our immigration experts are up-to-date with the latest immigration laws and policies. We ensure that your application is meticulously prepared, minimizing the risk of delays or complications in the immigration process.
                        </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <div className="pb-5"></div>
        </section>
    </>
  )
}

export default ImmigrationChooseUs