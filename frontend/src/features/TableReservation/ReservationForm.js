import React, {useState} from "react";
import "./ReservationForm.css";
import { Modal } from "react-bootstrap";
import * as moment from 'moment';
import {LoginContext} from '../SharedComponent/LoginContext'
import TableReservationModel from './ReservationModel';
import $ from 'jquery';

class ReservationForm extends React.Component{
    myCurrentDate = new Date();
    model = new TableReservationModel();
    constructor(props){
      super(props);
      this.state = {
        show: false,
        code: "",
        isMember: false, 
        name: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        duration: 2,
        type2: 0,
        type4: 0,
        type8: 0,
        type12: 0,
        note: "",
        depositfee: 0,
        tables: []
      }
      this.handleCancel = this.handleCancel.bind(this);
      this.handlePayment = this.handlePayment.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

    handleCancel = () => {
      this.setState({show: false});
    }

    async handlePayment(){
      var array1 = this.model.getTable(2, this.state.type2);
      var array2 = this.model.getTable(4, this.state.type4);
      var array3 = this.model.getTable(8, this.state.type8);
      var array4 = this.model.getTable(12, this.state.type12);
      var table = array1.concat(array2.concat(array3.concat(array4)))
      this.setState({show: false});
      this.setState({code: this.model.generateReservationCode(), tables: table}, () => {
        let reservation_data = {
          code: this.state.code,
          isMember: this.context.isIn, 
          name: this.state.name,
          phone: this.state.phonenum,
          email: this.state.email,
          date: moment(new Date(this.state.date)).format("DD/MM/YYYY"),
          time: this.state.time,
          duration: parseInt(this.state.duration),
          type2: parseInt(this.state.type2),
          type4: parseInt(this.state.type4),
          type8: parseInt(this.state.type8),
          type12: parseInt(this.state.type12),
          note: this.state.note,
          depositfee: this.state.depositfee,
          tables: this.state.tables
        };
        fetch('/reservation', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer'
            },
            body: JSON.stringify(reservation_data)
        }, (response) => {
            console.log(response);
        });
        //if (response.status !== 200) console.log("Error occurred!");
      })
      alert(this.context.lang === "vi"? "Thanh to??n th??nh c??ng!\nTh??ng tin ?????t b??n s??? ???????c g???i email c???a qu?? kh??ch!": "Successfully payment!\nYour reservation information will be sent to your email!");
      $("#form1").trigger("reset");
    }

    onSubmit = e => {
      e.preventDefault();
      let hour = (this.state.time[0] -'0') * 10 + (this.state.time[1] -'0');
      if (this.state.type2 === 0 && this.state.type4 === 0 && this.state.type8 === 0 && this.state.type12 === 0)
        alert(this.context.lang === "vi"? "Vui l??ng ch???n s??? b??n!": "Please choose the number of tables!")
      else if (hour < 8 || hour > 21)
        alert(this.context.lang === "vi"? "Th???i gian nh???n b??n tr??? nh???t l?? 21:00!": "The latest time for table reservation is 21:00!");
      else {
      this.caculateDeposit();
      this.setState({show: true});
      }
    }

    handleChange(e){
      this.setState({[e.target.name]: e.target.value});
    }

    caculateDeposit(){
      if (!this.context.isIn){
        let fee = this.state.type2 * 100000 + this.state.type4 * 200000 + this.state.type8 * 300000 + this.state.type12 * 500000;
        this.setState({depositfee: fee});
      }
      else {
        let maxSlots = this.state.type2 * 2 + this.state.type4 * 4 + this.state.type8 * 8 + this.state.type12 * 12;
        if (maxSlots <= 12)
          this.setState({depositfee: 0});
        else this.setState({depositfee: this.state.type2 * 50000 + this.state.type4 * 100000 + this.state.type8 * 150000 + this.state.type12 * 250000});
      }
    }

    render(){
      return (
        <form onSubmit={this.onSubmit} id="form1" class="row mb-5" style={{width: '80%'}}>
          <h3 style={{textAlign: "center", lineHeight:'5px', color: "#EA6A12", marginTop: '80px', marginBottom: '40px'}}>{this.context.lang === "vi"? "Th??ng tin ?????t b??n": "Reservation Form"}</h3>
          <div class="col-md-6 mb-1">
            <label for="exampleText1" class="form-label">{this.context.lang === "vi"? "H??? v?? t??n": "Name"}</label>
            <input type="text" class="form-control" id="exampleText1" name='name' value={this.state.name} onChange={(e)=> this.handleChange(e)} aria-describedby="inputGroupPrepend2" required/>
          </div>
          <div class="col-md-6 mb-1">
            <label for="examplePhoneNumber" class="form-label">{this.context.lang === "vi"? "S??? ??i???n tho???i": "Phone number"}</label>
            <input type="tel" class="form-control" id="examplePhoneNumber" name='phonenum' value={this.state.phonenum} onChange={(e)=> this.handleChange(e)} pattern="[0-9]{10}" required/>
          </div>
          <div class="col-12 mb-1">
            <label for="exampleEmail" class="form-label">Email</label>
            <input type="email" class="form-control" id="exampleEmail" name='email' value={this.state.email} onChange={(e)=> this.handleChange(e)} required/>
          </div>
          <div class="col-md-6 mb-1">
            <label for="exampleDate" class="form-label">{this.context.lang === "vi"? "Ng??y nh???n b??n": "Date Reservation"}</label>
            <input type="date" class="form-control" id="exampleDate" name='date' value={this.state.date} onChange={(e)=> this.handleChange(e)}
            min = {this.myCurrentDate.getFullYear() + '-' + (this.myCurrentDate.getMonth()+1) + '-' + this.myCurrentDate.getDate()}
            required/>
          </div>
          <div class="col-md-6 mb-1">
            <label for="exampleTime" class="form-label">{this.context.lang === "vi"? "Gi??? nh???n b??n": "Time Reservation"}</label>
            <input type="time" class="form-control" id="exampleTime" name='time' value={this.state.time} onChange={(e)=> this.handleChange(e)} min="8:00" required/>
          </div>
          <div class="col-12 mb-1">
            <label for="exampleSelect" class="form-label">{this.context.lang === "vi"? "Th???i gian s??? d???ng (gi???)": "Duration (hour)"}</label>
              <select class="form-select" id="exampleSelect" name='duration' value={this.state.duration} onChange={(e)=> this.handleChange(e)} required>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
              </select>
          </div>
          <div class="col-md-6 mb-1">
            <label for="exampleSelect1" class="form-label">{this.context.lang === "vi"? "S??? l?????ng b??n 2 ng?????i": "Table For 2"}</label>
            <select class="form-select" id="exampleSelect1" name='type2' value={this.state.type2} onChange={(e)=> this.handleChange(e)} required>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
          </div>
          <div class="col-md-6 mb-1">
            <label for="exampleSelect2" class="form-label">{this.context.lang === "vi"? "S??? l?????ng b??n 4 ng?????i": "Table For 4"}</label>
            <select class="form-select" id="exampleSelect2" name='type4' value={this.state.type4} onChange={(e)=> this.handleChange(e)} required>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
          </div>
          <div class="col-md-6 mb-1">
            <label for="exampleSelect3" class="form-label">{this.context.lang === "vi"? "S??? l?????ng b??n 8 ng?????i": "Table For 8"}</label>
            <select class="form-select" id="exampleSelect3" name='type8' value={this.state.type8} onChange={(e)=> this.handleChange(e)} required>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
          </div>
          <div class="col-md-6 mb-1">
            <label for="exampleSelect4" class="form-label">{this.context.lang === "vi"? "S??? l?????ng b??n 12 ng?????i": "Table For 12"}</label>
            <select class="form-select" id="exampleSelect4" name='type12' value={this.state.type12} onChange={(e)=> this.handleChange(e)} required>
                <option>0</option>
                <option>1</option>
                <option>2</option>
            </select>
          </div>
          <div class="col-12 mb-1">
            <label for="exampleText" class="form-label">{this.context.lang === "vi"? "Ghi ch??": "Notes"}</label>
            <input type="textarea" class="form-control" id="exampleText" name='note' value={this.state.note} onChange={(e)=> this.handleChange(e)}/>
          </div>
          <div class="text-center">
            <button type="submit" class="btn send text-white">
            {this.context.lang === "vi"? "?????t b??n ngay": "Send Request"}
            </button>
            <Modal show={this.state.show} onHide={this.handleCancel} centered >
              <Modal.Header style={{background: '#f09a61', color: 'white'}}>
                <Modal.Title>{this.context.lang === "vi"? "G???i y??u c???u ?????t b??n th??nh c??ng": "Send Request Successfully"}</Modal.Title>
              </Modal.Header>
              <Modal.Body class="text-justify ms-3 me-2">
              <h6 class="mt-2">{this.context.lang === "vi"? "C???m ??n qu?? kh??ch ???? ?????t b??n!": "Thank you for taking table reservation!"}</h6>
              <h6>{this.context.lang === "vi"? "????n ?????t b??n c???a qu?? kh??ch g???m": "Your table reservation includes"} {this.state.type2? (this.context.lang === "vi"? this.state.type2 + " b??n 2 ng?????i ": this.state.type2 + " table(s) type 2 "): ""} 
              {this.state.type4? ((this.state.type2? "- " + this.state.type4: this.state.type4) + (this.context.lang === "vi"? " b??n 4 ng?????i ": " table(s) type 4 " )): ""}
              {this.state.type8? (((this.state.type2 > 0 || this.state.type4 > 0)? "- " + this.state.type8: this.state.type8) + (this.context.lang === "vi"? " b??n 8 ng?????i ": " table(s) type 8 " )): ""} 
              {this.state.type12? (((this.state.type2 > 0 || this.state.type4 > 0 || this.state.type8 > 0)? "- " + this.state.type12: this.state.type12) + (this.context.lang === "vi"? " b??n 12 ng?????i ": " table(s) type 12 " )): ""} 
              {this.context.lang === "vi"? "v??o": "at"} {this.state.time}, {moment(new Date(this.state.date)).format("DD/MM/YYYY")}, {this.context.lang === "vi"? "th???i l?????ng s??? d???ng l??": "duration is"} {this.state.duration} {this.context.lang === "vi"? "gi???.": "hours."}</h6>
              {!this.state.depositfee && 
              <h6>{this.context.lang === "vi"? "Qu?? kh??ch ???????c mi???n ph?? ?????t c???c.": "You get free deposit."}</h6>}
              {!this.state.depositfee && 
              <h6>{this.context.lang === "vi"? "Vui l??ng x??c nh???n ????? ho??n t???t ?????t b??n.": "Please confirm to complete reservation."}</h6>}
              {this.state.depositfee > 0 && 
              <h6>{this.context.lang === "vi"? "Ph?? ?????t c???c c???a qu?? kh??ch l??": "Your deposit fee is"} {this.state.depositfee.toLocaleString('vi-VN')} VN??.</h6>}
              {this.state.depositfee > 0 && 
              <h6>{this.context.lang === "vi"? "Vui l??ng thanh to??n ph?? ?????t c???c ????? ho??n t???t ?????t b??n.": "Please take payment for deposit fee to complete reservation."}</h6>}
              {this.state.depositfee > 0 && 
              <div class="d-flex justify-content-center align-items-center">
                <img class="text-center" alt="" width="300px" height="300px" src={`https://momosv3.apimienphi.com/api/QRCode?phone=0971083236&amount=${this.state.depositfee}& note=${this.state.depositfee.toLocaleString('vi-VN')}??`}/>
              </div>}
              </Modal.Body>
              <Modal.Footer>
                <button type="button" class="btn unsent text-white" onClick={this.handleCancel}>
                {this.context.lang === "vi"? "H???y y??u c???u": "Cancel Request"}  
                </button>
                <button type="button" class="btn send text-white" onClick={this.handlePayment}>
                {!this.context.isIn? (this.context.lang === "vi"? "Thanh to??n": "Take Payment"): (this.context.lang === "vi"? "X??c nh???n": "Confirm")}
                </button>
              </Modal.Footer>
            </Modal>
          </div>
        </form>
    );
    }
}

ReservationForm.contextType = LoginContext;
export default ReservationForm;
