import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Placements = () => {
    return (
        <>
            <section className="section-odd p-5">
                <h2 className="placement-main-text">Placements</h2>
                <p className="placement-sub-text">
                    Our job placement services connect talented individuals with rewarding career opportunities.
                    We specialize in matching skills, experience, and ambitions with employers seeking top talent for success
                </p>
                <Row>
                    <Col md={4}>
                        <Card className="placement-card">
                            <Card.Body>
                                <img style={{ width: '100%', height: 'auto' }} decoding="async" src="https://weon.org.in/wp-content/uploads/2023/09/happy-male-candidate-greeting-member-human-resource-team-job-interview-office.jpg" title="happy-male-candidate-greeting-member-human-resource-team-job-interview-office" alt="happy-male-candidate-greeting-member-human-resource-team-job-interview-office" loading="lazy"></img>
                                <p className="placement-card-main-text">
                                    Temporary & Permanent Job Placements
                                </p>
                                <p className="placement-card-sub-text">
                                    We assist with both temporary and permanent job placements, depending on the candidate’s needs and the employer’s requirements.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                    <Card className="placement-card">
                            <Card.Body>
                                <img style={{ width: '100%', height: 'auto' }} decoding="async" src="https://weon.org.in/wp-content/uploads/2023/09/company-representatives-reading-applicant-resume-hiring.jpg" title="company-representatives-reading-applicant-resume-hiring" alt="company-representatives-reading-applicant-resume-hiring" loading="lazy"></img>
                                <p className="placement-card-main-text">
                                    Resume Review and Optimization
                                </p>
                                <p className="placement-card-sub-text">
                                    Our expert team enhances your resume, spotlighting qualifications and skills, boosting the prospects of a successful immigration application through their expertise
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                    <Card className="placement-card">
                            <Card.Body>
                                <img style={{ width: '100%', height: 'auto' }} decoding="async" src="https://weon.org.in/wp-content/uploads/2023/09/business-people-working-using-technology-connect-with-others.jpg" title="business-people-working-using-technology-connect-with-others" alt="business-people-working-using-technology-connect-with-others" loading="lazy"></img>
                                <p className="placement-card-main-text">
                                    Networking Opportunities
                                </p>
                                <p className="placement-card-sub-text">
                                    We provide unique networking opportunities, connecting newcomers with professionals through our global network, fostering career growth and community integration.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default Placements