import '../styles/userList.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getAllUsers } from '../../store/user';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import UserUpdateComponent from './UserUpdateComponent';


const UsersListComponent = () => {
  const dispatch = useDispatch();
  const { users} = useSelector((state) => state.users);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);


  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);


    const onHandleUpdateUser = (UserId) => {

        setSelectedUser(UserId)
        setShowModal(true);
        console.log('update user', UserId);
    }


  return (
    <>
      <section className="container-section">
        <h1>Users List</h1>
        <div className='users-container'>
          {users.map((user) => (
            <Card key={user._id} style={{ width: '20rem', margin: '2rem' }}>
              <Card.Img variant="top" src={user.img} alt='img' />
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>
                  <p>{user.last_name}</p>
                  <p>{user.role}</p>
                  <p>{user.email}</p>
                </Card.Text>
                <div className='d-flex justify-content-around'>
                <Button variant="primary" className="mr-3" onClick={() => onHandleUpdateUser(user._id)}>Update User</Button>
                <Button variant="primary">See User Details</Button>
              </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>

      <UserUpdateComponent
        show={showModal}
        setShow={setShowModal}
        user={selectedUser}
      
      />
    </>
  );


  }
export default UsersListComponent;
