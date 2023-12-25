import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faStar } from "@fortawesome/free-solid-svg-icons"
import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const Testimonials = () => {
  return (
    <>
      <section className="section-even">
        <h2 className="testi-main-text">Testimonials</h2>
        <p className="testi-text">What our clients say</p>
        <Row>
          <Col md={4}>
            <Card className="testi-card one">
              <Card.Body>
                <p>"From day one, Weon gave their commitment to my case. Their rapid response and thorough guidance were truly commendable."
                </p>
                <Row>
                  <Col sm={2}>
                    <FontAwesomeIcon className="user-dp" icon={faCircleUser} />
                  </Col>
                  <Col sm={5}>
                    <p className="name-text">Shoba</p>
                    <p className="role-text">Nutrition Expert, Food Villa
                    </p>
                  </Col>
                  <Col sm={5}>
                    <FontAwesomeIcon className="fb-star" icon={faStar} />
                    <FontAwesomeIcon className="fb-star" icon={faStar} />
                    <FontAwesomeIcon className="fb-star" icon={faStar} />
                    <FontAwesomeIcon className="fb-star" icon={faStar} />
                    <FontAwesomeIcon className="fb-star" icon={faStar} />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="testi-card two">
              <Card.Body>
                <p>"From day one, Weon gave their commitment to my case. Their rapid response and thorough guidance were truly commendable."
                </p>
                <Row>
                  <Col sm={2}>
                    <FontAwesomeIcon className="user-dp" icon={faCircleUser} />
                  </Col>
                  <Col sm={5}>
                    <p className="name-text">Shoba</p>
                    <p className="role-text">Nutrition Expert, Food Villa
                    </p>
                  </Col>
                  <Col sm={5}>
                    <FontAwesomeIcon className="fb-star" icon={faStar} />
                    <FontAwesomeIcon className="fb-star" icon={faStar} />
                    <FontAwesomeIcon className="fb-star" icon={faStar} />
                    <FontAwesomeIcon className="fb-star" icon={faStar} />
                    <FontAwesomeIcon className="fb-star" icon={faStar} />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="testi-card three">
              <Card.Body>
                <p>"From day one, Weon gave their commitment to my case. Their rapid response and thorough guidance were truly commendable."
                </p>
                <Row>
                  <Col sm={2}>
                    <FontAwesomeIcon className="user-dp" icon={faCircleUser} />
                  </Col>
                  <Col sm={5}>
                    <p className="name-text">Shoba</p>
                    <p className="role-text">Nutrition Expert, Food Villa</p>
                  </Col>
                  <Col sm={5}>
                    <FontAwesomeIcon className="fb-star" icon={faStar} />
                    <FontAwesomeIcon className="fb-star" icon={faStar} />
                    <FontAwesomeIcon className="fb-star" icon={faStar} />
                    <FontAwesomeIcon className="fb-star" icon={faStar} />
                    <FontAwesomeIcon className="fb-star" icon={faStar} />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="testi-card four">
              <Card.Body>
                <p>"From day one, Weon gave their commitment to my case. Their rapid response and thorough guidance were truly commendable."
                </p>
                <Row>
                  <Col sm={2}>
                    <FontAwesomeIcon className="user-dp" icon={faCircleUser} />
                  </Col>
                  <Col sm={5}>
                    <p className="name-text">Shoba</p>
                    <p className="role-text">Nutrition Expert, Food Villa</p>
                  </Col>
                  <Col sm={5}>
                    <FontAwesomeIcon className="fb-star" icon={faStar} />
                    <FontAwesomeIcon className="fb-star" icon={faStar} />
                    <FontAwesomeIcon className="fb-star" icon={faStar} />
                    <FontAwesomeIcon className="fb-star" icon={faStar} />
                    <FontAwesomeIcon className="fb-star" icon={faStar} />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="testi-card five">
              <Card.Body>
                <p>"From day one, Weon gave their commitment to my case. Their rapid response and thorough guidance were truly commendable."
                </p>
                <Row>
                  <Col sm={2}>
                    <FontAwesomeIcon className="user-dp" icon={faCircleUser} />
                  </Col>
                  <Col sm={5}>
                    <p className="name-text">Shoba</p>
                    <p className="role-text">Nutrition Expert, Food Villa</p>
                  </Col>
                  <Col sm={5}>
                    <FontAwesomeIcon className="fb-star" icon={faStar} />
                    <FontAwesomeIcon className="fb-star" icon={faStar} />
                    <FontAwesomeIcon className="fb-star" icon={faStar} />
                    <FontAwesomeIcon className="fb-star" icon={faStar} />
                    <FontAwesomeIcon className="fb-star" icon={faStar} />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Testimonials;
