import React, { useEffect } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import MultipleGame from "./Multiple";
import AddSingle from "./AddSingle";
import DataSingle from "./DataSingle";
import Test from "./Test";
import { Link, useHistory } from "react-router-dom";

const AddGame = () => {
  let history = useHistory();
  useEffect(() => {
    let authToken = sessionStorage.getItem("token");
    if (authToken) {
      history.push("/admin/user/add");
    }
    if (!authToken) {
      history.push("/");
    }
  }, []);
  return (
    <Container fluid className="NoGutterContainer">
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          <div className="PageHero">
            <h3 className="TextAlignCenter">Result History</h3>
            <Link to="/admin/user/update">Update</Link>
            <Link to="/results">Results</Link>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 6, offset: 3 }} md={12} sm={12} xs={12}>
          <Tabs
            defaultActiveKey="multiple"
            id="uncontrolled-tab-example"
            className="mb-3 CustomTab"
          >
            <Tab
              eventKey="multiple"
              title="Multiple Game"
              className="CustomTabTilte"
            >
              <Row>
                <MultipleGame />
              </Row>
            </Tab>
            <Tab
              eventKey="single"
              title="Single Game"
              className="CustomTabTilte"
            >
              <Row>
                {/* <SingleGame /> */}
                <Test />
              </Row>
            </Tab>
            <Tab
              eventKey="addSingle"
              title="Single Game +"
              className="CustomTabTilte"
            >
              <Row>
                <AddSingle />
              </Row>
            </Tab>
            <Tab
              eventKey="getSingle"
              title="All Game"
              className="CustomTabTilte"
            >
              <Row>
                <DataSingle />
              </Row>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default AddGame;
