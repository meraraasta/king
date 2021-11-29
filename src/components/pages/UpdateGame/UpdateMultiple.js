import React from "react";
import { Col, Form, Button } from "react-bootstrap";

const MultipleGame = () => {
  const gameList = [
    { gameName: "BAHADURGARH (05:30 PM)" },
    { gameName: "BHARATPUR (09:15 AM)" },
    { gameName: "DARBANGA BIHAR (05:00 PM)" },
    { gameName: "DISAWER (05:00 AM)" },
    { gameName: "FARIDABAD (06:00 PM)" },
    { gameName: "GALI (11:00 AM)" },
    { gameName: "GHAZIABAD (09:00 PM)" },
    { gameName: "HAJI ALI (09:40 PM)" },
    { gameName: "HARIDWAR (02:00 PM" },
    { gameName: "KALA BHOOTH (03:00 PM)" },
    { gameName: "MAJIM VIP (01:00 PM)" },
    { gameName: "MALDA BENGAL (04:00 PM)" },
    { gameName: "PREM NAGAR (10:00 PM)" },
    { gameName: "RAJIV COLONY (04:15 PM)" },
    { gameName: "SARASWATI (08:00 AM)" },
    { gameName: "SHIVKASHI (07:20 PM)" },
    { gameName: "TOTA MAINA (12:00 PM)" },
    { gameName: "TUKLAKABAD (11:00 AM)" },
  ];
  return (
    <>
      <Col lg={6} md={6} sm={6} xs={12}>
        <Form.Group className="mb-3" controlId="game">
          <Form.Label className="CustomLabel">Game</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Select Game</option>
            {gameList.map((game, key) => {
              return (
                <option value={game.gameName} key={key}>
                  {game.gameName}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>
      </Col>
      <Col lg={6} md={6} sm={6} xs={12}>
        <Form.Group>
          <Form.Label className="CustomLabel">Result</Form.Label>
          <Form.Control type="number" placeholder="Result" />
        </Form.Group>
      </Col>

      <Col lg={12} md={12} sm={12} xs={12}>
        <Button>Current Update Game</Button>
      </Col>
    </>
  );
};

export default MultipleGame;
