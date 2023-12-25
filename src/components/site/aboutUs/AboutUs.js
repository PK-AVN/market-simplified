import React from 'react'
import { Col, Row } from 'react-bootstrap'

const AboutUs = () => {
    return (
        <>
            <section className="section-even about-us">
                <Row>
                    <Col md={8}>
                        <p className="about-us-heading">About Us</p>
                        <p className="about-us-main">MISSION
                        </p>
                        <p className="about-us-sub">To empower global journeys through seamless immigration solutions. Our mission is to simplify the path to new horizons, offering expert guidance, and fostering a welcoming world for all.
                        </p>
                        <p className="about-us-main">VISION
                        </p>
                        <p className="about-us-sub">Envisioning a world without borders, where every individual can pursue their global aspirations with ease. Our vision is to be the premier platform that transforms immigration into a seamless, inclusive, and enriching experience for all.
                        </p>
                        <p className="about-us-main">GOALS
                        </p>
                        <p className="about-us-sub">Empower individuals with comprehensive immigration resources, fostering trust through transparency and expert guidance, while continually enhancing user experience for seamless global journeys.
                        </p>
                        <p className="about-us-main">CORE VALUES
                        </p>
                        <p className="about-us-sub">Guided by integrity, expertise, and a commitment to diversity, we empower individuals worldwide with accurate information, fostering trust and inclusivity in their immigration journeys.
                        </p>
                    </Col>
                    <Col md={4}>
                        <img style={{ width: '100%', height: 'auto' }} decoding="async" src="https://weon.org.in/wp-content/uploads/2023/09/rear-view-hispanic-young-woman-man-looking-countries-globe-while-planning-their-trip-abroad-with-travel-agent.jpg" title="rear-view-hispanic-young-woman-man-looking-countries-globe-while-planning-their-trip-abroad-with-travel-agent" alt="rear-view-hispanic-young-woman-man-looking-countries-globe-while-planning-their-trip-abroad-with-travel-agent" loading="lazy"></img>
                        <p className="about-us-main">ACHIEVEMENTS
                        </p>
                        <p className="about-us-sub">Over a decade of expertise has led to a 98% visa approval rate, making us a trusted partner in countless successful immigration journeys worldwide, fueled by a passion for simplifying the process and expanding horizons
                        </p>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default AboutUs