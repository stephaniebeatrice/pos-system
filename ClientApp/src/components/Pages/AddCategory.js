import React, {} from 'react';
import { Button, Dropdown, Form } from 'react-bootstrap';

function AddCategory() {
  return (
    <Form>
      <div className="mbsc-grid mbsc-grid-fixed">
        <div className="mbsc-form-group">
          <div className="mbsc-row mbsc-justify-content-center">
            <div className="mbsc-col-md-10 mbsc-col-xl-8 mbsc-form-grid">
              <div className="mbsc-form-group-title">Add Product Category</div>
              <div className="mbsc-row">
                <div className="mbsc-col-md-6 mbsc-col-12">
                  <Form.Control type="text" label="barcode" placeholder="ID" inputStyle="box" labelStyle="floating" />
                </div>
              </div>
              <div className="mbsc-row">
                <div className="mbsc-col-12">
                  <Form.Control type="text" label="Address" placeholder="Category Name" inputStyle="box" labelStyle="floating" />
                </div>
                <div className="mbsc-col-12">
                  <Form.Control type="text" label="Address" placeholder="Category Description" inputStyle="box" labelStyle="floating" />
                </div>
                <div className="mbsc-col-12">
                  <Form.Control type="text" label="Address" placeholder="Created At" inputStyle="box" labelStyle="floating" />
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

export default AddCategory;