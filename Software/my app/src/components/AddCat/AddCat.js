
 import React from 'react';
 import {Modal, Button, Row, Col, Form}  from 'react-bootstrap';
 import './AddCat.css'
 import jwt_decode from 'jwt-decode'



 class AddCat extends React.Component{
    constructor(){
        super();
        this.state={

          pseudo:'shim',
        
    
        }
      }
    

handleSubmit(event){
    event.preventDefault();
   
    fetch("http://localhost:3001/AddCat", {
        method:'POST', 
        headers:{
            'Accept':'application/json',
            'Content-Type': 'application/json', 
            body:JSON.stringify({ 
                CatName: event.target.CatName.value,
                 CatAge: event.target.CatAge.value, 

                 CatWeight: event.target.CatWeight.value,
                ChipNumber: event.target.ChipNumber.value

               
               


            })
        }


    }).then(res=>res.json()).then((result)=>
    {
        alert('Added New Cat');
    },
    (error)=>{
        alert('Failed')
    }
    )

}



componentDidMount(){
        const token = localStorage.usertoken
         const decoded = jwt_decode(token)
         this.setState({
            pseudo: decoded.pseudo
            
           });

}
render(){
    return(

        <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="font" id="contained-modal-title-vcenter">
         Adding New Cat
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
            
            <Row>
                <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="CatName">
                        <Form.Label><b > Name</b></Form.Label>
                        <Form.Control 
                        type="text"
                        name="Cat Name"
                        required

                        />
                    </Form.Group>


                    <Form.Group controlId="CatAge">
                        <Form.Label><b>Age</b></Form.Label>
                        <Form.Control 
                        type="number"
                        name="Cat Age"
                        required

                        />
                    </Form.Group>

                    <Form.Group controlId="CatWeight">
                        <Form.Label><b>Weight</b></Form.Label>
                        <Form.Control 
                        type="number"
                        name="Cat Weight"
                        required

                        />
                    </Form.Group>
                   
                    <Form.Group controlId="ChipNumber">
                        <Form.Label><b>Chip Number </b></Form.Label>
                        <Form.Control 
                        type="text"
                        name="Chip Number"
                        required

                        />
                    </Form.Group>
                    <Form.Group>
                        <Button variant="primary" type="submit">Add</Button>
                    </Form.Group>


                </Form>
                
                </Col>



            </Row>

        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>


 
    )


    





}

 }
export default AddCat;