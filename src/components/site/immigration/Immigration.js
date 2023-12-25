import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Immigration = () => {
    return (
        <>
            <section className="section-one">
                <Card>
                    <Card.Body>
                        <Row>
                            <Col md={6}>
                                <p className="job-main-text">What is Immigration?</p>
                                <p className="job-sub-text">Immigration is the process of individuals relocating from one country to another, often for better opportunities, family reunification, or asylum, resulting in a change of permanent residence.
                                </p>
                            </Col>
                            <Col md={6}>
                            <img style={{width: '100%', height: 'auto'}} decoding="async" width="1024" height="683" src="https://weon.org.in/wp-content/uploads/2023/09/happy-male-candidate-greeting-member-human-resource-team-job-interview-office-1024x683.jpg" class="attachment-large size-large wp-image-271" alt="" srcset="https://weon.org.in/wp-content/uploads/2023/09/happy-male-candidate-greeting-member-human-resource-team-job-interview-office-1024x683.jpg 1024w, https://weon.org.in/wp-content/uploads/2023/09/happy-male-candidate-greeting-member-human-resource-team-job-interview-office-300x200.jpg 300w, https://weon.org.in/wp-content/uploads/2023/09/happy-male-candidate-greeting-member-human-resource-team-job-interview-office-768x512.jpg 768w, https://weon.org.in/wp-content/uploads/2023/09/elementor/thumbs/happy-male-candidate-greeting-member-human-resource-team-job-interview-office-qcsrm0rck79fquhop6sid04xf7n9b0684mv96xk9eo.jpg 600w, https://weon.org.in/wp-content/uploads/2023/09/happy-male-candidate-greeting-member-human-resource-team-job-interview-office.jpg 1500w" sizes="(max-width: 1024px) 100vw, 1024px"></img>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </section>
        </>
    )
}

export default Immigration