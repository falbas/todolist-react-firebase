import { Button, Stack } from 'react-bootstrap'
import { IoIosClose, IoIosCheckmark } from 'react-icons/io'
import firebase from '../firebase'

const Todo = ({ todo }) => {
  const deleteTodo = () => {
    const todoRef = firebase.database().ref('todos').child(todo.id)
    todoRef.remove()
  }

  const completeTodo = () => {
    const todoRef = firebase.database().ref('todos').child(todo.id)
    todoRef.update({
      complete: !todo.complete,
    })
  }

  return (
    <li>
      <Stack direction="horizontal" gap="3">
        <div
          className={
            'me-auto ' + (todo.complete && 'text-decoration-line-through')
          }
        >
          {todo.title}
        </div>
        <Button
          onClick={deleteTodo}
          name={'btndelete'}
          variant="btn-light"
          className="btn-sm"
        >
          <IoIosClose />
        </Button>
        <Button
          onClick={completeTodo}
          name={'btncomplete'}
          variant="btn-light"
          className="btn-sm"
        >
          <IoIosCheckmark />
        </Button>
      </Stack>
    </li>
  )
}

export default Todo
