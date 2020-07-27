import React from 'react';
import './CatData.css'
import Menu from '../Menu/Menu';
import Table from 'react-bootstrap/Table'
import Spinner from 'react-bootstrap/Spinner'
import Moment from 'react-moment';
import jwt_decode from 'jwt-decode'


class CatData  extends React.Component {
  constructor(){
    super();
    this.state={
      logs: [],
      isLoading: false,
      Firstname:'',
      Lastname:'',
      pseudo:''
    }
  }




  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
   // const user=this.state.pseudo;
    const ps=decoded.pseudo;
   
    const server = "http://localhost:3001/details/"+ps;

    fetch(server)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
           logs: result,
           isLoading: false,
           Firstname: decoded.Firstname,
           Lastname: decoded.Lastname,
            pseudo: decoded.pseudo
           
           
          });

        },
        
      ).catch(err=>alert("No Server Connection"));
      
     
  }


  
  render(){

    
    if (this.state.isLoading)
    return <div><Spinner className="spinner-border text-primary center   "  animation="border" role="status">
    <span className="sr-only ">Loading...</span>
  </Spinner></div>


if (this.state.logs.length===0){
   return(
     <div>
     <Menu/>
    {/* <div className="rec"
    ><h2>No Records!!!</h2>
    </div>*/}
      <div><Spinner className="spinner-border text-primary center   "  animation="border" role="status">
    <span className="sr-only ">Loading...</span>
  </Spinner></div>
    </div> 
   )
}
   
       
  // const data = {
  //   columns: [

  //     {
  //       label: 'Tag Id',
  //       field: 'tag_id',
  //       sort: 'asc',
  //       width: 100
  //     },
     
  //     {
  //       label: 'Date and Time',
  //       field: 'date_and_time',
  //       sort: 'asc',
  //       width: 100
  //     },
  //     {
  //       label: 'Weight',
  //       field: 'weight',
  //       sort: 'asc',
  //       width: 100
  //     },
      
  //     {
  //       label: 'Amount of food in grams',
  //       field: 'amount_of_food',
  //       sort: 'asc',
  //       width: 100
  //     }
     
  //   ],
    
  //   rows: [
  //     {
  //       tag_id: 'C5806523',
  //       date_and_time: '25/04/2020 14:36:54',
  //       weight:'9',
  //       amount_of_food:'45'
        
  //     },
  //     {
  //       tag_id: 'C5806528',
  //       date_and_time: '25/04/2020 14:36:54',
  //       weight:'15',
  //       amount_of_food:'89'
        
  //     },
  //     {
  //       tag_id: 'C5806522',
  //       date_and_time: '25/04/2020 14:36:54',
  //       weight:'10',
  //       amount_of_food:'12'
        
  //     },
      
      
      
      
  //   ]
  // };
  // const mystyle = {
  //   padding: "20px",
    
  //   width: "80%"

  // };
  


  return (
  <div>


  <Menu/> 
  <h2 className="underline">Log Information</h2>
  <Table hover id="selectedColumn" className=" table table-striped table-bordered table-sm" cellspacing="0" width="100% ">
  <thead>
    <tr>
      <th>Name </th>
      <th>Tag Id</th>
      <th>Date and Time</th>
      <th>Cat Weight</th>
      
      
    </tr>
  </thead>
  {this.state.logs.map(log =>
  <tbody>
    
    <tr>
      
   
      <td>{log.name}</td>
      <td>{log.tag_id}</td>
      <td><Moment>{log.current_time}</Moment></td>
      <td>{log.weight}</td>
     
     
    </tr>
   
  </tbody>
   )}
</Table>
  </div>
);
  }
  
}

export default CatData;