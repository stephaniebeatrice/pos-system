import React, {useState} from 'react'
import Table from 'react-bootstrap/Table';
import AddProduct from './AddProduct';
import './Products.css'

function ProductTable() {

  const [seen, setSeen] = useState(false)

    function togglePop () {
        setSeen(!seen);
  
    };

  return (
    <div>
     <button onClick={togglePop}>Add Product</button>
            {seen ? <AddProduct toggle={togglePop} /> : null}

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Barcode No</th>
          <th>Product Batch</th>
          <th>Product Name</th>
          <th>Product Description</th>
          <th>Cost Price</th>
          <th>Selling Price</th>
          <th>Qty (Cartons)</th>
          <th>Suppliers</th>
          <th>Category</th>
          <th>Manufacturing Date</th>
          <th>Expiring Date</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>Update</td>
          <td>Delete</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>Update</td>
          <td>Delete</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>Update</td>
          <td>Delete</td>
        </tr>
      </tbody>
    </Table>
    </div>  
  );
}

export default ProductTable;