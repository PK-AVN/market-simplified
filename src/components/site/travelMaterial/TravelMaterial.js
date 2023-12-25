import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faUserTie, faGlobe, faArrowsLeftRight, faPlane, faPassport } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

const TravelMaterial = () => {
    return (
        <>
            <section className="section-dark">
                <Row>
                    <Col md={2}>
                        <FontAwesomeIcon className="tm-icon" icon={faGraduationCap} />
                        <p className="tm-text">Student Visa</p>
                    </Col>
                    <Col md={2}>
                        <FontAwesomeIcon className="tm-icon" icon={faUserTie} />
                        <p className="tm-text">Work Permit</p>
                    </Col>
                    <Col md={2}>
                        <FontAwesomeIcon className="tm-icon" icon={faGlobe} />
                        <p className="tm-text">Immigration</p>
                    </Col>
                    <Col md={2}>
                        <FontAwesomeIcon className="tm-icon" icon={faArrowsLeftRight} />
                        <p className="tm-text">Visitor visa</p>
                    </Col>
                    <Col md={2}>
                        <FontAwesomeIcon className="tm-icon" icon={faPlane} />
                        <p className="tm-text">Air ticket</p>
                    </Col>
                    <Col md={2}>
                        <FontAwesomeIcon className="tm-icon" icon={faPassport} />
                        <p className="tm-text">Passport</p>
                    </Col>
                </Row>
            </section>

        </>
    )
}

export default TravelMaterial