import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import ClayPot from "../../../images/clayPot.png";

const LuckyDraw = (props) => {
  // console.log(props);

  return (
    <Container fluid className="NoGutterContainer">
      {props.data.map((data, key) => {
        return (
          <Row key={key}>
            <Col lg={12} md={12} sm={12} xs={12}>
              <div className="BlackCards">
                <h1>
                  {data.gameName}
                  <i>( {data.time} )</i>
                  <span className="color BlinkText">{data.result}</span>
                </h1>
              </div>
            </Col>
          </Row>
        );
      })}

      {/* <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          <div className="BlackCards">
            <h1>
              {props.game}
              <i>( {props.time} )</i>
              <span className="color BlinkText">{props.number}</span>
            </h1>
            <Image src={ClayPot} className="CustomImg" />
          </div>
        </Col>
      </Row> */}
    </Container>
  );
};
export default LuckyDraw;

{
  /* <Container fluid className="NoGutterContainer">
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          <div className="BlackCards">
            <h1>
              {props.vip.game}
              <i>( {props.vip.time} )</i>
              <span className="color BlinkText">{props.vip.number}</span>
            </h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          <div className="BlackCards">
            <h1>
              {props.lucky.game}
              <i>( {props.lucky.time} )</i>
              <span className="color BlinkText">{props.lucky.number}</span>
            </h1>
            <Image src={ClayPot} className="CustomImg" />
          </div>
        </Col>
      </Row>
    </Container> */
}
