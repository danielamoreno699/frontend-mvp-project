import '../styles/userList.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getAllUsers } from '../../store/user';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


const UsersListComponent = () => {
  const dispatch = useDispatch();
  const { users} = useSelector((state) => state.users);

  // Fetch users when the component mounts
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);



  return (
    <>
      <section className="container-section">
        <h1>Users List</h1>
        <div className='users-container'>
          {users.map((user) => (
            <Card key={user.id} style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>
                  <p>{user.last_name}</p>
                  <p>{user.role}</p>
                  <p>{user.email}</p>
                </Card.Text>
                <Button variant="primary" >Update User</Button>
                <Button variant="primary" >See User Details</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>
    </>
  );


  }
export default UsersListComponent;
