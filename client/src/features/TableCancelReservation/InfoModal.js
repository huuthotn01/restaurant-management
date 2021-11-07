import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import "./InfoModal.css"
import CancelTableModel from './CancelTableModel'
export default function InfoModal(props) {
  const [show, setShow] = useState(false);
  const model = new CancelTableModel()
  
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button type="button" class="btn send text-white" onClick={handleShow}>
        Hủy đặt bàn
      </button>
      <Modal show={show} onHide={handleClose} centered >
        <Modal.Header style={{background: '#f09a61', color: 'white'}}>
          <Modal.Title>
          {model.check_reser(props.code, props.phone) && <div>Yêu cầu hủy đặt bàn thành công</div>}
          {!model.check_reser(props.code, props.phone) && <div>Yêu cầu hủy đặt bàn không thành công</div>}
          </Modal.Title>
        </Modal.Header>
       
        <Modal.Body >
        {model.check_reser(props.code, props.phone) && <div><h5>Đơn đặt bàn với mã đặt bàn <h5>{props.code}</h5> của quý khách đã được hủy thành công.</h5><h5> Trân trọng.</h5></div>  }
        {!model.check_reser(props.code, props.phone) && <div><h5>Thông tin quý khách nhập không đúng.</h5> <h5>Quý khách vui lòng kiểm tra lại.</h5></div> }

         </Modal.Body>
        
        <Modal.Footer>
          
          <button type="button" class="btn send text-white centered" onClick={handleClose}>
            OK
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
