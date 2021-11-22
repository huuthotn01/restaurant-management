import React, {Component} from 'react';
import { Container } from 'reactstrap';
import './payment.css'
import DropPayment from './dropdown';
import {TiArrowDownOutline} from 'react-icons/ti';



class PaymentCard extends Component {
    render(){
         
        return (
            <Container>
                <div id="maiz">
                <img class=" img-fluid ko"  src="/assets/images/fix.gif" alt=""/>
                </div>
           <h2 style={{textAlign: "center", fontWeight: 'bold', fontSize: '3vw',}}>Tính năng thanh toán này đang được bảo trì.</h2>
           <h2 style={{textAlign: "center", fontWeight: 'bold', fontSize: '3vw',}}>  Quý khách vui lòng chọn hình thức thanh toán khác.</h2>
           <span id="maiz" className='koo'> <TiArrowDownOutline /></span>
          <span style={{textAlign: "center"}}> <DropPayment /></span> 
          </Container>
            
        );
    }
}
export default PaymentCard;