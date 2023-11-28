
import  { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


const EnrollmentUpdateUser = ({ show, setShow,  submitUpdate }) => {
    const handleClose = () => setShow(false);
  
    const [data, setData] = useState({
        league: '',
        club: '',
        category: '',
        practice_location: '',
      });

      const onHandleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
    
      
  const handleSubmit = (e) => {
    e.preventDefault();
    submitUpdate(data);
    handleClose();
  };

    
    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update enrollment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>league</Form.Label>
              <Form.Control
                type="text"
                name="league"
                placeholder="update league"
                value={data.league}
                onChange={onHandleChange}
                autoFocus
              
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>club</Form.Label>
              <Form.Control
                type="text"
                name="club"
                placeholder="update club"
                value={data.club}
                onChange={onHandleChange}
                
              />
            </Form.Group>
         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>category</Form.Label>
              <Form.Control
                type="text"
                name="category"
                placeholder="update  category"
                value={data.category}
                onChange={onHandleChange}
                
              />
            </Form.Group>
  
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>practice location</Form.Label>
              <Form.Control
                type="text"
                name="practice_location"
                placeholder="practice location"
                value={data.practice_location}
                onChange={onHandleChange}
                
              />
            </Form.Group>
  
  
            <Button type="submit" variant="primary">
              Submit
            </Button>
           
          </Form>
        </Modal.Body>
      </Modal>
  )
}

EnrollmentUpdateUser.propTypes = {
    show: PropTypes.bool.isRequired,
    setShow: PropTypes.func.isRequired,
    submitUpdate: PropTypes.func.isRequired,
  };

export default EnrollmentUpdateUser
