import { Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const TodoHeader = () => {
  const login = localStorage.getItem("login");
  const username = localStorage.getItem("username");

  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("username");

    navigate('/login');
  };

  return (
    <Nav className="justify-content-end">
      {
        login ?
        <NavDropdown title={username} id="nav-dropdown">
          <NavDropdown.Item><Button onClick={handleLogout} variant="light">Logout</Button></NavDropdown.Item>
        </NavDropdown> :
        <Link to="/login">Login</Link>
      }
    </Nav>
  );
};

export default TodoHeader;
