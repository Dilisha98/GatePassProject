import React from 'react';
import './Navbarstyle.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavbarComp() {
  return (
    <div>
      <>
        <Navbar bg="light" expand="lg" className="align-items-center " style={{height: '40px'}} >
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
                <Nav.Link href='/New_Request' className={window.location.pathname === '/New_Request' ? 'active me-4' : 'me-4'}>New Request</Nav.Link>
                <Nav.Link href='/My_Request' className={window.location.pathname === '/My_Request' ? 'active me-4' : 'me-4'}>My Request</Nav.Link>
                <Nav.Link href='/MyApprovals' className={window.location.pathname === '/MyApprovals' ? 'active me-4' : 'me-4'}>My Approval</Nav.Link>
                <Nav.Link href='/My_Receipts' className={window.location.pathname === '/My_Receipts' ? 'active me-4' : 'me-4'}>My Receipt</Nav.Link>
                <Nav.Link href='/Dispatch' className={window.location.pathname === '/Dispatch' ? 'active me-4' : 'me-4'}>Dispatch</Nav.Link>
                <Nav.Link href='/Item_Tracker' className={window.location.pathname === '/Item_Tracker' ? 'active me-4' : 'me-4'}>Item Tracker</Nav.Link>
                <Nav.Link href='/Admin' className={window.location.pathname === '/Admin' ? 'active me-4' : 'me-4'}>Admin</Nav.Link>
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
