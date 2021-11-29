import React, { useState } from "react";
import { Col, Form, Button } from "react-bootstrap";
import LuckyDraw from "../LuckyDraw";

const SingleGame = () => {
  const vipTime = [
    { time: "09:00 AM" },
    { time: "09:30 AM" },

    { time: "10:00 AM" },
    { time: "10:30 AM" },

    { time: "11:00 AM" },
    { time: "11:30 AM" },

    { time: "12:00 AM" },
    { time: "12:30 AM" },

    { time: "01:00 PM" },
    { time: "01:30 PM" },

    { time: "02:00 PM" },
    { time: "03:00 PM" },

    { time: "03:30 PM" },
    { time: "04:00 PM" },

    { time: "04:30 PM" },
    { time: "05:00 PM" },
  ];
  const luckyTime = [
    { time: "09:00 AM" },
    { time: "09:15 AM" },
    { time: "09:30 AM" },
    { time: "09:45 AM" },

    { time: "10:00 AM" },
    { time: "10:15 AM" },
    { time: "10:30 AM" },
    { time: "10:45 AM" },

    { time: "11:00 AM" },
    { time: "11:15 AM" },
    { time: "11:30 AM" },
    { time: "11:45 AM" },

    { time: "12:00 AM" },
    { time: "12:15 AM" },
    { time: "12:30 AM" },
    { time: "12:45 AM" },

    { time: "01:00 PM" },
    { time: "01:15 PM" },
    { time: "01:30 PM" },
    { time: "01:45 PM" },

    { time: "02:00 PM" },
    { time: "02:15 PM" },
    { time: "02:30 PM" },
    { time: "02:45 PM" },

    { time: "03:00 PM" },
    { time: "03:15 PM" },
    { time: "03:30 PM" },
    { time: "03:45 PM" },

    { time: "04:00 PM" },
    { time: "04:15 PM" },
    { time: "04:30 PM" },
    { time: "05:00 PM" },
  ];
  const [game, setGame] = useState("Mujim VIP");
  const [time, setTime] = useState("time");
  const [number, setNumber] = useState("Wait");

  const [vip, setVip] = useState({
    game: "Mujim VIP",
    time: "",
    number: number,
  });
  const [lucky, setLucky] = useState({
    game: "Lucky Draw",
    time: "",
    number: number,
  });

  const currentUpdateGame = (e) => {
    e.preventDefault();
    if (game === "Mujim VIP") {
      setVip({ game: game, time: time, number: number });
    } else {
      setLucky({ game: game, time: time, number: number });
    }
  };

  // console.log("VIP", vip.number);
  // console.log("Lucky", lucky.number);
  return (
    <>
      <Col lg={4} md={4} sm={4} xs={12}>
        <Form.Group className="mb-3" controlId="game">
          <Form.Label className="CustomLabel">Game</Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => setGame(e.target.value)}
          >
            <option>Select Game</option>
            <option value="Mujim VIP">Mujim VIP</option>
            <option value="Lucky Draw">Lucky Draw</option>
          </Form.Select>
        </Form.Group>
      </Col>

      {game === "Mujim VIP" ? (
        <>
          <Col lg={4} md={4} sm={4} xs={12}>
            <Form.Group className="mb-3" controlId="time">
              <Form.Label className="CustomLabel">Slot Time</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setTime(e.target.value)}
              >
                <option>Select Slot Time</option>
                {vipTime.map((time, key) => {
                  return (
                    <option value={time.time} key={key}>
                      {time.time}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col lg={4} md={4} sm={4} xs={12}>
            <Form.Group>
              <Form.Label className="CustomLabel">Result</Form.Label>
              <Form.Control
                type="number"
                placeholder="Result"
                onChange={(e) => setNumber(e.target.value)}
              />
            </Form.Group>
          </Col>
        </>
      ) : (
        <>
          <Col lg={4} md={4} sm={4} xs={12}>
            <Form.Group className="mb-3" controlId="time">
              <Form.Label className="CustomLabel">Slot Time</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setTime(e.target.value)}
              >
                <option>Select Slot Time</option>

                {luckyTime.map((time, key) => {
                  return (
                    <option value={time.time} key={key}>
                      {time.time}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col lg={4} md={4} sm={4} xs={12}>
            <Form.Group>
              <Form.Label className="CustomLabel">Result</Form.Label>
              <Form.Control
                type="number"
                placeholder="Result"
                onChange={(e) => setNumber(e.target.value)}
              />
            </Form.Group>
          </Col>
        </>
      )}

      <Col lg={12} md={12} sm={12} xs={12}>
        <Button onClick={currentUpdateGame}>Current Update Game</Button>
        {/* <LuckyDraw vip={vip} lucky={lucky} /> */}
      </Col>
    </>
  );
};

export default SingleGame;
