import React from "react";
import { Button } from "@mui/material";
import styled from "styled-components";
import { Container, Grid } from "@mui/material";
import map from "../../Assets/img/map.svg";

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
const MapImg = styled.img`
  width: 60%;
  text-align: center;
  display: block;
  margin: auto;
`;
const HowDoWeTitleeBox = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;
const Paragraph = styled.p`
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 20px;
`;
const UnorderedList = styled.ul`
  font-size: 20px;
  line-height: 30px;
  padding-left: 20px;
  margin-top: 20px;
`;

const MapSection = () => {
  return (
    <>
      <section className="map_section">
        <Container maxWidth="lg" className="how_do_we_container">
          <Grid container spacing={2} className="how_do_we_box">
            <Grid item xs={6} className="how_do_right_box">
              <HowDoWeTitleeBox>
                <Title className="how_do_title">
                  <Span>Areas</Span> we cover
                </Title>
                <Paragraph>
                  We provide our quality service in and around London. We have
                  the experience and knowledge to get the job done right the
                  first time.
                </Paragraph>
                <Paragraph>
                  We know that painting your house can be a big investment.
                  That’s why we offer unfront transparent prices so you can get
                  a good idea of what the job will cost before we start. We also
                  offer a satisfaction guarantee so you can be confident that
                  you’re making a good investment.
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
            <Grid item xs={6}>
              <div className="map">
                <MapImg src={map}></MapImg>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default MapSection;
