import { Component } from "react";
import { ReservationForm } from "./ReservationForm";

class ReservationPage extends Component {
  render() {
    return (
      <div class="col">
        <h3 style={{textAlign:'center', marginTop: '50px'}}>Nhà hàng Aprycot mở cửa từ 8:00 đến 22:00 hàng ngày</h3>
        <h4 style={{textAlign:'center'}}>Vui lòng đặt bàn trước giờ dùng bữa 3 giờ</h4>
        <h4 style={{textAlign:'center'}}><a href="/" class="text-decoration-none" style={{color: '#EA6A12'}}>Đăng nhập</a> để nhận ưu đãi phí đặt cọc</h4>
        <div class="row g-3">
          <div class="col-sm-5 d-flex justify-content-center">
            <ReservationForm />
          </div>
          <div class="col-sm-7" style={{ marginTop: "100px" }}>
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
