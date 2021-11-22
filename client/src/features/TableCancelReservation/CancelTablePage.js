import { CancelForm } from './CancelForm';
import './CancelTablePage.css'
export function CancelTablePage() {
    return (
        <div class="row ps-5 pe-5">
        <div class="pt-5"></div>
        <div class="col-auto ps-5 pe-5">
            
            <div class = "row g-3 ps-2 ">
                
                        <CancelForm/>
               
                
            </div>
        </div>
        
        <div class ="col ps-5 pe-5">
            <h4 style={{color: "#EA6A12"}}>Nếu quý khách hàng có đặt cọc từ trước:</h4>
            <div class="pt-2"></div>
            <h6>Quý khách hàng cần thực hiện việc hủy đặt bàn trước 2h so với giờ nhận bàn để được hoàn phí cọc. Phí cọc sẽ được gửi vào tài khoản quý khách đã sử dụng thanh toán khi đặt bàn.</h6>
            <h6>Các trường hợp còn lại, rất tiếc quý khách hàng sẽ không được hoàn phí cọc.</h6>
            <div class="row pt-5">
            <div class="col">
            <img
            
              class="img-fluid imagecancel"
              src="/assets/images/forReservationPage.png"
              alt=""
            />

            </div>
            
            <div class="col">
                <div class="row pt-5">
                <div class="row pt-5">
                <div class="row pt-3"></div>
                <h6 style={{color: "#EA6A12"}}>Nhà hàng chúng tôi luôn hân hoan chào đón quý khách.</h6>
                
                </div>
                </div>
            </div>
            </div>
        </div>
        <div class="pt-5"></div>
    
        </div>
    );
  }
  