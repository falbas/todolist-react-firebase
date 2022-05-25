import { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import CSVReader from 'react-csv-reader'
import firebase from '../firebase';

const TodoImport = ({ show, handleClose }) => {
  const Papa = require('papaparse')
  const [todoImport, setTodoImport] = useState([])

  const handleImport = () => {
    const username = localStorage.getItem('username')
    todoImport.forEach((item, index) => {
      // (index && item[0]) && console.log(item);
      if (index && item[0]) {
        const todoRef = firebase.database().ref('todos')
      const todo = {
        title: item,
        complete: false,
        user: username,
      }
      todoRef.push(todo)
      }
    })
    handleClose()
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Import Todo List</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="importtodo" className="mb-3">
          {/* <Form.Control type="file" accept=".csv" /> */}
          <CSVReader
            onFileLoaded={(data, fileInfo, originalFile) => {
              Papa.parse(originalFile, {
                delimiter: ';',
                complete: function (results) {
                  // console.log('Finished:', results.data[0])
                  setTodoImport(results.data)
                },
              })
            }}
            cssInputClass="form-control"
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="primary" onClick={handleImport}>
          Import
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default TodoImport
