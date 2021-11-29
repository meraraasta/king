import React, { useEffect } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import MultipleGame from "./UpdateMultiple";
// import AddSingle from "./UpdateSingle";
import GameUpdate from "./GameUpdate";
import AddNewGame from "./AddNewGame";
import AddMultipleGame from "./AddMultipleGame";

import { Link, useHistory } from "react-router-dom";

const UpdateGame = () => {
  let history = useHistory();
  useEffect(() => {
    let authToken = sessionStorage.getItem("token");
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
            <Link to="/admin/user/add">Add</Link>
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
              title="Multiple"
              className="CustomTabTilte"
            >
              <Row>
                <MultipleGame />
              </Row>
            </Tab>
            <Tab
              eventKey="addMultipleNewGame"
              title="Multilple Add New"
              className="CustomTabTilte"
            >
              <Row>
                <AddMultipleGame />
              </Row>
            </Tab>
            {/* <Tab
              eventKey="addSingle"
              title="Single Game +"
              className="CustomTabTilte"
            >
              <Row>
                <AddSingle />
              </Row>
            </Tab> */}
            <Tab
              eventKey="updateGame"
              title="Single"
              className="CustomTabTilte"
            >
              <Row>
                <GameUpdate />
              </Row>
            </Tab>
            <Tab
              eventKey="addNewGame"
              title="Add New"
              className="CustomTabTilte"
            >
              <Row>
                <AddNewGame />
              </Row>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default UpdateGame;
