import React from "react";
import style from "./IndiEvt.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const IndiEvt = ({ event, index }) => {
  const collapseId = `flush-collapse-${index}`;
  const headingId = `flush-heading-${index}`;

  return (
    <>
      <p className={style.TopDate}>{event.day}</p>
      <div
        className={`accordion accordion-flush ${style.Total}`}
        id="accordionFlushExample"
      >
        <div className={`accordion-item ${style.OneItem}`}>
          <h2 className={`accordion-header ${style.textAndbtn}`} id={headingId}>
            <button
              className={`accordion-button collapsed ${style.titleArea}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${collapseId}`}
              aria-expanded="false"
              aria-controls={collapseId}
            >
              {event.title}
            </button>
            <button
              type="button"
              class={`btn btn-outline-warning ${style.registerBtn}`}
            >
              Register
            </button>
          </h2>

          <div
            id={collapseId}
            className="accordion-collapse collapse"
            aria-labelledby={headingId}
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p>{event.description}</p>
              <p>
                <strong>Time:</strong> {event.time}
              </p>
              <p>
                <strong>Date:</strong> {event.day}
              </p>
            </div>
          </div>
        </div>
        <hr className={style.customHr} />
      </div>
    </>
  );
};

export default IndiEvt;
