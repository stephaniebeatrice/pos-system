import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function AddProduct() {
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
        class="modal-dialog modal-dialog-centered"
      >
        <Modal.Header>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body className="w-full max-w-lg">
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Barcode No</Form.Label>
                <Form.Control type="text" placeholder="Enter Barcode" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Product Batch</Form.Label>
                <Form.Control type="text" placeholder="Batch" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Product Description</Form.Label>
              <Form.Control placeholder="More details about product" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Cost Price</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Selling Price</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control />
              </Form.Group>
              </Row>

              <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Supplier</Form.Label>
                <Form.Select defaultValue="Choose..." className='form-control'>
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Category</Form.Label>
                <Form.Control />
              </Form.Group>
</Row>
              <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Manufacturing Date</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Expiry Date</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>
                <input className='btn btn-primary' type='submit' value='Add product'/>
                <input className='btn btn-secondary ml-3' type='submit' value='Close'/>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddProduct;