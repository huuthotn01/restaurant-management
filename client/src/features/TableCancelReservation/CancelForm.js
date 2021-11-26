import React, { Component } from 'react';
import "./CancelForm.css";
import InfoModal from "./InfoModal"
import { LoginContext } from '../SharedComponent/LoginContext';

class CancelForm extends Component {
  
  name = document.getElementById('name')
 password = document.getElementById('password')
 form = document.getElementById('cancelform')
  




  
  constructor(props) {
    super(props);
    this.state = {value1: ''};
    this.state = {value2: ''};
    
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange1(event) {
    this.setState({value1: event.target.value});
    
  }
  handleChange2(event) {
    this.setState({value2: event.target.value});
    
  }
   handleSubmit(event) {
     this.code = this.state.value1;
     this.phone = this.state.value2;
     if (this.code===''){
       alert('no');
     }
     
   }
  render(){
  return (
    <form
      class="cancelform pb-2 row g-1"
      style={{
        width: "340px",
        justifyContent: "center",
        alignItems: "center",
      }}
      onSubmit={this.handleSubmit} >
      <h2 style={{ textAlign: "center", color: "#EA6A12", marginTop: "30px" }}>
      {this.context.lang === "vi" ?"Thông tin hủy đặt bàn":"Cancellation information"}
       
      </h2>
      <div class="col-12">
        <label for="exampleText1" class="form-label">
        {this.context.lang === "vi" ?"Số điện thoại":"Phone number"}
        </label>
        <input required type="text" class="form-control" id="validationCustomUsername"  value2={this.state.value2} onChange={this.handleChange2}/>
        
      
      </div>
      <div class="col-12">
        <label for="examplePhoneNumber" class="form-label" >
        {this.context.lang === "vi" ?"Mã đặt bàn":"Reservation code"}
        </label>
        <input type="tel" class="form-control" id="examplePhoneNumber" value1={this.state.value1} onChange={this.handleChange1}/> 
      </div>

      <div class="col-12">
        <label for="exampleText" class="form-label">
        {this.context.lang === "vi" ?"Ghi chú":"Note"}
        </label>
        <input type="textarea" class="form-control" id="exampleText" />
      </div>

      <div class="col-12 text-center">
      <InfoModal
        code = {this.state.value1}
        phone = {this.state.value2}
      ></InfoModal> 
        
      </div>
    </form>
  );
}

}
CancelForm.contextType = LoginContext;
export default CancelForm