import React, {Component} from 'react';
import { Container } from 'reactstrap';
import './payment.css'
import DropPayment from '../PaymentController/dropdown';
import {TiArrowDownOutline} from 'react-icons/ti';
import { LoginContext } from '../../SharedComponent/LoginContext';



class PaymentCard extends Component {
    render(){
         
        return (
            <Container>
                <div id="maiz">
                <img class=" img-fluid ko"  src="/assets/images/fix.gif" alt=""/>
                </div>
           <h2 style={{textAlign: "center", fontWeight: 'bold', fontSize: '3vw',}}>{this.context.lang === "vi" ? "Tính năng thanh toán này đang được bảo trì." : "This payment feature is under maintenance."}</h2>
           <h2 style={{textAlign: "center", fontWeight: 'bold', fontSize: '3vw',}}>{this.context.lang === "vi" ? "Quý khách vui lòng chọn hình thức thanh toán khác." : "Please choose another payment method."}</h2>
           <span id="maiz" className='koo'> <TiArrowDownOutline /></span>
          <span style={{textAlign: "center"}}> <DropPayment /></span> 
          </Container>
            
        );
    }
}
PaymentCard.contextType = LoginContext;
export default PaymentCard;