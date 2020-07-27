import React from 'react';
import './Menu.css'
import {Navbar, Nav } from 'react-bootstrap';
import {  
  MDBBtn } from "mdbreact";
import { Link } from 'react-router-dom';
//import { Link } from 'react-router-dom'





class Menu extends React.Component { 


  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }



    render() {
      return(
     
      <>
    <Navbar bg="primary" variant="dark">
     <Navbar.Brand href="home">Cat Feeder</Navbar.Brand>
     <Nav className="mr-auto">
      <Nav.Link href="home">Home</Nav.Link> 
    {/* <Nav.Link href="AboutTheCat">About the cat</Nav.Link> */}
      <Nav.Link href="Details">Login Table</Nav.Link>
      <Nav.Link href="https://www.veterinar.co.il/210296/%D7%97%D7%99%D7%A1%D7%95%D7%A0%D7%99%D7%9D-%D7%9C%D7%97%D7%AA%D7%95%D7%9C">Medical Info</Nav.Link>



    </Nav>
<Link to ="/"><MDBBtn  outline white rounded size="sm" color="black"> Log Out </MDBBtn></Link> 

 
    
  </Navbar>
  
</>







       
        
    
  

      ) 
    }




  }
  export default Menu;