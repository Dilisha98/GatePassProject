import React from 'react'
import './Navbarstyel.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavbarComp() {
  return (
    <div>
      <>
        <Navbar  bg="light" expand="lg" className="SlTtitileNavbar align-items-center " style={{height: '40px'}} >
      <Container className='Slttitle' >
          <Nav className='color mx-auto' >
            <p href="#action1" className="head me-4 mt-3">SLT GATE PASS</p>

          </Nav>
          
        
      </Container>
    </Navbar>

        <Navbar bg="light" expand="lg" className="align-items-center" >
      <Container >
        <Navbar.Brand className="" href="#">
        <img style={{ width: '89px', height: '34px', marginTop: '-18px' }} src={require('../img/SLTMobitel_Logo.png')} alt="imagee" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse  id="navbarScroll">
          <Nav className='color mx-auto' >
            <Nav.Link href='/New_Request'className="me-4" >New Request</Nav.Link>
            <Nav.Link href='/My_Request' className="me-4">My Request</Nav.Link>
            <Nav.Link href='/MyApprovals' className="me-4">My Approval</Nav.Link>
            <Nav.Link href='/My_Receipts' className="me-4">My Receipt</Nav.Link>
            <Nav.Link href='/Dispatch' className="me-4">Dispatch</Nav.Link>
            <Nav.Link href='/Item_Tracker' className="me-4">Item Tracker</Nav.Link>
            <Nav.Link href='/Admin' className="me-4">Admin</Nav.Link>
          </Nav>
          <Form className="d-flex">
          <Nav.Link className='color' href="#action2">Logout</Nav.Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </>
    </div>
  )
}



//export default class NavbarComp extends Component {
  
 // render() {
   // return (
      

   // )
 // }
//}
 /*div>
        <>
        <Navbar bg="light" expand="lg" className="align-items-center " style={{height: '40px'}} >
      <Container >
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse  id="navbarScroll">
          <Nav className='color mx-auto' >
            <p href="#action1" className="head me-4 mt-3">SLT GATE PASS</p>

          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>



        <Navbar bg="light" expand="lg" className="align-items-center" >
      <Container >
        <Navbar.Brand className="" href="#">
        <img style={{ width: '89px', height: '34px', marginTop: '-18px' }} src={require('../img/SLTMobitel_Logo.png')} alt="imagee" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse  id="navbarScroll">
          <Nav className='color mx-auto' >
            <Nav.Link href="#action1" className="me-4" >New Request</Nav.Link>
            <Nav.Link href="#action2" className="me-4">My Request</Nav.Link>
            <Nav.Link href="#action3" className="me-4">My Approval</Nav.Link>
            <Nav.Link href="#action4" className="me-4">My Receipt</Nav.Link>
            <Nav.Link href="#action5" className="me-4">Dispatch</Nav.Link>
            <Nav.Link href="#action6" className="me-4">Item Tracker</Nav.Link>
            <Nav.Link href="#action7" className="me-4">Admin</Nav.Link>
          
          </Nav>
          <Form className="d-flex">
          <Nav.Link className='color' href="#action2">Logout</Nav.Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </>
    
      </div> */