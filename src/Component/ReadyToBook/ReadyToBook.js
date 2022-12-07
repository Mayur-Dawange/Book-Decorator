import React from "react";
import TextField from "@mui/material/TextField";
import { Button, Container } from "@mui/material";
import styled from "styled-components";
import "./readytobook.scss";

const Title = styled.h3`
  font-size: 36px;
  color: #e41f24;
  font-family: poppins;
  font-weight: 700;
  line-height: 50px;
  text-align: center;
`;
const ReadyBookSection = styled.section`
  padding: 60px 0;
  background: #fff6f6;
  text-align: center;
`;
const Paragraph = styled.p`
  padding: 20px 0;
  background: #fff6f6;
  text-align: center;
  line-height: 24px;
`;
// const SearchField = styled.input`
//   padding: 20px 0;
//   background: #fff6f6;
//   text-align: center;
//   line-height: 24px;
// `;
const ReadyToBook = () => {
  return (
    <>
      <ReadyBookSection className="ready_to_book_section">
        <Container className="ready_book_container" maxWidth="sm">
          <div className="ready_title">
            <Title>Ready to book with us?</Title>
          </div>
          <Paragraph className="ready_text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </Paragraph>
          <div className="rady_to_btn">
            <TextField
              id="outlined-basic"
              label="Enter your postcode"
              variant="outlined"
              className="search_field"
            />
            <Button className="book_now_btn">Book Now</Button>
          </div>
        </Container>
      </ReadyBookSection>
    </>
  );
};

export default ReadyToBook;
