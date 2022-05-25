import { useState } from 'react'
import { Nav, NavDropdown, Button, Modal, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const TodoHeader = () => {
  const login = localStorage.getItem('login')
  const username = localStorage.getItem('username')

  let navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('login')
    localStorage.removeItem('username')

    navigate('/login')
  }

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Nav className="justify-content-end">
        {login && (
          <NavDropdown title={username} id="nav-dropdown" name="username">
            <NavDropdown.Item>
              <Button onClick={handleLogout} variant="light" name="btnlogout">
                Logout
              </Button>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Button onClick={handleShow} variant="light" name="btnimport">
                Import Todo List
              </Button>
            </NavDropdown.Item>
          </NavDropdown>
        )}
        {!login && (
          <Link to="/login" name="loginlink">
            Login
          </Link>
        )}
      </Nav>
      <Modal show={show} onHide={handleClose}>
        <Form>
          <Modal.Header closeButton>
            <Modal.Title>Import Todo List</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="importtodo" className="mb-3">
              <Form.Control type="file" accept=".csv" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" onClick={handleClose}>
              Import
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default TodoHeader
