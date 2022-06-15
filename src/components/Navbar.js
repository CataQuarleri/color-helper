import React, {useState} from 'react'
import { useAuth } from '../contexts/AuthContext'
import {useNavigate} from 'react-router-dom'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

export default function Navigation() {
    const {currentUser, logout} = useAuth()
    const navigate = useNavigate()

    async function handleLogout(){
        try{
            await logout();
            navigate('/login')
        }catch(error){
            alert('Failed to log out')
            console.log(error)
        }
    };
  return (
    <Navbar bg="light" expand="lg">
  <Container className='d-flex justify-content-around'>
    <Navbar.Brand href="/">Color Helper!</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto justify-navbar-end">
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        <NavDropdown title="User" id="basic-nav-dropdown">
          {!currentUser && <>
            <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
            <NavDropdown.Item href="/login" >Log In</NavDropdown.Item>
          </>}
          {currentUser && <>
            <NavDropdown.Item href="/profile">{currentUser.email}</NavDropdown.Item>
            <NavDropdown.Item href="/my-color-schemes">My color schemes</NavDropdown.Item>
            <NavDropdown.Item href="/update-profile">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
             <NavDropdown.Item onClick={handleLogout}>Log Out</NavDropdown.Item>
          </>}
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}
