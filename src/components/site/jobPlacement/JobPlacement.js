import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const JobPlacement = () => {
    return (
        <>
            <section className="section-one">
                <Card>
                    <Card.Body>
                    <Row>
                    <Col md={6}>
                        <p className="job-main-text">What is Job Placement?</p>
                        <p className="job-sub-text">Job placement is the process of matching job seekers with suitable employment opportunities, ensuring a successful connection between individuals seeking work and employers offering job positions.</p>
                    </Col>
                    <Col md={6}>
                        <img decoding="async" style={{width: '100%', height: 'auto'}} width="1024" height="683" src="https://weon.org.in/wp-content/uploads/2023/09/friendly-partners-handshaking-group-meeting-thanking-successful-teamwork-1024x683.jpg" class="attachment-large size-large wp-image-242" alt="" srcset="https://weon.org.in/wp-content/uploads/2023/09/friendly-partners-handshaking-group-meeting-thanking-successful-teamwork-1024x683.jpg 1024w, https://weon.org.in/wp-content/uploads/2023/09/friendly-partners-handshaking-group-meeting-thanking-successful-teamwork-300x200.jpg 300w, https://weon.org.in/wp-content/uploads/2023/09/friendly-partners-handshaking-group-meeting-thanking-successful-teamwork-768x512.jpg 768w, https://weon.org.in/wp-content/uploads/2023/09/friendly-partners-handshaking-group-meeting-thanking-successful-teamwork-1536x1024.jpg 1536w, https://weon.org.in/wp-content/uploads/2023/09/friendly-partners-handshaking-group-meeting-thanking-successful-teamwork-2048x1365.jpg 2048w, https://weon.org.in/wp-content/uploads/2023/09/elementor/thumbs/friendly-partners-handshaking-group-meeting-thanking-successful-teamwork-scaled-qcslzozzh0aioidr58ch5k628evzgfy7b7lpdrjyqo.jpg 600w" sizes="(max-width: 1024px) 100vw, 1024px"></img>
                    </Col>
                </Row>
                    </Card.Body>
                </Card>
            </section>
        </>
    )
}

export default JobPlacement