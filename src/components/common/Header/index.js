import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { getAuth, signOut } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  let history = useHistory();
  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        sessionStorage.removeItem("token");
        history.push("/");
      })
      .catch((error) => {
        // An error happened.
        toast.error("Something went wrong.", {
          pauseOnHover: true,
        });
      });
  };
  return (
    <Navbar bg="dark" variant="dark">
      <ToastContainer />
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="https://i1.pnghost.com/18/9/15/pngdb-vampire-horror-youtube-clip-art-png-c67CF0bB0Pt8702ySGaXusBgU_t.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          <strong> Kaala Bhoot</strong>
        </Navbar.Brand>
        <Nav>
          <Nav.Link eventKey={2} href="/results">
            <Button className="">Results</Button>
          </Nav.Link>
          {/* {history.location.pathname === "/admin/user/login" && ()}*/}
          {/* <Nav.Link eventKey={2} href="/admin/user/add">
            <Button className="">Add</Button>
          </Nav.Link> */}

          {/* <Nav.Link eventKey={2} href="/admin/user/register">
            <Button className="">Register</Button>
          </Nav.Link> */}

          <Nav.Link eventKey={2} href="/admin/user/login">
            <Button className="">Login</Button>
          </Nav.Link>
          {history.location.pathname === "/admin/user/update" && (
            <Button className="" onClick={logout}>
              Logout
            </Button>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Header;
