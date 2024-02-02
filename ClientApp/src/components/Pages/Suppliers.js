import React, {useState} from 'react';
import Table from 'react-bootstrap/Table';
import AddSupplier from './AddSupplier'

function Suppliers() {
  const [modal, setModal] = useState(false)

    function togglePop () {
        setModal(!modal);
  
    }; 
  return (
    <div>
            <button onClick={togglePop}>Add Supplier</button>
            {modal ? <AddSupplier toggle={togglePop} /> : null}

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Supplier Name</th>
          <th>Company Name</th>
          <th>Supplier e-mail</th>
          <th>Phone number</th>
          <th>Address</th>
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
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
}

export default Suppliers;