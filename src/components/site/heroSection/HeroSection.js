import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";

const HeroSection = () => {
  return (
    <>
      <section>
        <Carousel>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src="http://weon.org.in/wp-content/uploads/2023/09/full-shot-travel-concept-with-landmarks.jpg"></img>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src="http://weon.org.in/wp-content/uploads/2023/09/group-three-modern-architects-e1695842159290.jpg"></img>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src="http://weon.org.in/wp-content/uploads/2023/09/bussiness-people-working-team-office-1-scaled-e1695842248460.jpg"></img>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src="http://weon.org.in/wp-content/uploads/2023/09/business-meeting-office-1-scaled-e1695842174668.jpg"></img>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src="http://weon.org.in/wp-content/uploads/2023/09/travel-concept-with-landmarks-scaled-e1695842302223.jpg"></img>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default HeroSection;
