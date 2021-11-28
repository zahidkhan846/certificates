import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../../components/loading/Loading";
import styles from "./CertificateDetail.module.css";

function CertificateDetail() {
  const [doc, setDoc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://my-certificates-zahid-khan-default-rtdb.firebaseio.com/certificates/${id}.json`
      )
      .then((res) => {
        setDoc(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.response);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className={styles.loading}>
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.err}>
        <div>
          <h3>An error occured</h3>
          <p>Something went wrong!</p>
          <button
            onClick={() => {
              setError(null);
              window.location.href = "/";
            }}
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      <div className={styles.cImage}>
        <img src={doc.cUrl} alt={doc.cName} />
      </div>
      <div className={styles.text}>
        <div>
          <h4>Certificate Recipient</h4>
          <p>{doc.candidate}</p>
        </div>
        <div>
          <h4>Certificate Id</h4>
          <p>{doc.cId}</p>
        </div>
        <h4 className={styles.purple}>HTML and CSS</h4>
        <p>
          {doc.instructor} by {doc.insBrand}
        </p>
      </div>
    </div>
  );
}

export default CertificateDetail;
