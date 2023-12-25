import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePhone, faHandshake, faUser, faMedal } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ChooseUs = () => {
    return (
        <>
            <section className="section-dark">
                <h2>Why Choose Us?</h2>
                <p className='pb-3'>At Weon org, we understand that your career is a critical aspect of your life,
                    and we're here to help you achieve your professional goals.
                </p>
                <Row>
                    <Col md={6} className="mb-3">
                        <Row>
                            <Col sm={2} className="choose-us-col">
                                <FontAwesomeIcon icon={faSquarePhone} />
                            </Col>
                            <Col sm={10}>
                                <p className="choose-us-text">8/5 Support</p>
                                <p className="choose-us-sub-text">Reliable 8/5 support, available during regular business hours, ensures assistance and guidance on weekdays for your convenience and peace of mind.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6} className="mb-3">
                        <Row>
                            <Col sm={2} className="choose-us-col">
                                <FontAwesomeIcon icon={faUser} />
                            </Col>
                            <Col sm={10}>
                                <p className="choose-us-text">Personalized Approach
                                </p>
                                <p className="choose-us-sub-text">We believe in the power of personalization. Your career journey is unique, and we tailor our services to match your specific needs, skills, and career aspirations.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6} className="mb-3">
                        <Row>
                            <Col sm={2} className="choose-us-col">
                                <FontAwesomeIcon icon={faHandshake} />
                            </Col>
                            <Col sm={10}>
                                <p className="choose-us-text">Career Development Support</p>
                                <p className="choose-us-sub-text">Our commitment doesn't end at job placement. We offer ongoing support and resources to help you thrive in your new role.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6} className="mb-3">
                        <Row>
                            <Col sm={2} className="choose-us-col">
                                <FontAwesomeIcon icon={faMedal} />
                            </Col>
                            <Col sm={10}>
                                <p className="choose-us-text">Results-Driven
                                </p>
                                <p className="choose-us-sub-text">Our track record speaks for itself. We take pride in our ability to match candidates with positions where they can excel and grow.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default ChooseUs