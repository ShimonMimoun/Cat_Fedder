// import React from "react";
// import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
// import './Register.css'
// import { Link} from 'react-router-dom'
// import Home from "../Home/Home";


// class Register extends React.Component {
// constructor(){
//   super()
//   this.state={
//     Firstname: '',
//     Lastname: '',
//     user: '',
//     email: '',
//     password: ''
//   }

//   this.onChange = this.onChange.bind(this)
//   this.onSubmit = this.onSubmit.bind(this)
// }

// onChange(e) {
//   this.setState({ [e.target.name]: e.target.value })
// }
// onSubmit(e) {
//   e.preventDefault()

//   const newUser = {
//     first_name: this.state.first_name,
//     last_name: this.state.last_name,
//     user:this.state.user,
//     email: this.state.email,
//     password: this.state.password
//   }

//   // register(newUser).then(res => {
//   //   this.props.history.push(`/login`)
//   // })
// }

 
//   render(){

//   return (
//     <div>
//     <Home/>    

//     <div className="register">

//     <MDBContainer>
//       <MDBRow>
//         <MDBCol md="6">
//           <MDBCard style={{ width: "22rem" }}>
//             <MDBCardBody>
//               <form  method="POST" noValidate onSubmit={this.onSubmit}  >
//                 <p className="h4 text-center py-4">Sign up</p>
//                 <div className="grey-text">
//                   <MDBInput
//                     label="Your First Name"
//                     icon="user"
//                     group
//                     type="text"
//                     validate
//                     error="wrong"
//                     success="right"
//                    // value={this.state.Firstname}
//                     onChange={this.onChange}
//                   />
//                    <MDBInput
//                     label="Your Last Name"
//                     icon="user"
//                     group
//                     type="text"
//                     validate
//                     error="wrong"
//                     success="right"
//                  //   value={this.state.Lastname}
//                     onChange={this.onChange}
//                   />
//                   <MDBInput
//                     label="Choose user"
//                     icon="cat"
//                     group
//                     type="text"
//                     validate
//                     error="wrong"
//                     success="right"
//               //      value={this.state.user}
//                      onChange={this.onChange}
//                   />
//                   <MDBInput
//                     label="Your email"
//                     icon="envelope"
//                     group
//                     type="email"
//                     validate
//                     error="wrong"
//                     success="right"
//               //      value={this.state.email}
//                   onChange={this.onChange}
//                   />
                  
//                   <MDBInput
//                     label="Your password"
//                     icon="lock"
//                     group
//                     type="password"
//                     validate
//                //     value={this.state.password}
//                   onChange={this.onChange}
//                   />
//                 </div>
//                 <div className="text-center py-4 mt-3">
//                   <MDBBtn color="cyan" type="submit">
//                     Register
//                   </MDBBtn>
//                 </div>
//                 <div className="link"> <Link to="/signin">Login into your acount</Link></div>
//               </form>
//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//     </div>
    
//     </div>
//   );
//   }
// };

// export default Register;




import React, { Component } from 'react'
import { register } from "../UserFunctions/UserFunctions";
import { Link} from 'react-router-dom'
import './Register.css'
import Home from "../Home/Home";

class Register extends Component {
  constructor() {
    super()
    this.state = {
      FirstName: '',
      Lastname: '',
      pseudo: '',
      mail: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const newUser = {
      Firstname: this.state.Firstname,
      Lastname: this.state.Lastname,
      pseudo :this.state.pseudo,
      mail: this.state.mail,
      password: this.state.password
    }

    register(newUser).then(res => {
      this.props.history.push(`/signin`)
    })
  }

  render() {
    return (
<div>
      <Home/> 
      <div className="container c">
        <div className="row">
          <div className="col-md-4 mt-4 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="tex cen">Register</h1>
              <div className="form-group">
                <label htmlFor="name">First name</label>
                <input
                  type="text"
                  className="form-control"
                  name="Firstname"
                  //placeholder="Enter your first name"
                  value={this.state.first_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  name="Lastname"
                  //placeholder="Enter your lastname name"
                  value={this.state.last_name}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="user">User Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="pseudo"
                  //placeholder="Enter User Name"
                  value={this.state.pseudo}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="mail"
                  //placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  //placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register
              </button>
            </form>
          </div>
        </div>

        <div className="link"> <p> Have an account? </p> <Link to="/signin">Sign In</Link></div>

      </div>
      </div>
    )
  }
}

export default Register;
