import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import CertificateDetail from "./pages/certDetail/CertificateDetail";
import Home from "./pages/home/Home";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="certificate/:id" element={<CertificateDetail />} />
      </Routes>
    </Layout>
  );
}

export default App;
