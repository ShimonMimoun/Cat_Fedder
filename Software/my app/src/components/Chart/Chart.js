import React from "react";
//import { Bar } from "react-chartjs-2";
//import { MDBContainer } from "mdbreact";
import Menu from "../Menu/Menu";
import {  MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView } from 'mdbreact';
//import jwt_decode from 'jwt-decode'
import Moment from 'react-moment';


import  "./Chart.css"

class Chart extends React.Component {
  constructor(props){
    super(props);
    this.state={
      Firstname:'',
      cat:[],
      id:'5614CEF7',
      Lastname:'',
      pseudo:'',
  

    }



  }



  componentDidMount() {
        // const token = localStorage.usertoken
        // const decoded = jwt_decode(token)
        // this.setState({
        //   Firstname: decoded.Firstname,
        //   Lastname: decoded.Lastname,
        //   pseudo: decoded.pseudo
        // })

const id=this.props.match.params.id;
 const server = "http://localhost:3001/AboutTheCat/"+id;


    fetch(server)
    
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
           cat: result,
         
           
          });

        },
        
      ).catch(err=>alert(err));

     

  }

  render() {

    if (this.state.cat.length===0){
      return(
        <div>
        <Menu/>
       <div className="rec"
       ><h2>No Information</h2>
       </div>
       
       </div> 
      )
   }


    return (

      
      <div>
       
      <Menu/>
      {this.state.cat.map(c =>
      <h2 className="underline">Some Details- {c.name}</h2>
      )}


      <MDBRow className="cards">

 <MDBCol style={{ maxWidth: "18rem" }}>

              <MDBCard className="item card h-100" >
              <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-top'
              src='https://www.hillspet.com/content/dam/cp-sites/hills/hills-pet/en_us/exported/cat-care/nutrition-feeding/images/white-and-orange-cat-eating-out-of-bowl.jpg'
              alt='food'
            />
          </MDBView>
          {this.state.cat.map(c =>
              <MDBCardBody>
                <MDBCardTitle >  Last Eating Time   </MDBCardTitle>
                <MDBCardText><b><Moment>{c.current_time}</Moment></b> </MDBCardText>
                
                

                

              </MDBCardBody>
          )}
            </MDBCard>
            </MDBCol>

            <MDBCol style={{ maxWidth: "18rem" }}>

              <MDBCard className="item card h-100" >
              <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-top'
              src='https://images-na.ssl-images-amazon.com/images/I/718eqn-Wx5L._AC_SY450_.jpg'
              alt='food'
            />
          </MDBView>
          {this.state.cat.map(c =>
              <MDBCardBody>
                <MDBCardTitle > Weight  </MDBCardTitle>
                <MDBCardText><b>{c.weight} KG</b> </MDBCardText>
            
                

                

              </MDBCardBody>
          )}
            </MDBCard>
            </MDBCol>


            <MDBCol style={{ maxWidth: "18rem" }}>

              <MDBCard className="item card h-100" >
              <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-top'
              src='https://www.almanac.com/sites/default/files/styles/amp_metadata_content_image_min_696px_wide/public/image_nodes/cat-4294526_1920.jpg?itok=oVV3vKdl'
              alt='food'
            />
          </MDBView>
          {this.state.cat.map(c =>
              <MDBCardBody>
                <MDBCardTitle > Age   </MDBCardTitle>
                <MDBCardText><b>{c.age} Years old</b> </MDBCardText>
            
                

                

              </MDBCardBody>
          )}
            </MDBCard>
            </MDBCol>
            
            

</MDBRow>





















      {/* <div className="chart">
      <MDBContainer>
        <h3 className="mt-5">Eating Chart</h3>
        <Bar data={this.state.dataBar} options={this.state.barChartOptions} />
      </MDBContainer>
      </div> */}
  
      </div>
    );
  }
}

export default Chart;