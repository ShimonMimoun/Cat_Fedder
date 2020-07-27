import React from "react";
import {  MDBContainer, MDBRow, MDBCol, MDBCardImage } from "mdbreact";

import  "./Home.css"


const JumbotronPage = () => {
  return (
      <div>
      
    <MDBContainer className="mt-5 text-center position-absolute   ">
      <MDBRow>
        <MDBCol>
          
       
            <MDBCardImage 
              src="https://petcentral.chewy.com/wp-content/uploads/what-do-cats-eat-article-1.jpg"
              className="img-fluid " 
            />
           
           
            

        </MDBCol>
      
      </MDBRow>
    </MDBContainer>
    
    
    </div>
  )
}

export default JumbotronPage;



