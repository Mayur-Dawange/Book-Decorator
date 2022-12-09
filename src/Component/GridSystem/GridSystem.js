import { Container } from "@mui/system";
import React from "react";
import "./GridSystem.scss";

const GridSystem = () => {
  return (
    <div>
      <h1>GridSystem</h1>
      <Container>
        <div className="box">
          <div className="item header">1 this is header</div>
          <div className="item">
            2 this is number Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Libero totam at ex sequi beatae debitis delectus facere
            excepturi itaque fugit? Optio fuga odio tenetur deleniti dolores
            libero? Eligendi incidunt sint pariatur laboriosam doloremque
            distinctio impedit reprehenderit expedita ratione, officiis, cumque
            laborum quod omnis itaque similique perspiciatis fugit porro
            cupiditate molestiae?
          </div>
          <div className="item">
            3 this is number Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Delectus expedita hic ut, obcaecati praesentium quo modi
            tempore mollitia, nam qui totam accusamus quas vel harum voluptas
            consequuntur eius, dolorem sunt?
          </div>
          <div className="item footer">4 this is footer</div>
        </div>
      </Container>
    </div>
  );
};

export default GridSystem;
