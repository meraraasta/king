import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const BlackCards = () => {
  return (
    <Container fluid className="NoGutterContainer">
      <Row>
        <Col>
          <div className="BlackCards">
            <h1>
              DISAWER <span className="BlinkText">72</span>
            </h1>
          </div>
        </Col>
        <Col>
          <div className="BlackCards">
            <h1>
              HAJI ALI <span className="BlinkText">98</span>
            </h1>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default BlackCards;
