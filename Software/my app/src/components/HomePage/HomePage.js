import React, { Component } from 'react';
import {  MDBCard, MDBCardTitle,  MDBCardText, MDBCardBody, MDBBtn,   MDBRow, MDBCol, MDBIcon } from
'mdbreact';
import Menu from '../Menu/Menu';
import AddCat from '../AddCat/AddCat';
import { ButtonToolbar} from  'react-bootstrap';
import './HomePage.css'
//import Spinner from 'react-bootstrap/Spinner'

import jwt_decode from 'jwt-decode'




class CardExample extends Component  {
  constructor(){
    super();
    this.state={
      auth:1,
      upd:0,
      cats:[],
      Firstname:'',
      Lastname:'',
      pseudo:'shim',
      delete: 1,
      isLoading: false,
      addModelShow: false

    }
  }


 

  componentDidMount() {
  const token = localStorage.usertoken
   const decoded = jwt_decode(token)
    const user=this.state.pseudo;
    const server = "http://localhost:3001/home/"+user;


    fetch(server)
    
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
           cats: result,
           Firstname: decoded.Firstname,
           Lastname: decoded.Lastname,
           pseudo: decoded.pseudo
           
          });

        },
        
      ).catch(err=>alert(err));

     
  }
  componentDidUpdate(){
   this.componentDidMount();
  }
  permit = (val) => {
    const server = "http://localhost:3001/catP/"+val;


    fetch(server)
    
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({auth:0})


        },
        
      ).catch(err=>alert(err));
alert("YOUR CAT CAN EAT NOW :)")
  }



  Dontpermit=(val) => {
    const server = "http://localhost:3001/catD/"+val;


    fetch(server)
    
      .then(res => res.json())
      .then(
        (result) => {
         this.setState({upd:1})

        },
        
      ).catch(err=>alert(err));

      alert("YOUR CAT CAN NOT EAT NOW ")
  }



  delete=(val) => {
    const server = "http://localhost:3001/delete/"+val;


    fetch(server)
    
      .then(res => res.json())
      .then(
        (result) => {
         this.setState({delete:0})

        },
        
      ).catch(err=>alert(err));

  }


  

  render(){ 



  //   if (this.state.cats.length===0){
  //     return(
  //       <div>
  //       <Menu/>
  //      {/* <div className="rec"
  //      ><h2>No Records!!!</h2>
  //      </div>*/}
  //        <div><Spinner className="spinner-border text-primary center   "  animation="border" role="status">
  //      <span className="sr-only ">Loading...</span>
  //    </Spinner></div>
  //      </div> 
  //     )
  //  }
   
 let addModalClose =()=> this.setState({addModelShow:false});
 const token = localStorage.usertoken
 const decoded = jwt_decode(token)
 const Firstname=decoded.Firstname;

  return (
    <div >
      <Menu/>
  <h2 className="underline">Hey {Firstname}, Your Cats </h2>
      <ButtonToolbar>
      <MDBBtn onClick={()=>this.setState({addModelShow:true})}  tag="a" size="md" color="black">
        add new cat  <MDBIcon icon="plus" />
      </MDBBtn>

      <AddCat
      show={this.state.addModelShow} 
      onHide={addModalClose}
      
      />
     </ButtonToolbar>
<MDBRow className="cards">
{this.state.cats.map(cat => 
 <MDBCol style={{ maxWidth: "19rem"  }}>

              <MDBCard className='card-image item '
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-vector/elegant-white-background-with-shiny-lines_1017-17580.jpg?size=626&ext=jpg')"
          }}>
              <MDBCardBody>
                <MDBCardTitle > Name: {cat.name}  <MDBIcon icon="cat" />  </MDBCardTitle>
                <MDBCardText><b>Uid:</b>  {cat.uid}</MDBCardText>
                {cat.auth===0? <MDBBtn onClick={() => this.permit(cat.uid)}  color="green" size="md" > Eat </MDBBtn>:<MDBBtn  onClick={() => this.Dontpermit(cat.uid)} className="btn"   color="yellow" size="md" > Don't Eat </MDBBtn>}
                <MDBBtn className="btn btn-dark"  size="md" href={"/AboutTheCat/"+cat.uid}> about cat</MDBBtn>
                <MDBBtn onClick={() => this.delete(cat.uid)} color="red" size="md" > Delete</MDBBtn>


              </MDBCardBody>
            </MDBCard>
            </MDBCol>
            )}


</MDBRow>

      
  
    </div>
  )
  }
}

export default CardExample;