import React from "react";
import { Link } from "react-router-dom";
import styles from "./Certificate.module.css";

function Certificate(props) {
  return (
    <Link
      to={`/certificate/${props.certificate.id}?certificateId=${props.certificate.cId}`}
    >
      <li className={styles.card}>
        <div className={styles.content}>
          <img
            className={styles.image}
            src={props.certificate.cUrl}
            alt={props.cName}
          />
          <div className={styles.text}>
            <p>{props.certificate.cName}</p>
            <small>
              <span>Certificate Id:</span> {props.certificate.cId}
            </small>
            <small>
              <span>Instructor:</span> {props.certificate.instructor} by{" "}
              {props.certificate.insBrand}
            </small>
            <small>
              <span>Provider:</span> {props.certificate.provider}
            </small>
          </div>
        </div>
      </li>
    </Link>
  );
}

export default Certificate;
