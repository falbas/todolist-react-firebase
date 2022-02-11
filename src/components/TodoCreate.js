import { Stack, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import firebase from '../firebase';

const TodoCreate = () => {
  const [getTitle, setTitle] = useState('');

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  }

  const createTodo = () => {
    const todoRef = firebase.database().ref('Todo');
    const todo = {
      title: getTitle, complete: false,
    };

    todoRef.push(todo);
  }

  return (
    <Stack direction="horizontal" gap="2">
      <Form.Control className="me-auto" type="text" placeholder="Create Todo List" onChange={handleOnChange} value={getTitle} />
      <Button type="submit" onClick={createTodo}>
        Add
      </Button>
    </Stack>
  );
}

export default TodoCreate;
