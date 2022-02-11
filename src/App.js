import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';

import { Container, Row, Col } from 'react-bootstrap';

const App = () => {
  return (
    <Container fluid>
      <Row className="justify-content-md-center mt-5">
        <Col xs="3">
          <TodoCreate />
          <TodoList />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
