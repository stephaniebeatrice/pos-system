import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>First name</Form.Label>
        <Form.Control type="text" placeholder="Enter first name" />
        <Form.Label>Last name</Form.Label>
        <Form.Control type="email" placeholder="Enter last name" />
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="I accept the terms and conditions" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Create account
      </Button>
    </Form>
  );
}

export default BasicExample;