import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Spinner,
  InputGroup,
} from "react-bootstrap";
import { useThemeHook } from "../GlobalComponents/ThemeProvider";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/high-res.css";
const Register = () => {
  const [loading, setLoading] = useState(false);
  const [theme] = useThemeHook();
  const [number, setNumber] = useState(null);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    const username = form.username.value;
    const password = form.password.value;
    const firstname = form.firstname.value;
    const lastname = form.firstname.value;
    const email = form.firstname.value;
    if (username && password && firstname && lastname && email && number) {
      setLoading(true);
      // API calling
      console.log("call api here");
      console.log(username, password, firstname, lastname, email, number);
    }
  };

  return (
    <Container className="py-5 mt-5">
      <Row className={"justify-content-center mt-5"}>
        <Col
          xs={11}
          sm={10}
          md={8}
          lg={4}
          className={`p-4 rounded ${
            theme ? "text-light bg-dark" : "text-black bg-light"
          }`}
        >
          <h1
            className={`text-center border-botton pb-3 ${
              theme ? "text-dark-primary" : "text-light-primary"
            }`}
          >
            Create account
          </h1>
          <Form>
            <Row>
              <Form.Group className="mb-3 col-lg-6">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  name="firstname"
                  type="text"
                  placeholder="First Name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  name="lastname"
                  type="text"
                  placeholder="Last Name"
                  required
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="E-mail"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="username"
                type="text"
                placeholder="Username"
                minLenfth={3}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mobile No.</Form.Label>
              <PhoneInput
                country={"in"}
                value={number}
                onChange={(phone) => setNumber(phone)}
                className="text-dark"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                minLenfth={3}
                required
              />
            </Form.Group>
            <Button
              type="submit"
              onClick={handleSubmit}
              className={`${
                theme ? "big-dark-primary text-black" : "bg-light-primary"
              } m-auto d-block`}
              disabled={loading}
              style={{ border: 0 }}
            >
              {loading ? (
                <>
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  &nbsp;loading...
                </>
              ) : (
                "Continue"
              )}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default Register;
