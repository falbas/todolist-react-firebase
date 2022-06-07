import { Container, Row, Col } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

import TodoHeader from './components/TodoHeader';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';

const App = () => {
  const login = localStorage.getItem("login");

  return (login ?
    <Container fluid>
    <TodoHeader />
      <Row className="justify-content-md-center mt-5">
        <Col xs="12" md="5" xl="4">
          <TodoCreate />
          <TodoList />
        </Col>
      </Row>
    </Container> :
    <Navigate to="/login" />
  );
};

export default App;
