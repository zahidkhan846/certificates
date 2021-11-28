import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../../components/loading/Loading";
import styles from "./CertificateDetail.module.css";

function CertificateDetail() {
  const [doc, setDoc] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const getSingleDoc = async (cId) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://my-certificates-zahid-khan-default-rtdb.firebaseio.com/certificates/${cId}.json`
      );
      setDoc(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error.response``);
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleDoc(id);
  }, [id]);

  if (loading) {
    return (
      <div className={styles.loading}>
        <Loading />
      </div>
    );
  }

  return (
    <div>
      {!loading && doc && (
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
      )}
    </div>
  );
}

export default CertificateDetail;
