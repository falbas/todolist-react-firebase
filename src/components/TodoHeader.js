import { useState } from 'react'
import { Nav, NavDropdown, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

import TodoImport from './TodoImport'

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
      <TodoImport show={show} handleClose={handleClose}/>
    </>
  )
}

export default TodoHeader
