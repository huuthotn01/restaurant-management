import "./ReservationForm.css";
import PopupSuccess from './Popup_Success'
export function ReservationForm() {
  return (
      <form class="row g-3" style={{
        width: "400px",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <h3 style={{textAlign: "center", lineHeight:'5px', color: "#EA6A12", marginTop: '100px'}}>Thông tin đặt bàn</h3>
        <div class="col-12">
          <label for="exampleText1" class="form-label">Họ và tên</label>
          <input type="text" class="form-control" id="exampleText1"/>
        </div>
        <div class="col-12">
          <label for="examplePhoneNumber" class="form-label">Số điện thoại</label>
          <input type="tel" class="form-control" id="examplePhoneNumber"/>
        </div>
        <div class="col-12">
          <label for="exampleEmail" class="form-label">Email</label>
          <input type="email" class="form-control" id="exampleEmail"/>
        </div>
        <div class="col-md-6">
          <label for="exampleDate" class="form-label">Ngày nhận bàn</label>
          <input type="date" class="form-control" id="exampleDate"/>
        </div>
        <div class="col-md-6">
          <label for="exampleTime" class="form-label">Giờ nhận bàn</label>
          <input type="time" class="form-control" id="exampleTime"/>
        </div>
        <div class="col-12">
          <label for="exampleSelect" class="form-label">Thời gian sử dụng (giờ)</label>
            <select class="form-select" id="exampleSelect">
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </select>
        </div>
        <div class="col-md-6">
          <label for="exampleSelect" class="form-label">Số lượng bàn 2 người</label>
          <select class="form-select" id="exampleSelect">
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
          </select>
        </div>
        <div class="col-md-6">
          <label for="exampleSelect" class="form-label">Số lượng bàn 4 người</label>
          <select class="form-select" id="exampleSelect">
              <option>0</option>
              <optidon>1</optidon>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
          </select>
        </div>
        <div class="col-md-6">
          <label for="exampleSelect" class="form-label">Số lượng bàn 8 người</label>
          <select class="form-select" id="exampleSelect">
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
          </select>
        </div>
        <div class="col-md-6">
          <label for="exampleSelect" class="form-label">Số lượng bàn 12 người</label>
          <select class="form-select" id="exampleSelect">
              <option>0</option>
              <option>1</option>
              <option>2</option>
          </select>
        </div>
        <div class="col-12">
          <label for="exampleText" class="form-label">Ghi chú</label>
          <input type="textarea" class="form-control" id="exampleText"/>
        </div>
        <div class="text-center pt-0">
          {/* <button type="submit" class="btn btn-primary text-white">Đặt bàn ngay</button> */}
          <PopupSuccess/>
        </div>
      </form>
  );
}
