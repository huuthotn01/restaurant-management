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
        phonenum: "",
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
          phonenum: this.state.phonenum,
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
      alert("Thanh toán thành công!\nThông tin đặt bàn sẽ được gửi email của quý khách!");
      $("#form1").trigger("reset");
    }

    onSubmit = e => {
      e.preventDefault();
      let hour = (this.state.time[0] -'0') * 10 + (this.state.time[1] -'0');
      if (this.state.type2 === 0 && this.state.type4 === 0 && this.state.type8 === 0 && this.state.type12 === 0)
        alert("Vui lòng chọn số bàn!")
      else if (hour < 8 || hour > 22)
        alert("Nhà hàng chỉ mở cửa từ 8:00 đến 22:00 hàng ngày!");
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
          <h3 style={{textAlign: "center", lineHeight:'5px', color: "#EA6A12", marginTop: '80px', marginBottom: '40px'}}>Thông tin đặt bàn</h3>
          <div class="col-md-6 mb-1">
            <label for="exampleText1" class="form-label">Họ và tên</label>
            <input type="text" class="form-control" id="exampleText1" name='name' value={this.state.name} onChange={(e)=> this.handleChange(e)} aria-describedby="inputGroupPrepend2" required/>
          </div>
          <div class="col-md-6 mb-1">
            <label for="examplePhoneNumber" class="form-label">Số điện thoại</label>
            <input type="tel" class="form-control" id="examplePhoneNumber" name='phonenum' value={this.state.phonenum} onChange={(e)=> this.handleChange(e)} pattern="[0-9]{10}" required/>
          </div>
          <div class="col-12 mb-1">
            <label for="exampleEmail" class="form-label">Email</label>
            <input type="email" class="form-control" id="exampleEmail" name='email' value={this.state.email} onChange={(e)=> this.handleChange(e)} required/>
          </div>
          <div class="col-md-6 mb-1">
            <label for="exampleDate" class="form-label">Ngày nhận bàn</label>
            <input type="date" class="form-control" id="exampleDate" name='date' value={this.state.date} onChange={(e)=> this.handleChange(e)}
            min = {this.myCurrentDate.getFullYear() + '-' + (this.myCurrentDate.getMonth()+1) + '-' + this.myCurrentDate.getDate()}
            required/>
          </div>
          <div class="col-md-6 mb-1">
            <label for="exampleTime" class="form-label">Giờ nhận bàn</label>
            <input type="time" class="form-control" id="exampleTime" name='time' value={this.state.time} onChange={(e)=> this.handleChange(e)} min="8:00" required/>
          </div>
          <div class="col-12 mb-1">
            <label for="exampleSelect" class="form-label">Thời gian sử dụng (giờ)</label>
              <select class="form-select" id="exampleSelect" name='duration' value={this.state.duration} onChange={(e)=> this.handleChange(e)} required>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
              </select>
          </div>
          <div class="col-md-6 mb-1">
            <label for="exampleSelect1" class="form-label">Số lượng bàn 2 người</label>
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
            <label for="exampleSelect2" class="form-label">Số lượng bàn 4 người</label>
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
            <label for="exampleSelect3" class="form-label">Số lượng bàn 8 người</label>
            <select class="form-select" id="exampleSelect3" name='type8' value={this.state.type8} onChange={(e)=> this.handleChange(e)} required>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
          </div>
          <div class="col-md-6 mb-1">
            <label for="exampleSelect4" class="form-label">Số lượng bàn 12 người</label>
            <select class="form-select" id="exampleSelect4" name='type12' value={this.state.type12} onChange={(e)=> this.handleChange(e)} required>
                <option>0</option>
                <option>1</option>
                <option>2</option>
            </select>
          </div>
          <div class="col-12 mb-1">
            <label for="exampleText" class="form-label">Ghi chú</label>
            <input type="textarea" class="form-control" id="exampleText" name='note' value={this.state.note} onChange={(e)=> this.handleChange(e)}/>
          </div>
          <div class="text-center">
            <button type="submit" class="btn send text-white">
              Đặt bàn ngay
            </button>
            <Modal show={this.state.show} onHide={this.handleCancel} centered >
              <Modal.Header style={{background: '#f09a61', color: 'white'}}>
                <Modal.Title>Gửi yêu cầu đặt bàn thành công</Modal.Title>
              </Modal.Header>
              <Modal.Body class="text-justify ms-3 me-2">
              <h6 class="mt-2">Cảm ơn quý khách đã đặt bàn!</h6>
              <h6>Đơn đặt bàn của quý khách gồm {this.state.type2? this.state.type2 + " bàn 2 người ": ""} {this.state.type4? (this.state.type2? "- " + this.state.type4 + " bàn 4 người ": this.state.type4 + " bàn 4 người "): ""} 
              {this.state.type8? ((this.state.type2 > 0 || this.state.type4 > 0)? "- " + this.state.type8 + " bàn 8 người ": this.state.type8 + " bàn 8 người "): ""} 
              {this.state.type12? ((this.state.type2 > 0 || this.state.type4 > 0 || this.state.type8 > 0)? "- " + this.state.type12 + " bàn 12 người ": this.state.type12 + " bàn 12 người "): ""}
              vào {this.state.time}, {moment(new Date(this.state.date)).format("DD/MM/YYYY")}, thời lượng sử dụng là {this.state.duration} giờ.</h6>
              <h6>Phí đặt cọc của quý khách là {this.state.depositfee.toLocaleString('vi-VN')} VNĐ.</h6>
              <h6>Vui lòng thanh toán phí đặt cọc để hoàn tất đặt bàn.</h6>
              <img alt="" style={{marginLeft: '70px'}}width="300px" height="300px" src={`https://momosv3.apimienphi.com/api/QRCode?phone=0971083236&amount=${this.state.depositfee}& note=${this.state.depositfee.toLocaleString('vi-VN')}đ`}/>
              </Modal.Body>
              <Modal.Footer>
                <button type="button" class="btn unsent text-white" onClick={this.handleCancel}>
                  Hủy yêu cầu
                </button>
                <button type="button" class="btn send text-white" onClick={this.handlePayment}>
                  Thanh toán
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
