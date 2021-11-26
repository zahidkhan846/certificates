import React, { Fragment } from "react";
import Navbar from "../navbar/Navbar";

function Layout(props) {
  return (
    <Fragment>
      <Navbar />
      <main className="container">
        <div style={{ marginTop: "9vh" }}>{props.children}</div>
      </main>
    </Fragment>
  );
}

export default Layout;
