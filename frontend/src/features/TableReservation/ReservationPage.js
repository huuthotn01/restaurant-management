import { Component } from "react";
import ReservationForm from "./ReservationForm";
import { LoginContext } from "../SharedComponent/LoginContext";
import { Switch, Redirect} from 'react-router-dom';

class ReservationPage extends Component {
  render() {
    if (this.context.role === "2") return (
      <Switch>
          <Redirect to="/manage" />
      </Switch>
    );
    return (
      <div class="col">
        <div class="text-center mt-5">
          <h3>{this.context.lang === "vi" ? "Nhà hàng Aprycot mở cửa từ 8:00 đến 22:00 hàng ngày" : "Aprycot Restaurant opens daily from 8:00 AM to 10:00 PM"}</h3>
          <h4>{this.context.lang === "vi" ? "Vui lòng đặt bàn trước giờ dùng bữa 3 giờ": "Please take the reservation before at least 3 hours."}</h4>
          <h4><span class="text-decoration-none" style={{color: '#EA6A12'}}>{!this.context.isIn?(this.context.lang === "vi"? "Đăng nhập": "Sign In"):""}</span> {!this.context.isIn? (this.context.lang === "vi"? "để nhận ưu đãi phí đặt cọc!": "to receive deposit fee discount!"): ""}</h4>
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

ReservationPage.contextType = LoginContext;
export default ReservationPage;
