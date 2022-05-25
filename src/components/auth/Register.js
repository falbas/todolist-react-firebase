import { Container, Col, Row, Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import firebase from '../../firebase'

const Register = () => {
  const [getUsername, setUsername] = useState('')
  const [getPassword, setPassword] = useState('')
  const [userExists, setUserExists] = useState(false)

  const handleUsernameOnChange = (e) => {
    setUsername(e.target.value)
    setUserExists(false)
  }

  const handlePasswordOnChange = (e) => {
    setPassword(e.target.value)
  }

  let navigate = useNavigate()
  const handleRegister = () => {
    const userRef = firebase.database().ref('users/' + getUsername)
    const user = {
      username: getUsername,
      password: getPassword,
    }

    firebase
      .database()
      .ref('users')
      .child(getUsername)
      .get()
      .then((snapshot) => {
        if (!snapshot.exists()) {
          userRef.set(user)
          localStorage.setItem('username', getUsername)
          localStorage.setItem('login', true)
          navigate('/')
        } else {
          setUserExists(true)
        }
      })
  }

  return (
    <Container fluid>
      <Row className="justify-content-md-center mt-5">
        <div className="text-center m-3">
          <h1>Register</h1>
        </div>
        <Col xs="12" md="5" xl="4">
          <Form.Group as={Row} className="mb-3">
            <Form.Label column xs="3">
              Username
            </Form.Label>
            <Col xs="9">
              <Form.Control
                type="text"
                placeholder="Username"
                onChange={handleUsernameOnChange}
                value={getUsername}
                name="username"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column xs="3">
              Password
            </Form.Label>
            <Col xs="9">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={handlePasswordOnChange}
                value={getPassword}
                name="password"
              />
            </Col>
            <div className="text-end">
              <Link to="/login" name="loginlink">
                I have account
              </Link>
            </div>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 justify-content-center">
            <Col sm="auto" className="">
              <Button
                type="submit"
                className="mx-2"
                onClick={handleRegister}
                name="btnregister"
              >
                Register
              </Button>
            </Col>
          </Form.Group>
          {userExists && (
            <div className="text-center text-danger">
              Username doesn't exist
            </div>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default Register
