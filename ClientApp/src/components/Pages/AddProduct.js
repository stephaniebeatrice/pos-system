import React, {} from 'react';
import { Button, Dropdown, Form } from 'react-bootstrap';

function AddProduct() {
  return (
    <Form>
      <div className="mbsc-grid mbsc-grid-fixed">
        <div className="mbsc-form-group">
          <div className="mbsc-row mbsc-justify-content-center">
            <div className="mbsc-col-md-10 mbsc-col-xl-8 mbsc-form-grid">
              <div className="mbsc-form-group-title">Add Products</div>
              <div className="mbsc-row">
                <div className="mbsc-col-md-6 mbsc-col-12">
                  <Form.Control type="integer" label="barcode" placeholder="Barcode Number" inputStyle="box" labelStyle="floating" />
                </div>
              </div>
              <div className="mbsc-row">
                <div className="mbsc-col-12">
                  <Form.Control type="text" label="Address" placeholder="Product Batch" inputStyle="box" labelStyle="floating" />
                </div>
                <div className="mbsc-col-12">
                  <Form.Control type="text" label="Address" placeholder="Product Name" inputStyle="box" labelStyle="floating" />
                </div>
                <div className="mbsc-col-12">
                  <Form.Control type="text" label="Address" placeholder="Product Description" inputStyle="box" labelStyle="floating" />
                </div>
              </div>
              <div className="mbsc-col-md-2 mbsc-col-6">
                  <Form.Control type="text" label="Zip" placeholder="Cost Price" inputStyle="box" labelStyle="floating" />
                </div>
                <div className="mbsc-col-md-2 mbsc-col-6">
                  <Form.Control type="text" label="Zip" placeholder="Selling Price" inputStyle="box" labelStyle="floating" />
                </div>
                <div className="mbsc-col-md-2 mbsc-col-6">
                  <Form.Control type="text" label="Zip" placeholder="Quantity (Cartons)" inputStyle="box" labelStyle="floating" />
                </div>
              <div className="mbsc-row">
                <div className="mbsc-col-md-6 mbsc-col-12">
                  <Form.Control type="text" label="City" placeholder="City" inputStyle="box" labelStyle="floating" />
                </div>
                <div className="mbsc-col-md-4 mbsc-col-6">
                  <Dropdown label="Suppliers" inputStyle="box" labelStyle="floating">
                    <option value="Alabama">Alabama</option>
                    <option value="Alaska">Alaska</option>
                    <option value="Arizona">Arizona</option>
                    <option value="Arkansas">Arkansas</option>              
                  </Dropdown>
                </div>
                <div className="mbsc-col-md-4 mbsc-col-6">
                  <Dropdown label="Category" inputStyle="box" labelStyle="floating">
                    <option value="Alabama">Alabama</option>
                    <option value="Alaska">Alaska</option>
                    <option value="Arizona">Arizona</option>
                    <option value="Arkansas">Arkansas</option>              
                  </Dropdown>
                </div>
                <div className="mbsc-col-md-2 mbsc-col-6">
                  <Form.Control type="text" label="Manufacturing Date" placeholder="Manufacturing date" inputStyle="box" labelStyle="floating" />
                </div>
                <div className="mbsc-col-md-2 mbsc-col-6">
                  <Form.Control type="text" label="Expiring Date" placeholder="Expiry Date" inputStyle="box" labelStyle="floating" />
                </div>
              </div>
              <Button>Submit</Button>
            </div>
          </div>
        </div>
        </div>
        </Form>
  );
}

export default AddProduct;