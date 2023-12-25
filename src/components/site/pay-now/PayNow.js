import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import ReactCreditCards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

const PayNow = () => {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  const handleSubmit = (e) => {
    console.log(e, "log");
  };

  return (
    <div className="container-fluid mt-3">
      <ReactCreditCards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <div className="mt-3">
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <form>
              <div className="mb-3">
                <input
                  type="number"
                  name="number"
                  className="form-control"
                  placeholder="Card Number"
                  value={state.number}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  required
                />
              </div>
              <div className="row">
                <div className="col-6 mb-3">
                  <input
                    type="number"
                    name="expiry"
                    className="form-control"
                    placeholder="Valid Thru"
                    pattern="\d\d/\d\d"
                    value={state.expiry}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    required
                  />
                </div>
                <div className="col-6 mb-3">
                  <input
                    type="number"
                    name="cvc"
                    className="form-control"
                    placeholder="CVC"
                    pattern="\d{3,4}"
                    value={state.cvc}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    required
                  />
                </div>
              </div>
              <div className="d-grid mb-3">
                <button
                  className="btn btn-dark"
                  type="button"
                  onClick={handleSubmit}
                >
                  Confirm
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default PayNow;
