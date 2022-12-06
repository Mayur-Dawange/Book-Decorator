import { Container } from "@mui/material";
import React from "react";
import HowItWorkCard from "../HowItWorkCard/HowItWorkCard";
import "./HowItWorks.scss";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";

const HowItWorks = () => {
  return (
    <>
      <section className="howit_works_section">
        <Container className="howit_works_container">
          <div className="howit_work_top_box">
            <h2>
              <span> Here’s </span>How it Works
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <HowItWorkCard />
        </Container>
      </section>
    </>
  );
};

export default HowItWorks;
