import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import { LoginContext } from "../SharedComponent/LoginContext";
import "./InfoModal.css";
import CancelTableModel from "./CancelTableModel";
export default function InfoModal(props) {
  const model = new CancelTableModel();

  const [refund, setrefund] = useState(false);

  const postData = (s) => {
    var data = {
      code: props.code,
      phone: props.phone,
      date: new Date().toLocaleDateString(),
      refund: s,
    };
    fetch("/addCancelTable", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer",
      },
      body: JSON.stringify(data),
    });
  };

  const [thecase, setCase] = useState(0);

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleClose2 = () => {
    setrefund(true);
    postData(model.find_cast(props.code, props.phone));
    setShow(false);
  };
  const handleClose1 = () => {
    setShow(false);
    setCase(3);
    setShow(true);

    postData(0);
  };

  const handleShow = () => {
    if (props.code === "" && props.phone === "") {
      alert("Bạn cần nhập đầy đủ thông tin!");
    }
    if (props.code === "") {
      alert("Bạn cần nhập mã đặt bàn!");
    } else if (props.phone === "") {
      alert("Bạn cần nhập số điện thoại!");
    } else {
      if (model.check_notexist(props.code, props.phone)) {
        setShow(true);
        setCase(1);
      } else if (model.check_qtime(props.code, props.phone, new Date())) {
        setShow(true);
        setCase(-1);
      } else if (model.check_hadCancel(props.code, props.phone)) {
        setShow(true);
        setCase(2);
      } else if (model.check_noCast(props.code, props.phone)) {
        setShow(true);
        setCase(3);

        postData(0);
      } else if (model.check_time(props.code, props.phone, new Date())) {
        setShow(true);
        setCase(4);
      } else {
        setShow(true);
        setCase(5);
      }
    }
  };
  const rever = (arr) => {
    var an = "";
    var ans = [];
    ans = arr.split("/");
    return (ans[2] + "/" + ans[1] + "/" + ans[0]).toString();
  };

  return (
    <LoginContext.Consumer>
      {(data) => (
        <div class="pb-5">
          <button
            type="button"
            class="btn send text-white"
            onClick={handleShow}
          >
            {data.lang === "vi"?"Hủy đặt bàn":"Canceling a reservation"}
          </button>
          {thecase === 1 && (
            <Modal show={show} onHide={handleClose} centered>
              <Modal.Header style={{ background: "red", color: "white" }}>
                <Modal.Title>
                  {data.lang === "vi"
                    ? "Yêu cầu hủy đặt bàn không thành công"
                    : "Cancellation request failed"}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {data.lang === "vi"
                  ? "Thông tin yêu cầu không tồn tại. Vui lòng kiểm tra lại!"
                  : "The requested information does not exist. Please check again!"}
              </Modal.Body>
              <Modal.Footer>
                <button
                  type="button"
                  class="btn unsent text-white"
                  onClick={handleClose}
                >
                  OK
                </button>
              </Modal.Footer>
            </Modal>
          )}

          {thecase === -1 && (
            <Modal show={show} onHide={handleClose} centered>
              <Modal.Header style={{ background: "red", color: "white" }}>
                <Modal.Title>
                  {data.lang === "vi"
                    ? "Yêu cầu hủy đặt bàn không hợp lệ"
                    : "The request to cancel the reservation is not valid"}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {data.lang === "vi"
                  ? "Vui lòng kiểm tra lại!"
                  : "Please check again"}
              </Modal.Body>
              <Modal.Footer>
                <button
                  type="button"
                  class="btn unsent text-white"
                  onClick={handleClose}
                >
                  OK
                </button>
              </Modal.Footer>
            </Modal>
          )}

          {thecase === 2 && (
            <Modal show={show} onHide={handleClose} centered>
              <Modal.Header style={{ background: "red", color: "white" }}>
                <Modal.Title>
                  {data.lang === "vi"
                    ? "Yêu cầu hủy đặt bàn không thành công"
                    : "Cancellation request failed"}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {data.lang === "vi"
                  ? "Đơn đặt bàn này đã được hủy trước đó. Vui lòng kiểm tra lại!"
                  : "This table reservation has been previously canceled. Please check again!"}
              </Modal.Body>
              <Modal.Footer>
                <button
                  type="button"
                  class="btn unsent text-white"
                  onClick={handleClose}
                >
                  OK
                </button>
              </Modal.Footer>
            </Modal>
          )}

          {thecase === 3 && (
            <Modal show={show} onHide={handleClose} centered>
              <Modal.Header style={{ background: "#f09a61", color: "white" }}>
                <Modal.Title>
                  {data.lang === "vi"
                    ? "Yêu cầu hủy đặt bàn thành công"
                    : "The request to cancel the reservation was successful"}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {data.lang === "vi"
                  ? "Nhà hàng chúng tôi luôn hân hoan chào đón quý khách!"
                  : "Our restaurant is always happy to welcome you!"}
              </Modal.Body>
              <Modal.Footer>
                <button
                  type="button"
                  class="btn unsent text-white"
                  onClick={handleClose}
                >
                  OK
                </button>
              </Modal.Footer>
            </Modal>
          )}

          {thecase === 4 && (
            <Modal show={show} onHide={handleClose} centered>
              <Modal.Header style={{ background: "#f09a61", color: "white" }}>
                <Modal.Title>
                  {data.lang === "vi"
                    ? "Yêu cầu hủy đặt bàn thành công"
                    : "The request to cancel the reservation was successful"}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  {data.lang === "vi"
                    ? "Phí đặt cọc sẽ được hoàn lại vào tài khoản Momo của quý khách trong vòng 24h."
                    : "The deposit fee will be refunded to your Momo account within 24 hours."}
                </div>
                <div>
                  {data.lang === "vi"
                    ? "Nhà hàng chúng tôi luôn hân hoan chào đón quý khách!"
                    : "Our restaurant is always happy to welcome you!"}
                </div>
              </Modal.Body>
              <Modal.Footer>
                <button
                  type="button"
                  class="btn unsent text-white"
                  onClick={handleClose2}
                >
                  OK
                </button>
              </Modal.Footer>
            </Modal>
          )}

          {thecase === 5 && (
            <Modal show={show} onHide={handleClose} centered>
              <Modal.Header style={{ background: "#f09a61", color: "white" }}>
                <Modal.Title>
                  {data.lang === "vi"
                    ? "Quá thời hạn cho phép"
                    : "The time limit is over"}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  {data.lang === "vi"
                    ? "Thời gian hủy đặt cọc của quý khách quá thời hạn cho phép"
                    : "Time to cancel your deposit is over the allowed time"}
                </div>
                <div>
                  {data.lang === "vi"
                    ? "Quý khách vẫn muốn hủy đặt bàn và chấp nhận mất tiền cọc?"
                    : "You still want to cancel the reservation and accept the loss of deposit?"}
                </div>
              </Modal.Body>
              <Modal.Footer>
                <button
                  type="button"
                  class="btn unsent text-white"
                  onClick={handleClose1}
                >
                  {data.lang === "vi" ? "Chấp nhận" : "Accept"}
                </button>
                <button
                  type="button"
                  class="btn unsent text-white"
                  onClick={handleClose}
                >
                  {data.lang === "vi"
                    ? "Hủy việc hủy đặt bàn"
                    : "Cancel the cancellation of a table reservation"}
                </button>
              </Modal.Footer>
            </Modal>
          )}
        </div>
      )}
    </LoginContext.Consumer>
  );
}
