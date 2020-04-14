import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

function TodoListDialog() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        To Do List
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>This is what you want to do</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>To Do New</p>
          <input type="text" id="fname" name="fname"></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save 
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TodoListDialog