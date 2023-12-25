import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons"
import React from "react";

const WidgetGrid = () => {
  return (
    <>
      <section className="section-odd">
        <div className="flex-container">
          <div className="wg-flex">
            <FontAwesomeIcon className="wg-font" icon={faUserGroup} />
            <h6>TRUST</h6>
            <p>Capturing the Trust and loyalty of our clients.
            </p>
          </div>
          <div className="wg-flex md">
            <FontAwesomeIcon className="wg-font" icon={faUserGroup} />
            <h6>PROMISE</h6>
            <p>Promise to consistently deliver at the highest level.
            </p>
          </div>
          <div className="wg-flex">
            <FontAwesomeIcon className="wg-font" icon={faUserGroup} />
            <h6>DELIVER</h6>
            <p>We will Deliver the exact results you need.
            </p>
          </div>
        </div>
      </section>
    </>

  );
};

export default WidgetGrid;
