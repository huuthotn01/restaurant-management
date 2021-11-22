import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";

import "./InfoModal.css"
import CancelTableModel from './CancelTableModel'
export default function InfoModal(props) {
 
  var data = {
      code: props.code,
      phone: props.code,
      date: (new Date())
  }
 
  // useEffect(() => {
  //   fetch('../../data/canceltable.json').then(response => {
  //     return response.json();
  //   }).then(data => {
  //     // Work with JSON data here
  //     datacancal = data;
  //   }).catch(err => {
  //     // Do something for an error here
  //   });
  // });

  const postData = () => {
     fetch('/addCancelTable', {
      method: "POST",
      headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer'
      },
      body: JSON.stringify(data)
  });
  }
  const model = new CancelTableModel()
  const [thecase,setCase]= useState(0)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleClose1 = () => {
    setShow(false);
    setCase(3);
    setShow(true);
  }
  
  const handleShow = () => {
    if(props.code==='' && props.phone===''){
      alert("Bạn cần nhập đầy đủ thông tin!")
    }
    if(props.code===''){
         alert("Bạn cần nhập mã đặt bàn!")}
    else if(props.phone===''){
      alert("Bạn cần nhập số điện thoại!")

    }
    else{
    
      if (model.check_notexist(props.code,props.phone)  ){
        setShow(true);
        setCase(1)
      }
      else if(model.check_qtime(props.code,props.phone,new Date())){
        setShow(true);
        setCase(-1)
      }
       else if (model.check_hadCancel(props.code,props.phone)){
        setShow(true)
        setCase(2)
       }
       else if(model.check_noCast(props.code,props.phone)){
         setShow(true);
          setCase(3)
          postData()

       }
       else if(model.check_time(props.code,props.phone,new Date())){
         setShow(true);
         setCase(4);
         postData()
       }
       else {
         setShow(true);
         setCase(5);
       }
    
    
  }
}
const rever = (arr) => {
  var an = ''
  var ans=[]
  ans = arr.split('/');
  return   (ans[2]+'/'+ans[1]+'/'+ans[0]).toString();
  
}
  
  return (
   <div class="pb-5">
     
      <button type="button" class="btn send text-white" onClick={handleShow}>
      
        Hủy đặt bàn
      </button>
      {thecase===1 && (<Modal show={show} onHide={handleClose} centered >
        <Modal.Header style={{background: 'red', color: 'white'}}>
          <Modal.Title>Yêu cầu hủy đặt bàn không thành công</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Thông tin yêu cầu không tồn tại. Vui lòng kiểm tra lại!
        </Modal.Body>
        <Modal.Footer>
          <button type="button" class="btn unsent text-white" onClick={handleClose}>
            OK
          </button>
         
        </Modal.Footer>
      </Modal>)}

      {thecase===-1 && (<Modal show={show} onHide={handleClose} centered >
        <Modal.Header style={{background: 'red', color: 'white'}}>
          <Modal.Title>Yêu cầu hủy đặt bàn không hợp lệ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Vui lòng kiểm tra lại!
        </Modal.Body>
        <Modal.Footer>
          <button type="button" class="btn unsent text-white" onClick={handleClose}>
            OK
          </button>
         
        </Modal.Footer>
      </Modal>)}


      {thecase===2 && (<Modal show={show} onHide={handleClose} centered >
        <Modal.Header style={{background: 'red', color: 'white'}}>
          <Modal.Title>Yêu cầu hủy đặt bàn không thành công</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Đơn đặt bàn này đã được hủy trước đó. Vui lòng kiểm tra lại!
        </Modal.Body>
        <Modal.Footer>
          <button type="button" class="btn unsent text-white" onClick={handleClose}>
            OK
          </button>
         
        </Modal.Footer>
      </Modal>)}

      {thecase===3 && (<Modal show={show} onHide={handleClose} centered >
        <Modal.Header style={{background: '#f09a61', color: 'white'}}>
          <Modal.Title>Yêu cầu hủy đặt bàn thành công</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Nhà hàng chúng tôi luôn hân hoan chào đón quý khách!
        </Modal.Body>
        <Modal.Footer>
          <button type="button" class="btn unsent text-white" onClick={handleClose}>
            OK
          </button>
         
        </Modal.Footer>
      </Modal>)}

      {thecase===4 && (<Modal show={show} onHide={handleClose} centered >
        <Modal.Header style={{background: '#f09a61', color: 'white'}}>
          <Modal.Title>Yêu cầu hủy đặt bàn thành công</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>Phí đặt cọc sẽ được hoàn lại vào tài khoản Momo của quý khách trong vòng 24h.</div>
        <div>Nhà hàng chúng tôi luôn hân hoan chào đón quý khách!</div>
        </Modal.Body>
        <Modal.Footer>
          <button type="button" class="btn unsent text-white" onClick={handleClose}>
            OK
          </button>
         
        </Modal.Footer>
      </Modal>)}

      {thecase===5 && (<Modal show={show} onHide={handleClose} centered >
        <Modal.Header style={{background: '#f09a61', color: 'white'}}>
          <Modal.Title>Quá thời hạn cho phép</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>Thời gian hủy đặt cọc của quý khách quá thời hạn cho phép</div>
        <div>Quý khách vẫn muốn hủy đặt bàn và chấp nhận mất tiền cọc?</div>
        </Modal.Body>
        <Modal.Footer>
          <button type="button" class="btn unsent text-white" onClick={handleClose1}>
            Chấp nhận
          </button>
          <button type="button" class="btn unsent text-white" onClick={handleClose}>
            Hủy việc hủy đặt bàn
          </button>
         
        </Modal.Footer>
      </Modal>)}
    
    </div>
  );
}
