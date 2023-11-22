import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const UserUpdateComponent = ({ show, setShow, user, submitReservation }) => {
  const handleClose = () => setShow(false);



  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update User ID {user && user._id}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="update name"
              value=""
              onChange=""
              autoFocus
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>last name</Form.Label>
            <Form.Control
              type="text"
              name="last_name"
              placeholder="update last name"
              value=""
              onChange=""
              required
            />
          </Form.Group>

          <Button type="submit" variant="primary">
            Submit
          </Button>
         
        </Form>
      </Modal.Body>
    </Modal>
  );
};

UserUpdateComponent.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    // Add any other properties you need here
  }).isRequired,
  submitReservation: PropTypes.func.isRequired,
};

export default UserUpdateComponent;
