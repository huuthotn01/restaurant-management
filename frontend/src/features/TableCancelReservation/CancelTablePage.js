import  CancelForm   from './CancelForm';
import './CancelTablePage.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { LoginContext } from '../SharedComponent/LoginContext';
import { Switch, Redirect} from 'react-router-dom';

export function CancelTablePage() {
    return (
        <LoginContext.Consumer>
      {data => data.role === "2" ? (
        <Switch>
          <Redirect to='/manage' />
        </Switch>
      ) : (
        <div class="row ps-5 pe-5">
        <div class="pt-5"></div>
        <div class="col-auto ps-5 pe-5">
            <div class = "row g-3 ps-2 ">
                
                        <CancelForm/>
            </div>
        </div>
        
        <div class ="col ps-5 pe-5"> 
            
            <h4 style={{color: "#EA6A12"}}>{data.lang==="vi"?"Nếu quý khách hàng có đặt cọc từ trước:":"If you have a deposit in advance:"}</h4>
            <div class="pt-2"></div>
            <h6>{data.lang==="vi"?"Quý khách hàng cần thực hiện việc hủy đặt bàn trước 2h so với giờ nhận bàn để được hoàn phí cọc. Phí cọc sẽ được gửi vào tài khoản quý khách đã sử dụng thanh toán khi đặt bàn.":"Customers need to cancel the reservation 2 hours before the time of receiving the table to get a refund of the deposit fee. The deposit fee will be sent to the account you used to pay when booking."}</h6>
            <h6>{data.lang==="vi"?"Các trường hợp còn lại, rất tiếc quý khách hàng sẽ không được hoàn phí cọc.":"In the remaining cases, unfortunately, customers will not be refunded the deposit fee."}</h6>
            <div class="row pt-5">
            <div class="col">
            <img
            
              class="img-fluid imagecancel"
              src="/assets/images/forReservationPage.png"
              alt=""
            />
            </div>
            
            
            </div>
        </div>
        <div class="pt-5"></div>
    
        </div>
        )}
   
        </LoginContext.Consumer>
    );
  }
  