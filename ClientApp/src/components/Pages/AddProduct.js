import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddCategory() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Product
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
        <Modal.Body className="w-full max-w-sm">
          I will not close if you click outside me. Do not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <button className="bg-slate-400 hover:bg-slate-500 text-black font-bold py-2 px-4 rounded" onClick={handleClose}>
            Close
          </button>
          <button  className="bg-purple-600 hover:bg-purple-700 text-black font-bold py-2 px-4 rounded">Understood</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCategory;