import React from 'react';
import './App.css';
import Signin from './components/signIn/Signin'
import Register from './components/Register/Register'
import Chart from './components/Chart/Chart'
import AddCat from './components/AddCat/AddCat'
import CatData from './components/CatData/CatData'
import HomePage from './components/HomePage/HomePage'
import LandingPage from './components/LandingPage/LandingPage'


import { Route, Switch, BrowserRouter} from 'react-router-dom'



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      route: 'signin',
    }
  }

  onRouteChange =(route)=>{
    this.setState({route: route});
  }

      
  render(){
    return(
      
      <div className="App">

      <BrowserRouter>
      <div className="App"> 
      <Switch>
       <Route path ='/' component={LandingPage} exact />
        <Route path ='/signin' component={Signin} exact />
        <Route path ='/register' component={Register} exact />
         <Route path ='/home' component={HomePage} exact /> 
      {/* <Route path='/AboutTheCat' component={Chart } /> */}
      <Route path='/AboutTheCat/:id' render={(props) => <Chart {...props}/>}/>

        <Route path='/AddCat' component={ AddCat} />
        <Route path='/Details' component={CatData } />  
      </Switch>  


     

      </div> 
      
</BrowserRouter>




 
  
  
  
         

          </div>
    )
  }
}

export default App;
