import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Hero = () => {
  const data = [];
  return (
    <Container fluid className="NoGutterContainer">
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          <div className="PageHero">
            <p>
              गली हो या देसावर जोड़ी मिलेगी सिंगल कंपनी लाखों लोगों ने ज्वाइन की
              हुई है जो की काफी सालो से जुड़े है हमारे साथ हर महीने 40 से 50 लाख
              का प्रॉफिट होता है हमारे भाईयों का
            </p>
            <h5>गेम पास का प्रूफ देखने के लिए WhatApp करें</h5>
            <h3>सुहाना गुप्ता - सट्टा कंपनी CEO & MD</h3>
            <h1>
              <span className="fa fa-whatsapp BlinkText"></span> 08707349640{" "}
              <span className="fa fa-phone BlinkText"></span>
            </h1>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Hero;
