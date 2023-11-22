
import '../styles/userList.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


 const UsersListComponent = () => {
  return (
    <>
   
    <section className="container-section">
      <h1>Users List</h1>
      <div className='users-container'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        
      </div>

    </section>
    </>
  )
}


export default UsersListComponent