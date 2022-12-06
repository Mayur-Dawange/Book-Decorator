import React from "react";
// import Container from "@mui/material";
import "./HowItWorkCard.scss";
import Ellipse from "../../Assets/img/Ellipse 6.png";
// import topLine from "../../Assets/img/top_curve.svg";
// import bottomLine from "../../Assets/img/bottom_curve.svg";

const HowItWorkCard = () => {
  return (
    <>
      <div className="cards">
        <div className="how_it_work_row">
          <div className="card_box">
            <img src={Ellipse} alt="" />
            <div className="cardtitle">
              <span>01</span>
              <h4>Enter Details</h4>
            </div>
            <div className="crad_text">
              Enter the details of your house and furniture to be painted and
              see the prices immediately
            </div>
            {/* <span className="top_line">
              <img src={topLine} alt="" />
            </span> */}
          </div>
          <div className="card_box">
            <img src={Ellipse} alt="" />
            <div className="cardtitle">
              <span>01</span>
              <h4>Enter Details</h4>
            </div>
            <div className="crad_text">
              Enter the details of your house and furniture to be painted and
              see the prices immediately
            </div>
          </div>
          <div className="card_box">
            <img src={Ellipse} alt="" />
            <div className="cardtitle">
              <span>03</span>
              <h4>Enter Details</h4>
            </div>
            <div className="crad_text">
              Enter the details of your house and furniture to be painted and
              see the prices immediately
            </div>
            {/* <span className="bottom_line">
              <img src={bottomLine} alt="" />
            </span> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorkCard;
