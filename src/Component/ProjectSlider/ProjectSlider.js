import React from "react";
import styled from "styled-components";
import "./ProjectSlider.scss";
import { Container, Grid } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../../Assets/img/slider1.png";
import slider2 from "../../Assets/img/slider2.png";

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerPadding: "40px",
  //   centerMode: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerPadding: "00px",
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerPadding: "00px",
        slidesToShow: 1,
      },
    },
  ],
  // centerMode: true,
};

const ProjectSection = styled.section`
  padding: 80px;
`;

const Title = styled.h2`
  font-size: 26px;
  color: #000;
  font-family: poppins;
  font-weight: 700;
  line-height: 40px;
`;
const Span = styled.span`
  color: #e41f24;
`;

const HowDoWeTitleeBox = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;
const Paragraph = styled.p`
  font-size: 18px;
  line-height: 25px;
  padding-right: 10px;
`;
const ProjectSlImg = styled.img`
  width: 100%;
`;

const ProjectSlider = () => {
  return (
    <>
      <ProjectSection className="project_section">
        <Container maxWidth="lg" className="project_container">
          <Grid container spacing={2} className="project_box">
            <Grid item xs={4} className="project_inner_box">
              <HowDoWeTitleeBox>
                <Title className="how_do_title">
                  <Span>500+ Projects</Span> <br /> all Over in Greater London
                </Title>
                <Paragraph>
                  We provide our quality service in and around London. We have
                  the experience and knowledge to get the job done right the
                  first time.
                </Paragraph>
              </HowDoWeTitleeBox>
            </Grid>
            <Grid item xs={8}>
              <Slider {...settings} className="project_slick">
                <div className="project_sl_box">
                  <div className="project_img">
                    <ProjectSlImg src={slider1} alt="ProjectSlImg" />
                    <div className="project_sl_text">
                      <p>Kitchen</p>
                      <p>140 project</p>
                    </div>
                  </div>
                </div>
                <div className="project_sl_box">
                  <div className="project_img">
                    <ProjectSlImg src={slider2} alt="ProjectSlImg" />
                    <div className="project_sl_text">
                      <p>Drawing Room</p>
                      <p>140 project</p>
                    </div>
                  </div>
                </div>
                <div className="project_sl_box">
                  <div className="project_img">
                    <ProjectSlImg src={slider1} alt="ProjectSlImg" />
                    <div className="project_sl_text">
                      <p>Outdoor</p>
                      <p>140 project</p>
                    </div>
                  </div>
                </div>
                <div className="project_sl_box">
                  <div className="project_img">
                    <ProjectSlImg src={slider2} alt="ProjectSlImg" />
                    <div className="project_sl_text">
                      <p>Lorem Ipsum is</p>
                      <p>140 project</p>
                    </div>
                  </div>
                </div>
              </Slider>
            </Grid>
          </Grid>
        </Container>
      </ProjectSection>
    </>
  );
};

export default ProjectSlider;
