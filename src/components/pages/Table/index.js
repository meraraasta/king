import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
const TableData = () => {
  const multipleGameData = [
    {
      name: "avc",
      data: [
        { gameName: "Bahadurgarh", slot: "05:30 PM", result: "10" },
        { gameName: "Bharatpur", slot: "09:15 AM", result: "20" },
        { gameName: "Darbanga Bihar", slot: "05:00 PM", result: "30" },
        { gameName: "Disawer", slot: "05:00 AM", result: "40" },
        { gameName: "Faridabad", slot: "06:00 PM", result: "50" },
        { gameName: "Gali", slot: "11:10 AM", result: "60" },
        { gameName: "Haji Ali", slot: "09:40 PM", result: "70" },
        { gameName: "Haridwar", slot: "02:00 PM", result: "80" },
        { gameName: "Kala bhooth", slot: "03:00 PM", result: "90" },
        { gameName: "Majim VIP", slot: "01:00 PM", result: "91" },
        { gameName: "Malda bengal", slot: "04:00 PM", result: "23" },
        { gameName: "Prem Nagar", slot: "10:30 AM", result: "27" },
        { gameName: "Rajiv Colony", slot: "05:30 PM", result: "30" },
        { gameName: "Saraswati", slot: "08:00 PM", result: "29" },
        { gameName: "Shivkashi", slot: "07:20 PM", result: "55" },
        { gameName: "Saraswati", slot: "05:30 PM", result: "89" },
        { gameName: "Tota Maina", slot: "12:PM PM", result: "56" },
        { gameName: "Tuklakabad", slot: "11:30 AM", result: "65" },
      ],
    },
    {
      name: "xyz",
      data: [
        { gameName: "Bahadurgarh", slot: "05:30 PM", result: "40" },
        { gameName: "Bharatpur", slot: "09:15 AM", result: "50" },
        { gameName: "Darbanga Bihar", slot: "05:00 PM", result: "33" },
        { gameName: "Disawer", slot: "05:00 AM", result: "41" },
        { gameName: "Faridabad", slot: "06:00 PM", result: "63" },
        { gameName: "Gali", slot: "11:10 AM", result: "98" },
        { gameName: "Haji Ali", slot: "09:40 PM", result: "56" },
        { gameName: "Haridwar", slot: "02:00 PM", result: "76" },
        { gameName: "Kala bhooth", slot: "03:00 PM", result: "34" },
        { gameName: "Majim VIP", slot: "01:00 PM", result: "71" },
        { gameName: "Malda bengal", slot: "04:00 PM", result: "43" },
        { gameName: "Prem Nagar", slot: "10:30 AM", result: "54" },
        { gameName: "Rajiv Colony", slot: "05:30 PM", result: "11" },
        { gameName: "Saraswati", slot: "08:00 PM", result: "43" },
        { gameName: "Shivkashi", slot: "07:20 PM", result: "65" },
        { gameName: "Saraswati", slot: "05:30 PM", result: "89" },
        { gameName: "Tota Maina", slot: "12:PM PM", result: "06" },
        { gameName: "Tuklakabad", slot: "11:30 AM", result: "85" },
      ],
    },
  ];
  console.log(multipleGameData);
  // console.log(multipleGameData.data[0].gameName);
  return (
    <Container fluid className="NoGutterContainer">
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          <div className="PageHeader">
            <h1>Results</h1>
          </div>
        </Col>
        <Col lg={6} md={6} sm={12} xs="12">
          <Table bordered size="sm" className="CustomTable">
            <thead>
              {multipleGameData.map((data, key) => {
                return (
                  <tr>
                    <th>date</th>
                    {data.data.map((name) => {
                      return <th>{name.gameName}</th>;
                    })}
                  </tr>
                );
              })}
            </thead>
            <tbody>
              {multipleGameData.map((data, key) => {
                console.log("++++", data);
                return (
                  <tr>
                    <td>date</td>
                    {data.data.map((name) => {
                      return <td>{name.result}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
        <p>LINE</p>
        <Col lg={6} md={6} sm={12} xs="12">
          <Table bordered size="sm" className="CustomTable">
            <thead>
              <tr>
                <th>Date</th>
                <th>Bahadurgarh</th>
                <th>Bharatpur</th>
                <th>Darbanga Bihar</th>
                <th>Disawer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01 Nov</td>
                <td>12</td>
                <td>15</td>
                <td>45</td>
                <td>15</td>
              </tr>
              <tr>
                <td>02 Nov</td>
                <td>12</td>
                <td>15</td>
                <td>45</td>
                <td>15</td>
              </tr>
              <tr>
                <td>03 Nov</td>
                <td>12</td>
                <td>15</td>
                <td>45</td>
                <td>15</td>
              </tr>
              <tr>
                <td>04 Nov</td>
                <td>12</td>
                <td>15</td>
                <td>15</td>
                <td>15</td>
              </tr>
              <tr>
                <td>Nov 05</td>
                <td>12</td>
                <td>15</td>
                <td>15</td>
                <td>15</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col lg={6} md={6} sm={12} xs="12">
          <Table bordered size="sm" className="CustomTable">
            <thead>
              <tr>
                <th>Date</th>
                <th>Haji Ali</th>
                <th>Haridwar</th>
                <th>Kala bhooth</th>
                <th>Majim VIP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01 Nov</td>
                <td>12</td>
                <td>15</td>
                <td>45</td>
                <td>15</td>
              </tr>
              <tr>
                <td>02 Nov</td>
                <td>12</td>
                <td>15</td>
                <td>45</td>
                <td>15</td>
              </tr>
              <tr>
                <td>03 Nov</td>
                <td>12</td>
                <td>15</td>
                <td>45</td>
                <td>15</td>
              </tr>
              <tr>
                <td>04 Nov</td>
                <td>12</td>
                <td>15</td>
                <td>15</td>
                <td>15</td>
              </tr>
              <tr>
                <td>05 Nov</td>
                <td>12</td>
                <td>15</td>
                <td>15</td>
                <td>15</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col lg={6} md={6} sm={12} xs="12">
          <Table bordered size="sm" className="CustomTable">
            <thead>
              <tr>
                <th>Date</th>
                <th>Haridwar</th>
                <th>Kala bhooth</th>
                <th> Majim VIP</th>
                <th>Malda bengal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01 Nov</td>
                <td>12</td>
                <td>15</td>
                <td>45</td>
                <td>15</td>
              </tr>
              <tr>
                <td>02 Nov</td>
                <td>12</td>
                <td>15</td>
                <td>45</td>
                <td>15</td>
              </tr>
              <tr>
                <td>03 Nov</td>
                <td>12</td>
                <td>15</td>
                <td>45</td>
                <td>15</td>
              </tr>
              <tr>
                <td>04 Nov </td>
                <td>12</td>
                <td>15</td>
                <td>15</td>
                <td>15</td>
              </tr>
              <tr>
                <td>05 Nov</td>
                <td>12</td>
                <td>15</td>
                <td>15</td>
                <td>15</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col lg={6} md={6} sm={12} xs="12">
          <Table bordered size="sm" className="CustomTable">
            <thead>
              <tr>
                <th>Date</th>
                <th>Prem Nagar</th>
                <th>Rajiv Colony</th>
                <th>Saraswati</th>
                <th>Shivkashi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01 Nov</td>
                <td>12</td>
                <td>15</td>
                <td>45</td>
                <td>15</td>
              </tr>
              <tr>
                <td>02 Nov</td>
                <td>12</td>
                <td>15</td>
                <td>45</td>
                <td>15</td>
              </tr>
              <tr>
                <td>03 Nov</td>
                <td>12</td>
                <td>15</td>
                <td>45</td>
                <td>15</td>
              </tr>
              <tr>
                <td>04 Nov</td>
                <td>12</td>
                <td>15</td>
                <td>15</td>
                <td>15</td>
              </tr>
              <tr>
                <td>05 Nov</td>
                <td>12</td>
                <td>15</td>
                <td>15</td>
                <td>15</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col lg={6} md={6} sm={12} xs="12">
          <Table bordered size="sm" className="CustomTable">
            <thead>
              <tr>
                <th>Date</th>
                <th>Tota Maina</th>
                <th>Tuklakabad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01 Nov</td>
                <td>12</td>
                <td>15</td>
              </tr>
              <tr>
                <td>02 Nov</td>
                <td>12</td>
                <td>15</td>
              </tr>
              <tr>
                <td>03 Nov</td>
                <td>12</td>
                <td>15</td>
              </tr>
              <tr>
                <td>04 Nov</td>
                <td>12</td>
                <td>15</td>
              </tr>
              <tr>
                <td>05 Nov</td>
                <td>12</td>
                <td>15</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default TableData;
