import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import firebase from '../../firebase';

const Login = () => {
  const [getUsername, setUsername] = useState('');
  const [getPassword, setPassword] = useState('');
  const [getUserLogin, setUserLogin] = useState(true);

  const handleUsernameOnChange = (e) => {
    setUsername(e.target.value);
    setUserLogin(true);
  }

  const handlePasswordOnChange = (e) => {
    setPassword(e.target.value);
    setUserLogin(true);
  }

  let navigate = useNavigate();
  const handleLogin = () => {
    const userRef = firebase.database().ref('users');
    if (getUsername) {
      userRef.child(getUsername).get().then((snapshot) => {
        if (snapshot.exists()) {
          if (snapshot.val().password === getPassword) {
            localStorage.setItem("username", getUsername);
            localStorage.setItem("login", true)
            navigate('/');
          } else {
            setUserLogin(false);
          }
        } else {
          setUserLogin(false);
        }
      });
    }
  }

  return (
    <Container fluid>
      <Row className="justify-content-md-center mt-5">
        <div className="text-center m-3">
          <h1>Login</h1>
        </div>
        <Col xs="12" md="5" xl="4">
          <Form.Group as={Row} className="mb-3">
            <Form.Label column xs="3">
              Username
            </Form.Label>
            <Col xs="9">
              <Form.Control type="text" placeholder="Username" onChange={handleUsernameOnChange} value={getUsername} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column xs="3">
              Password
            </Form.Label>
            <Col xs="9">
              <Form.Control type="password" placeholder="Password" onChange={handlePasswordOnChange} value={getPassword} />
            </Col>
            <div className="text-end">
              <Link to="/register">I don't have an account</Link>
            </div>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 justify-content-center">
            <Col sm="auto" className="">
              <Button type="submit" className="mx-2" onClick={handleLogin}>Login</Button>
            </Col>
          </Form.Group>
          {!getUserLogin ?
          <div className="text-center text-danger">
            Username or password is incorrect
          </div> : ''}
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
