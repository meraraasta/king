import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email, password);

  const handlerRegister = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        // ...
        toast.success("Email registerd succussfully", { pauseOnHover: true });
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
        toast.error("Email already exists. Please check the mail.", {
          pauseOnHover: true,
        });
      });
  };
  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col lg={{ span: 4, offset: 4 }} md={12} sm={12} xs={12}>
          <h3 style={{ marginTop: "30px", marginBottom: "30px" }}>Register</h3>
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 4, offset: 4 }} md={6} sm={6} xs={12}>
          <Form.Group>
            <Form.Label className="CustomLabel">Email Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col lg={{ span: 4, offset: 4 }} md={6} sm={6} xs={12}>
          <Form.Group>
            <Form.Label className="CustomLabel">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col lg={{ span: 4, offset: 4 }} md={6} sm={6} xs={12}>
          <Button
            style={{ marginTop: "15px", width: "100%" }}
            onClick={handlerRegister}
          >
            Register
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
