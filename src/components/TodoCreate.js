import { Stack, Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import firebase from '../firebase'

const TodoCreate = () => {
  const [getTitle, setTitle] = useState('')

  const handleOnChange = (e) => {
    setTitle(e.target.value)
  }

  const username = localStorage.getItem('username')
  const createTodo = () => {
    if (getTitle) {
      const todoRef = firebase.database().ref('todos')
      const todo = {
        title: getTitle,
        complete: false,
        user: username,
      }
      todoRef.push(todo)
      setTitle('')
    }
  }

  return (
    <Stack direction="horizontal" gap="2">
      <Form.Control
        name="inputtodo"
        className="me-auto"
        type="text"
        placeholder="Create Todo List"
        onChange={handleOnChange}
        value={getTitle}
      />
      <Button type="submit" onClick={createTodo} name="btnadd">
        Add
      </Button>
    </Stack>
  )
}

export default TodoCreate
