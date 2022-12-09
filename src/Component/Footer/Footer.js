import { Button, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
// import styled from "styled-components";
import "./footer.scss";
import facebook from "../../Assets/img/facebook.svg";
import instagram from "../../Assets/img/instagram.svg";
import tweeter from "../../Assets/img/tweeter.svg";
// import { ThemeProvider } from "styled-components";
// import FooterStyled from "./FooterStyled";

// const FooterSection = styled.section`
//   padding: 80px 0;
// `;

const Footer = () => {
  //   const theme = {
  //     color: {
  //       heading: "red",
  //       bg: "aqua",
  //       textColor: "blue",
  //     },
  //     media: {
  //       mobile: "768px",
  //       tab: "992px",
  //     },
  //   };
  return (
    <>
      <div className="footer_section">
        <Container maxWidth="lg" className="footer_container">
          <Grid container spacing={4} className="footer_box">
            <Grid item xs={2} className="footer_link_box1">
              <h4>Discover</h4>
              <Button>Gift vouchers</Button>
              <Button>Referral programme </Button>
              <Button>Area coverage </Button>
              <Button>business clients </Button>
              <Button>Press Room </Button>
            </Grid>
            <Grid item xs={2} className="footer_link_box1">
              <h4>Company</h4>
              <Button>COVID-19</Button>
              <Button>About us </Button>
              <Button>Reviews </Button>
              <Button>Advice Hub </Button>
              <Button>Contact us </Button>
            </Grid>
            <Grid item xs={4} className="footer_link_box1">
              <h4>Terms & Policies</h4>

              <Button>Sustainability policy </Button>
              <Button>Privacy policy </Button>
              <Button>Website’s terms of use </Button>
              <Button>business clients </Button>
              <Button>Cookies policy </Button>
            </Grid>

            <Grid item xs={4} className="footer_link_box1">
              <h4>Join us on social media</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="footer_icons">
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={tweeter} alt="" />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="footer_bottom">
        © Copyright 2022. All Rights Reserved by{" "}
        <a href="bookadecorator.com">bookadecorator.com</a>
      </div>
    </>
  );
};

export default Footer;
