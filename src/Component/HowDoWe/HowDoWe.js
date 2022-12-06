import React from "react";
import styled from "styled-components";
import { Container, Grid } from "@mui/material";
import how_do_we from "../../Assets/img/how_do_we.png";
import "./HowDoWe.scss";

import { Button } from "@mui/material";

const Title = styled.h2`
  font-size: 36px;
  color: #000;
  font-family: poppins;
  font-weight: 700;
  line-height: 50px;
`;
const Span = styled.span`
  color: #e41f24;
`;
const HowDoWeImg = styled.img`
  width: 100%;
`;
const HowDoWeTitleeBox = styled.div`
  display: flex;
  height: 100%;
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

const HowDoWe = () => {
  return (
    <>
      <section className="how_do_we_section">
        <Container maxWidth="lg" className="how_do_we_container">
          <Grid container spacing={2} className="how_do_we_box">
            <Grid item xs={6}>
              <div className="how_do_we_img">
                <HowDoWeImg src={how_do_we}></HowDoWeImg>
              </div>
            </Grid>
            <Grid item xs={6} className="how_do_right_box">
              <HowDoWeTitleeBox>
                <Title className="how_do_title">
                  <Span>How Do We Make Our</Span> <br /> Services The Best?
                </Title>
                <Paragraph>
                  We provide our quality service in and around London. We have
                  the experience and knowledge to get the job done right the
                  first time.
                </Paragraph>
                <UnorderedList className="how_do_we_list">
                  <li>High quality service at affordable prices</li>
                  <li>Free quotation and online booking</li>
                  <li>Transparent pricing</li>
                  <li>Save time, skip the stress, book now</li>
                </UnorderedList>
                <Button className="book_now_btn">Book Now</Button>
              </HowDoWeTitleeBox>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default HowDoWe;
