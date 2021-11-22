import { Component } from "react";
import ReservationForm from "./ReservationForm";

class ReservationPage extends Component {
  render() {
    return (
      <div class="col">
        <div class="text-center mt-5">
          <h3>Nhà hàng Aprycot mở cửa từ 8:00 đến 22:00 hàng ngày</h3>
          <h4>Vui lòng đặt bàn trước giờ dùng bữa 3 giờ</h4>
          <h4><span class="text-decoration-none" style={{color: '#EA6A12'}}>Đăng nhập</span> để nhận ưu đãi phí đặt cọc</h4>
        </div>
        <div class="row g-3 flexbox">
          <div class="col-sm-6 d-flex justify-content-center">
            <ReservationForm/>
          </div>
          <div class="col-sm-6 justify-content-center align-items-center" style={{ marginTop: "50px", display: 'flex'}}>
            <img
              class="img-fluid"
              src="/assets/images/forReservationPage.png"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ReservationPage;
