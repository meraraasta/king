import React from "react";
import { Container, Row, Col, Table, Form } from "react-bootstrap";

const Results = () => {
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
    <Container fluid className="NoGutterContainer">
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          <div className="PageHero">
            <h3 className="TextAlignCenter">Result History</h3>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 3, offset: 3 }} md={12} sm={12} xs={12}>
          <Form.Group className="mb-3" controlId="game">
            <Form.Label
              style={{
                textAlign: "left",
                fontSize: "21px",
                fontWeight: "bold",
                marginTop: "25px",
              }}
            >
              Game
            </Form.Label>
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
        <Col lg={3} md={12} sm={12} xs={12}>
          <Form.Group className="mb-3" controlId="date">
            <Form.Label
              style={{
                textAlign: "left",
                fontSize: "21px",
                fontWeight: "bold",
                marginTop: "25px",
              }}
            >
              Date
            </Form.Label>
            <input type="date" className="CustomDate" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 6, offset: 3 }} md={6} sm={12} xs="12">
          <Table bordered size="sm" className="CustomResultTable">
            <thead>
              <tr>
                <th>Date</th>
                <th>Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12:15 AM</td>
                <td>19</td>
              </tr>
              <tr>
                <td>12:30 AM</td>
                <td>61</td>
              </tr>
              <tr>
                <td>12:45 AM</td>
                <td>81</td>
              </tr>
              <tr>
                <td>1:00 AM</td>
                <td>11</td>
              </tr>
              <tr>
                <td>1:15 AM</td>
                <td>37</td>
              </tr>
              <tr>
                <td>1:30 AM</td>
                <td>56</td>
              </tr>
              <tr>
                <td>1:45 AM</td>
                <td>97</td>
              </tr>
              <tr>
                <td>2:00 AM</td>
                <td>89</td>
              </tr>
              <tr>
                <td>2:15 AM</td>
                <td>45</td>
              </tr>
              <tr>
                <td>2:30 AM</td>
                <td>60</td>
              </tr>
              <tr>
                <td>2:45 AM</td>
                <td>39</td>
              </tr>
              <tr>
                <td>3:00 AM</td>
                <td>26</td>
              </tr>
              <tr>
                <td>3:15 AM</td>
                <td>87</td>
              </tr>
              <tr>
                <td>3:30 AM</td>
                <td>16</td>
              </tr>
              <tr>
                <td>3:45 AM</td>
                <td>79</td>
              </tr>
              <tr>
                <td>3:00 AM</td>
                <td>56</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Results;
