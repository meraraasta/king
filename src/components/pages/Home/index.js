import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Hero from "../Hero";
import Cards from "../Cards";
import BlackCards from "../BlackCards";
import Tables from "../Table";
import { db } from "../../../config/firebase";
import { collection, onSnapshot } from "firebase/firestore";
// import LuckyDraw from "../LuckyDraw";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dbRef = collection(db, "singleGames");
    onSnapshot(dbRef, (snapshot) => {
      let games = [];
      snapshot.docs.forEach((doc) => {
        games.push({ ...doc.data(), id: doc.id });
      });
      console.log("gamesss======", games);
      setData(games);
    });
  }, []);

  return (
    <>
      <Hero />
      <BlackCards />
      <Cards />
      <Tables />
      {/* <LuckyDraw data={props.data} /> */}
      <Container fluid className="NoGutterContainer">
        {data.map((data, key) => {
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
      </Container>
    </>
  );
};

export default Home;
