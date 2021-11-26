import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <header>
      <div className="container">
        <div className={styles.headerWrapper}>
          <Link to="/" className={styles.logo}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#61dafb"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z" />
            </svg>
            <h3>Zahid | Certificates</h3>
          </Link>
          <nav>
            <ul>
              <li>
                <Link to="/">All Achivements</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
