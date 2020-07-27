// import React from "react";
// import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
// import './SignIn.css'
// import { Link} from 'react-router-dom'
// import Home from "../Home/Home";
// import { login } from "../UserFunctions/UserFunctions";


// class SignIn extends React.Component  {
//   constructor() {
//     super()
//     this.state = {
//       mail: '',
//       password: '',
//       errors: {}
//     }

//     this.onChange = this.onChange.bind(this)
//     this.onSubmit = this.onSubmit.bind(this)
//   }

//   onChange(e) {
//     this.setState({ [e.target.name]: e.target.value })
//   }
//   onSubmit(e) {
//     e.preventDefault()

//     const user = {
//       mail: this.state.mail,
//       password: this.state.password
//     }

//     login(user).then(res => {
//       if (res) {
//         this.props.history.push(`/home`)
//       }
//     })
//   }


// render(){
//   const { onRouteChange } = this.props;

//   return (
//     <div>
      
// <Home/>
  
//   <div className="signin">
// <MDBContainer>
//   <MDBRow>
//     <MDBCol md="6">
//     <MDBCard style={{ width: "22rem" }}>
//     <MDBCardBody>
//       <form noValidate onSubmit={this.onSubmit}>
//         <p className="h5 text-center mb-4">Sign in</p>
//         <div className="grey-text">
//           <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
//             success="right"  
//             className="form-control"
//             name="mail"
//             value={this.state.mail}
//             onChange={this.onChange}   />
//           <MDBInput label="Type your password" icon="lock" group type="password" validate  onChange={this.onPasswordChange}     />
//         </div>
      
//         <div className="text-center">
//           <MDBBtn type="submit"  color="cyan"  onClick={this.onSubmitSignIn}>Login</MDBBtn>
//         </div>
//         <div className="link"> <Link to="/register">Create an account</Link></div>
//       </form>
//       </MDBCardBody>
//           </MDBCard>
//     </MDBCol>
//   </MDBRow>
// </MDBContainer>
// </div>
// </div>
// );

// }


  

// };

// export default SignIn;


////////////////////////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react'
import { login } from "../UserFunctions/UserFunctions";
import Home from "../Home/Home";
import { Link} from 'react-router-dom'
import './SignIn.css'


class SignIn  extends Component {
  constructor() {
    super()
    this.state = {
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

    const user = {
      mail: this.state.mail,
      password: this.state.password
    }

    login(user).then(res => {
      if (res) {
        this.props.history.push(`/home`)
      }
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
              <h1 className="tex cen ">Sign In</h1>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="mail"
                  placeholder="Enter email"
                  value={this.state.mail}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
       
       <div className="link"> <p>Don't have an account? </p> <Link to="/register">Create an account</Link></div>

      </div>
      </div>

    )
  }
}

export default SignIn;