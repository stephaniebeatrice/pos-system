import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddCustomer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Customer
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Do not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer style={{ justifyContent: 'flex-end' }}>
          <Button variant="secondary" onClick={handleClose} size="sm" style={{ marginRight: '10px' }}>
            Close
          </Button>
          <Button variant="primary" size="sm">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCustomer;