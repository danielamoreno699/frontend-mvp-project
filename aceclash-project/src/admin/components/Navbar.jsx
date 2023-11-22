import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from "react-router-dom";
import { AiFillFacebook, AiFillGoogleCircle, AiFillPhone,  AiOutlineTwitter, AiTwotoneMail } from 'react-icons/ai';
import '../styles/Navbar.css'

const NavbarAdmin = () => {



    const navigate = useNavigate();
    const onLogout = () => {
        localStorage.removeItem('token');
        navigate('/auth/login');
        
    }

  return (
    <header className="nav-container">
        <Navbar className="p-1 d-flex">
            <nav className="sidebar">
                <ul className="nav flex-column m-3 d-flex">
                    <li>
                        <a className="nav-link" href="#" onClick={onLogout}>Logout</a>
                    </li>
                    <li>
                        <a className="nav-link" href="#">Link name</a>
                    </li>
                    <li>
                        <a className="nav-link" href="#">Link name</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About page</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Category name</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Another page</a>
                    </li>
                </ul>
            <footer>
          {/* Contacts */}
                <div className="contacts flex-fill fit-content p-1">
                        <Nav className="m-1 fit-content flex-column m-3 d-flex">
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
          <div className="socials fit-content p-1">
              <Nav as="ul" className="m-3 d-flex">
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
     
        </nav>
    </Navbar>
</header>
    
  )
}

export default NavbarAdmin