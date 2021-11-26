import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

import Certificate from "../../components/certificate/Certificate";
import Hero from "../../components/hero/Hero";

import styles from "./Home.module.css";
import Loading from "../../components/loading/Loading";

function Home() {
  const [loading, setLoading] = useState(false);
  const [allCertificates, setAllCertificates] = useState([]);

  const getAllCertificates = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://my-certificates-zahid-khan-default-rtdb.firebaseio.com/certificates.json"
      );
      if (res.data) {
        let allCerts = [];
        for (let key in res.data) {
          if (res.data.hasOwnProperty(key)) {
            allCerts.push({ ...res.data[key], id: key });
          }
        }
        setAllCertificates(allCerts);
      }
      setLoading(false);
    } catch (error) {
      console.log(error.response);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllCertificates();
  }, []);

  if (loading) {
    return (
      <div className={styles.loading}>
        <Loading />
      </div>
    );
  }

  return (
    <Fragment>
      <Hero />
      <h2 className={styles.heading}>
        Skills i have earned<span>.</span>
      </h2>
      <div className={styles.underline}></div>
      <ul className="mt-10">
        {allCertificates.length > 0 &&
          allCertificates.map((certificate) => (
            <Certificate key={certificate.id} certificate={certificate} />
          ))}
      </ul>
    </Fragment>
  );
}

export default Home;
