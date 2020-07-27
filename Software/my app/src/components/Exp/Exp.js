import React from "react";
import {  MDBRow, MDBCol, MDBIcon } from "mdbreact";


const Exp = () => {
  return (
    <section className="my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Why is it so great?
        </h2>
       

        <MDBRow>
          <MDBCol lg="5" className="text-center text-lg-left">
            <img
              className="img-fluid"
              src="https://images.immediate.co.uk/production/volatile/sites/4/2018/12/GettyImages-918529586-35c7227.jpg?quality=90&crop=61px%2C468px%2C7710px%2C3317px&resize=960%2C408"
              alt=""
            />
          </MDBCol>
          <MDBCol lg="7">
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Safety</h5>
                <p className="grey-text">
                  You can leave your cat home and be sure it will eat it's food.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Technology</h5>
                <p className="grey-text">
                You can see interesting  data about your cat with a comfortable and simple web user interface                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Simple</h5>
                <p className="grey-text">
                The product is easy to use, convenient and doesn't require prior knowledge
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </section>
  );
}

export default Exp;