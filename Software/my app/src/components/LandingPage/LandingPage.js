import React from 'react'
import {
  Hero, CallToAction, ScrollDownIndicator, Heading, Section
} from 'react-landing-page'
import {   MDBCol, MDBIcon } from "mdbreact";
import   "./LandingPage.css"
import Gallery from '../Gallery/Gallery';
import Exp from '../Exp/Exp';



 class LandingPage extends React.Component{


    render(){
        return(

<div>
    <Hero
      color="black"
      bg="white"
      backgroundImage="https://cattime.com/assets/uploads/2017/05/feline-eating-disorders-11-1280x720.jpg"
      
 >     
        <Heading>Welcome To CatFeeder</Heading>

        <CallToAction href="/signin" mt={3}>Sign In</CallToAction>
        <CallToAction href="/register" mt={3}>Register</CallToAction>

        <ScrollDownIndicator/>
    </Hero>

    
<Section
    className=""
    bg='AliceBlue'
    heading=""
    subhead="">

    <Exp/>

</Section>

    <Section
    className=""
    bg='Snow'
    heading="Easy Way To Feed Your Cat"
    subhead="Our Product">

    <Gallery/>

</Section>


   

<Section
    className=""
    bg='AliceBlue'
    heading=""
    subhead="">

      
<div className="contact">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Contact us
      </h2>
      <MDBCol md="12" className="text-center">
          <ul className="list-unstyled mb-0">
            <li>
              <MDBIcon icon="map-marker-alt" size="2x" className="blue-text" />
              <p>Ariel, ISRAEL</p>
            </li>
            <li>
              <MDBIcon icon="phone" size="2x" className="blue-text mt-4" />
              <p>+ 972 544 677 432</p>
              

            </li>
            <li>
              <MDBIcon icon="envelope" size="2x" className="blue-text mt-4" />
              <p>naoreliav7@gmail.com</p>
              <p>Shimon1705@gmail.com</p>
              <p>nahamaweill@gmail.com</p>
            </li>
          </ul>
        </MDBCol>
        </div>

   
</Section>





   
   
  </div>

        )


    }
  
 }

 export default LandingPage;