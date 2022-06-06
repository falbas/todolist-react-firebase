import { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

const Iklan = ({iklan}) => {
  const [show, setShow] = useState(iklan % 2)

  const handleClose = () => setShow(false)

  return (
    <>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Ceritanya Iklan</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Iklan
