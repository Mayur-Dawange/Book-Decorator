import React from "react";
import styled from "styled-components";
import { Container, Grid } from "@mui/material";
import banner from "../../Assets/img/banner.svg";
import "./banner.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const Title = styled.h1`
  font-size: 60px;
  color: #000;
  font-family: poppins;
  font-weight: 700;
  line-height: 70px;
`;
const Span = styled.span`
  color: #e41f24;
`;
const BannerImg = styled.img`
  width: 100%;
`;
const BannerTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Paragraph = styled.p`
  max-width: 440px;
  font-size: 20px;
  line-height: 30px;
`;
const UnorderedList = styled.ul`
  font-size: 20px;
  line-height: 30px;
  padding-left: 20px;
  margin-top: 20px;
`;

const BannerStyled = () => {
  return (
    <>
      <section className="banner_section">
        <Container maxWidth="lg" className="banner_container">
          <Grid container spacing={2} className="banner_box">
            <Grid item xs={6}>
              <BannerTitleBox>
                <Title className="banner_title">
                  <Span>House Decorations</Span> <br /> Made Affordable
                </Title>
                <Paragraph>
                  We provide our quality service in and around London. We have
                  the experience and knowledge to get the job done right the
                  first time.
                </Paragraph>
                <UnorderedList className="banner_list">
                  <li>High quality service at affordable prices</li>
                  <li>Free quotation and online booking</li>
                  <li>Transparent pricing</li>
                  <li>Save time, skip the stress, book now</li>
                </UnorderedList>
              </BannerTitleBox>
              <Box
                className="search_box"
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                {/* <img src={location} alt="" /> */}
                <TextField
                  id="outlined-basic"
                  label="Enter your postcode"
                  variant="outlined"
                  className="search_field"
                />
                <Button className="call_now_btn">Call Now</Button>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <div className="banner_img">
                <BannerImg src={banner}></BannerImg>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default BannerStyled;
