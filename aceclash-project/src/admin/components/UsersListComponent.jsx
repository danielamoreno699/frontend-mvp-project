import '../styles/userList.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getAllUsers } from '../../store/user';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


const UsersListComponent = () => {
  const dispatch = useDispatch();
  const { users} = useSelector((state) => state.users);


  useEffect(() => {
    dispatch(getAllUsers());
  }, []);


    const onHandleUpdateUser = (id) => {
        console.log('update user', id);
    }


  return (
    <>
      <section className="container-section">
        <h1>Users List</h1>
        <div className='users-container'>
          {users.map((user) => (
            <Card key={user.id} style={{ width: '20rem', margin: '2rem' }}>
              <Card.Img variant="top" src={user.img} alt='img' />
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>
                  <p>{user.last_name}</p>
                  <p>{user.role}</p>
                  <p>{user.email}</p>
                </Card.Text>
                <div className='d-flex justify-content-around'>
                <Button variant="primary" className="mr-3" onClick={onHandleUpdateUser}>Update User</Button>
                <Button variant="primary">See User Details</Button>
              </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>
    </>
  );


  }
export default UsersListComponent;
