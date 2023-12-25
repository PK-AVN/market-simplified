import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const MainHeader = () => {
  return (
    // <Nav className='weon-header'>
    //   <Nav.Item className="main-logo">
    //     <Nav.Link>
    //       <a href="https://weon.org.in/" rel="home">
    //         <img
    //           width="200"
    //           height="66"
    //           src="https://weon.org.in/wp-content/uploads/2023/09/20230928_014035_0000-e1695845725492.png"
    //           alt="Weon"
    //         />
    //       </a>
    //     </Nav.Link>
    //   </Nav.Item>
    //   <Nav.Item className="header-link">
    //     <Nav.Link>
    //       Home
    //     </Nav.Link>
    //   </Nav.Item>
    //   <Nav.Item className="header-link">
    //     <Nav.Link>
    //       Job Placement
    //     </Nav.Link>
    //   </Nav.Item>
    //   <Nav.Item className="header-link">
    //     <Nav.Link>
    //       Immigration
    //     </Nav.Link>
    //   </Nav.Item>
    //   <Nav.Item className="header-link">
    //     <Nav.Link>
    //       About Us
    //     </Nav.Link>
    //   </Nav.Item>
    //   <NavDropdown className="header-link" title="More" id="nav-dropdown">
    //     <NavDropdown.Item eventKey="4.2">Enquiry</NavDropdown.Item>
    //     <NavDropdown.Divider />
    //     <NavDropdown.Item eventKey="4.3">Enroll</NavDropdown.Item>
    //     <NavDropdown.Divider />
    //     <NavDropdown.Item eventKey="4.4">Pay Now</NavDropdown.Item>
    //   </NavDropdown>
    // </Nav>
    <Navbar expand="lg" className='weon-header'>
      <Container>
        <Navbar.Brand className="main-logo" href="#https://weon.org.in/">
            <img
              width="200"
              height="66"
              src="https://weon.org.in/wp-content/uploads/2023/09/20230928_014035_0000-e1695845725492.png"
              alt="Weon"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/job-placement">Job Placement</Nav.Link>
            <Nav.Link href="/immigration">Immigration</Nav.Link>
            <Nav.Link href="/about-us">About Us</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="/pay-now">Paynow</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MainHeader