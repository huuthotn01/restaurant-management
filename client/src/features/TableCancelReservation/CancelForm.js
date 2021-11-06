import "./CancelForm.css";
import React from "react";
export function CancelForm() {
  return (
    <form
      class="row g-3"
      style={{
        width: "400px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h4 style={{ textAlign: "center", color: "#EA6A12", marginTop: "50px" }}>
        Thông tin hủy đặt bàn
      </h4>
      <div class="col-12">
        <label for="exampleText1" class="form-label">
          Số điện thoại
        </label>
        <input type="text" class="form-control" id="exampleText1" />
      </div>
      <div class="col-12">
        <label for="examplePhoneNumber" class="form-label">
          Mã đặt bàn
        </label>
        <input type="tel" class="form-control" id="examplePhoneNumber" />
      </div>

      <div class="col-12">
        <label for="exampleText" class="form-label">
          Ghi chú
        </label>
        <input type="textarea" class="form-control" id="exampleText" />
      </div>

      <div class="col-12 text-center">
        <button type="submit" class="btn btn-primary text-white">
          Hủy đặt bàn
        </button>
      </div>
    </form>
  );
}
