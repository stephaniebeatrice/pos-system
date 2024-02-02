import React, {useState} from 'react';
import Table from 'react-bootstrap/Table';
import AddCustomer from './AddCustomer'

function Customers() {

  const [seen, setSeen] = useState(false)

    function togglePop () {
        setSeen(!seen);
  
    };

  return (
    <div>
     <button onClick={togglePop}>Add Product</button>
            {seen ? <AddCustomer toggle={togglePop} /> : null}
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>E-mail Address</th>
          <th>Phone number</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Otto</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Thornton</td>
          <td>Otto</td>
          <td>@fat</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>3</td>
          <td>@twitter</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
}

export default Customers;