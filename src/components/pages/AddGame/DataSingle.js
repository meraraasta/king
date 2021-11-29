import React, { useState } from "react";
import { Col, Form, Button } from "react-bootstrap";
import { db } from "../../../config/firebase";
import { collection, addDoc, doc, setDoc, updateDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddSingleGame = () => {
  const slot = [
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
  const [id, setID] = useState("");
  const [game, setGame] = useState("");
  const [time, setTime] = useState("");
  const [number, setNumber] = useState(null);

  const handlerAddGame = (e) => {
    e.preventDefault();
    const dbRef = doc(db, "singleGames", id);
    setGame(
      setDoc(dbRef, {
        id: Number(id),
        gameName: game,
        time: time,
        result: Number(number),
      }).then(() => {
        toast.success("Add succussfully.", { pauseOnHover: true });
      })
    );
  };
  const handlerUpdateGame = (e) => {
    e.preventDefault();
    e.preventDefault();
    const dbRef = doc(db, "singleGames", id);
    setGame(
      updateDoc(dbRef, {
        gameName: game,
        time: time,
        result: Number(number),
      })
        .then(() => {
          toast.success("Updated succussfully.", { pauseOnHover: true });
        })
        .catch((error) => {
          toast.error("Not updated. Try again later", +error, {
            pauseOnHover: true,
          });
        })
    );
  };

  return (
    <>
      <ToastContainer />
      <Col lg={2} md={2} sm={2} xs={12}>
        <Form.Group>
          <Form.Label className="CustomLabel">Game ID</Form.Label>
          <Form.Control
            type="number"
            placeholder="Game ID"
            onChange={(e) => setID(e.target.value)}
          />
        </Form.Group>
      </Col>
      <Col lg={4} md={4} sm={4} xs={12}>
        <Form.Group>
          <Form.Label className="CustomLabel">Add Game</Form.Label>
          <Form.Control
            type="text"
            placeholder="New Game Name"
            onChange={(e) => setGame(e.target.value)}
          />
        </Form.Group>
      </Col>
      <Col lg={4} md={4} sm={4} xs={12}>
        <Form.Group className="mb-3" controlId="time">
          <Form.Label className="CustomLabel">Slot Time</Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => setTime(e.target.value)}
          >
            <option>Select Time Slot</option>

            {slot.map((time, key) => {
              return (
                <option value={time.time} key={key}>
                  {time.time}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>
      </Col>
      <Col lg={2} md={2} sm={2} xs={12}>
        <Form.Group>
          <Form.Label className="CustomLabel">Result</Form.Label>
          <Form.Control
            type="number"
            placeholder="Result"
            onChange={(e) => setNumber(e.target.value)}
          />
        </Form.Group>
      </Col>
      <Col lg={4} md={4} sm={4} xs={12}>
        <Button onClick={handlerAddGame}>Add Single Game</Button>
      </Col>
      <Col lg={{ span: 4, offset: 4 }} md={4} sm={4} xs={12}>
        <Button onClick={handlerUpdateGame}>Update Single Game</Button>
      </Col>
    </>
  );
};

export default AddSingleGame;
