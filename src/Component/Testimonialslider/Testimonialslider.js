import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testmSlider1 from "../../Assets/img/testm_1.png";
import { Container } from "@mui/material";
import "./testimonial.scss";

const TestimonialSection = styled.section`
  padding: 80px 0;
  color: #000;
  text-align: center;
`;
const Testmh2 = styled.h2`
  padding: 30px 0;
  font-size: 36px;
  line-height: 54px;
  text-align: center;
`;
const Span = styled.span`
  color: #e41f24;
`;

const Testimonialslider = () => {
  const settings = {
    arrow: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "00px",
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "00px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "00px",
          slidesToShow: 1,
        },
      },
    ],
    // centerMode: true,
  };
  return (
    <>
      <TestimonialSection className="testimonial_section">
        <Container>
          <Testmh2>
            <Span>Our Clients say</Span> it Best
          </Testmh2>
          <Slider {...settings} className="testimonial_slick">
            <div className="testm_box">
              <div className="slick_img">
                <img src={testmSlider1} alt="" />
              </div>
              <div className="testm_text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </div>
              <div className="testm_author">John Moran, London</div>
            </div>
            <div className="testm_box">
              <div className="slick_img">
                <img src={testmSlider1} alt="" />
              </div>
              <div className="testm_text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has
              </div>
              <div className="testm_author">John Moran, London</div>
            </div>
            <div className="testm_box">
              <div className="slick_img">
                <img src={testmSlider1} alt="" />
              </div>
              <div className="testm_text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been th
              </div>
              <div className="testm_author">John Moran, London</div>
            </div>
            <div className="testm_box">
              <div className="slick_img">
                <img src={testmSlider1} alt="" />
              </div>
              <div className="testm_text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since.
              </div>
              <div className="testm_author">John Moran, London</div>
            </div>
            <div className="testm_box">
              <div className="slick_img">
                <img src={testmSlider1} alt="" />
              </div>
              <div className="testm_text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since.
              </div>
              <div className="testm_author">John Moran, London</div>
            </div>
          </Slider>
        </Container>
      </TestimonialSection>
    </>
  );
};

export default Testimonialslider;
