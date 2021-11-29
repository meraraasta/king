import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="NoGutterContainer">
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          <div className="PageFooter">
            <h5>
              Purchase of lottery using this website is strictly prohabited in
              the state where lotteries are banned. You must be above 18 Years
              to play online lottery
            </h5>
            <p>©2021 ALL RIGHTS RESERVED. http://kalabhoot.com</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
