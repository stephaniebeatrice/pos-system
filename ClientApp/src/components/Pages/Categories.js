import React from 'react';
import Table from 'react-bootstrap/Table';
import AddCategory from './AddCategory'

function Categories() {

  return (
    <div>
      <AddCategory />
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Category Name</th>
          <th>Category Description</th>
          <th>Created At</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Otto</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td>Otto</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
}

export default Categories;