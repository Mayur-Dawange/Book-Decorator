import React from "react";
import "./Assets/scss/main.scss";
import Home from "./Component/Home/Home";
import Layout from "./Component/Layout/Layout";

const App = () => {
  return (
    <>
      <Layout>
        <Home />
      </Layout>
    </>
  );
};

export default App;
