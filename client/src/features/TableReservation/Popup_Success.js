import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, NavLink } from "react-bootstrap";
import './Popup_Success.css';
import { useHistory } from 'react-router-dom';

export default function InfoModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const handleClick = () => history.push('/payment');
  return (
    <>
      <button type="button" class="btn send text-white" onClick={handleShow}>
        Đặt bàn ngay
      </button>
      <Modal show={show} onHide={handleClose} centered >
        <Modal.Header style={{background: '#f09a61', color: 'white'}}>
          <Modal.Title>Gửi yêu cầu đặt bàn thành công</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Quý khách đã đặt 2 bàn 4 người vào 2:00 PM, 20/11/2021, thời lượng sử dụng là 3 giờ.
        Phí đặt cọc của quý khách là 400 000 VNĐ. 
        Vui lòng thanh toán trong vòng 2 giờ đồng hồ để hoàn tất đặt bàn.
        </Modal.Body>
        <Modal.Footer>
          <button type="button" class="btn unsent text-white" onClick={handleClose}>
            Hủy yêu cầu
          </button>
          <button type="button" class="btn send text-white" onClick={handleClick}>
            Thanh toán
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
