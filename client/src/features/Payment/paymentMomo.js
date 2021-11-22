import React, {Component} from 'react';
import { Container , Col, Row} from 'reactstrap';
import './payment.css'
import { useContext } from 'react';
import CartContext from '../FoodOrdering/components/Cart/CartController/CartContext';


// class PaymentMomo extends Component {
//     render(){
         
//         return (
//             <Container>
//             <Row>
//             <Col xs={4} > 
//             <img class="img-fluid " src="/assets/images/404.png" alt=""/>
//               </Col>
//               <Col xs={4}>
//             <h2 style={{ fontWeight: 'bold', color: 'orange', fontSize: '2vw', textAlign: 'center'}}>Mời bạn quét mã QR </h2>
//             <img class="img-fluid " src={`https://momosv3.apimienphi.com/api/QRCode?phone=0971083236&amount=${total}& note=${total.toLocaleString('vi-VN')}đ`}></img>

//       </Col>
//       <Col xs={4}>  
//       <img class="img-fluid " src="/assets/images/404.png" alt=""/>
//               </Col>
//             </Row>
//           </Container>
            
//         );
//     }
// }
const MOMO = (props) =>  {  
  const cartContext = useContext(CartContext);

  const total = cartContext.totalAmount.toFixed(0);
      return (
          <Container>
          <Row>
          <Col xs={4} > 
          <img class="img-fluid " src="/assets/images/404.png" alt=""/>
            </Col>
            <Col xs={4}>
          <h2 style={{ fontWeight: 'bold', color: 'orange', fontSize: '2vw', textAlign: 'center'}}>Mời bạn quét mã QR </h2>
          <img class="img-fluid " src={`https://momosv3.apimienphi.com/api/QRCode?phone=0971083236&amount=${total}& note=${total}đ`}></img>

    </Col>
    <Col xs={4}>  
    <img class="img-fluid " src="/assets/images/404.png" alt=""/>
            </Col>
          </Row>
        </Container>
          
      )
}
export default MOMO;
// export default PaymentMomo;