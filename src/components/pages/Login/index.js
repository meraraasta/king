import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    let authToken = sessionStorage.getItem("token");
    if (authToken) {
      history.push("/admin/user/update");
    }
  }, []);

  const handlerLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        // ...
        sessionStorage.setItem(
          "token",
          userCredential._tokenResponse.refreshToken
        );
        history.push("/admin/user/update");
        console.log(userCredential);
        toast("Logged in succussfully.");
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        toast.error("Email and Passowrd is incorrect. Try again", {
          pauseOnHover: true,
        });
      });
  };
  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col lg={{ span: 4, offset: 4 }} md={12} sm={12} xs={12}>
          <h3 style={{ marginTop: "30px", marginBottom: "30px" }}>Login</h3>
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 4, offset: 4 }} md={6} sm={6} xs={12}>
          <Form.Group>
            <Form.Label className="CustomLabel">Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
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
            onClick={handlerLogin}
          >
            Login
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
