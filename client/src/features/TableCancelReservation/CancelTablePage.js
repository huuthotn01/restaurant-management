import { CancelForm } from "./CancelForm";
import "./CancelTablePage.css";
export function CancelTablePage() {
  return (
    <div class="row ps-5 pt-5 pe-5">
      <div class="pt-5"></div>
      <div class="col-auto ps-5 pe-5">
        <div class="row g-3 ps-5 pt-5">
          <CancelForm />
        </div>
      </div>

      <div class="col ps-5 pt-4 pe-5">
        <h3 style={{ color: "#EA6A12" }}>
          Nếu quý khách hàng có đặt cọc từ trước:
        </h3>
        <h5>
          Quý khách hàng cần thực hiện việc hủy đặt bàn trước 2h so với giờ nhận
          bàn để được hoàn phí cọc. Phí cọc sẽ được gửi vào tài khoản quý khách
          đã sử dụng thanh toán khi đặt bàn.
        </h5>
        <h5>
          Các trường hợp còn lại, rất tiếc quý khách hàng sẽ không được hoàn phí
          cọc.
        </h5>
        <div class="row pt-5">
          <div class="col">
            <img
              class="img-fluid imagecancel"
              src="/assets/images/forReservationPage.png"
              alt=""
            />
          </div>

          <div class="col pt-5">
            <div class="row pt-5">
              <div class="row pt-5">
                <h5 style={{ color: "#EA6A12" }}>
                  Nhà hàng chúng tôi luôn hân hoan{" "}
                </h5>
                <h5 style={{ color: "#EA6A12" }}>chào đón quý khách.</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
