import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from "react-router-dom";
import { AiFillFacebook, AiFillGoogleCircle, AiFillPhone,  AiOutlineShopping, AiOutlineTwitter, AiTwotoneMail } from 'react-icons/ai';
import '../styles/navbar.css'

const NavbarAdmin = () => {



    const navigate = useNavigate();
    const onLogout = () => {
        localStorage.removeItem('token');
        navigate('/auth/login');
        
    }

  return (
    <header className="nav-container">
    <Navbar className={` p-0 d-flex  `}>
      <div className="sidebar">
        <div className="logo-container"/> 

        <Nav as="ul" className={`m-3 d-flex flex-column `}>
         
            <>
              <Nav.Item as="li">
                <Nav.Link 
                    onClick={onLogout}>
                  {<AiOutlineShopping className='react-icon'/>}
                  Log out
                </Nav.Link>
              </Nav.Item>
              <Nav.Item >
                <Nav.Link
                
                >
                  HOME
                </Nav.Link>
              </Nav.Item>
              <Nav.Item >
                <Nav.Link
                
                >
                  SHOW USERS
                </Nav.Link>
              </Nav.Item>
              <Nav.Item >
                <Nav.Link
                
                >
                  UPDATE USERS
                </Nav.Link>
              </Nav.Item>
              <Nav.Item >
                <Nav.Link
              
                >
                    SHOW TOURNAMENTS
                </Nav.Link>
              </Nav.Item>
              <Nav.Item >
                <Nav.Link
                
                >
                  CREATE TOURNAMENT
                </Nav.Link>
              </Nav.Item>

              <Nav.Item >
                <Nav.Link
                
                >
                    UPDATE TOURNAMENT
                </Nav.Link>
              </Nav.Item>

              <Nav.Item >
                <Nav.Link
                
                >
                  DELETE TOURNAMENT
                </Nav.Link>
              </Nav.Item>

              <Nav.Item >
                <Nav.Link
                
                >
                    SHOW ENROLLMENTS
                </Nav.Link>
              </Nav.Item>

              <Nav.Item >
                <Nav.Link
                
                >
                  UPDATE ENROLLMENTS
                </Nav.Link>
              </Nav.Item>

              <Nav.Item >
                <Nav.Link
                
                >
                    DELETE ENROLLMENTS
                </Nav.Link>
              </Nav.Item>

              
            </>
          
        </Nav>
        <footer>
          {/* Contacts */}
          <div className="contacts flex-fill fit-content">
              <Nav as="ul" className="m-1 fit-content flex-column">
                <Nav.Item as="li" className="fit-content">
                  <Nav.Link href="#" disabled className="fit-content">
                    {<AiFillPhone className='icon-react'/>}
                    0.703.1352.411
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" className="fit-content">
                  <Nav.Link className="fit-content asdw" href="#" disabled>
  

                    {<AiTwotoneMail className='navbar-icon' />}
                    aceclash@email.com
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>

          {/* Socials */}
          <div className="socials fit-content">
              <Nav as="ul" className="m-1">
                <Nav.Item as="li">
                  <Nav.Link href="#">
                    {<AiFillFacebook className="react-icon"/> }
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link href="#">
                    {<AiFillGoogleCircle className="react-icon"/>}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link href="#">
                    {<AiOutlineTwitter className='react-icon'/>}
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            </footer>
      </div>
    </Navbar>
  </header>
    
  )
}

export default NavbarAdmin