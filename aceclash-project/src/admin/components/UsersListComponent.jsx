import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { getAllUsers } from '../../store/user';
import { useDispatch, useSelector } from 'react-redux';
import UserUpdateComponent from './UserUpdateComponent';
import { updateUser } from '../../store/user';
import Swal from 'sweetalert2';


const UsersListComponent = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const onHandleUpdateUser = (user) => {
    setSelectedUser(user);
    setShowModal(true);
    console.log('update user', user._id);
  };

  const submitUpdate = async (data) => {
    try {
      await dispatch(updateUser(selectedUser._id, data));

    
      Swal.fire({
        icon: 'success',
        title: 'User updated successfully!',
        showConfirmButton: false,
        timer: 1500,
      });

   
      setShowModal(false);
    } catch (error) {

      console.error('Error updating user:', error);

      
      Swal.fire({
        icon: 'error',
        title: 'Error updating user',
        text: 'An error occurred while updating the user. Please try again.',
      });
    }
  };

  return (
    <>
      <section className="container-section">
        <h1>Users List</h1>
        <div className="users-container">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Last Name</th>
                <th>Role</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.role}</td>
                  <td>{user.email}</td>
                  <td>
                    <div className="d-flex justify-content-around">
                      <Button
                        variant="primary"
                        className="mr-3"
                        onClick={() => onHandleUpdateUser(user)}
                      >
                        Update User
                      </Button>
                      <Button variant="primary">See User Details</Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </section>

      <UserUpdateComponent show={showModal} setShow={setShowModal} user={selectedUser} submitUpdate={submitUpdate}  />
    </>
  );
};

export default UsersListComponent;
