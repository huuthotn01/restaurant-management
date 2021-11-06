import React, {Component} from 'react';
import { Container , Col, Row} from 'reactstrap';
import './payment.css'

class Payment extends Component {
    render(){
        return(  
            <div>
            <div className='space1'>
            <Container>
              <img width="250px" height="80px" src='/images/banner.png' alt=""></img>
             <p className='text'>Thanh toán</p>
             <p id='text2' float="right"> Chọn phương thức thanh toán</p>
             <ul type="circle" id='text3'>
                 <li><a id="huhu1" href="https://momo.vn/">Ví điện tử Momo (Momo wallet) &ensp;</a><img className="imag" border-radius="50px" width="20px" height="20px" src='/images/momo.jpg' alt=""></img></li>
                 <li><a href="https://www.ocb.com.vn/vi/">Thẻ ngân hàng (Bank card)</a><img width="40px" height="30px" src='/images/bankcard.png' alt=""></img></li>
             </ul>
             
            </Container>
            <button type="button" class="btn btn-success btn-sm" id="card"><a href="https://www.youtube.com/watch?v=iik25wqIuFo">Xem lại giỏ hàng</a></button>
            </div> 
             <div className='space2'id="bill">
             <Container >
            <h2> &ensp; &ensp; &ensp;Hóa đơn thanh toán</h2>
            <img id="huhu" width="280px" height="41px" src='/images/brand.png' alt="Logo"></img>
            <br/><br/>
            Đơn hàng : 2035
            <br/>
            Thời gian: "14/07/2021 21:27"<br/>
            ------------------------------------------------------------------<br/>
            &ensp; &ensp; &ensp;&ensp;Món ăn &ensp; &ensp; &ensp; &ensp; &ensp;&ensp;&ensp; &ensp;Số lượng&ensp;&ensp;&ensp; &ensp; &ensp; &ensp; &ensp;&ensp;Số tiền($)  <br/>     
            ------------------------------------------------------------------<br/>
            <Row id="row">
                            <Col md="5" className="footer-content" className="COL"> <Col>
                             <img className="imag" width="25px" height="20px" src='/images/salad.jpg'alt=""></img> Green Salad <br />
                             <img className="imag" width="25px" height="20px" src='/images/rice.jpg' alt=""></img> Plain Rice  <br />
                             <img className="imag" width="25px" height="20px" src='/images/fried.jpg' alt=""></img> French Fries<br />
                             <img className="imag" width="25px" height="20px" src='/images/lemon.jpg' alt=""></img> Lemon Rice  
                            </Col> </Col>
                            <Col md="2" className="footer-content" className="COL"> <Col>
                            2 <br />
                            3 <br />
                            2 <br />
                            4 
                            </Col> </Col>
                            <Col md="2" className="footer-content" id="pad" className="COL"> <Col>
                            5.9  <br />
                            8.85<br />
                            7.9  <br />
                            15.8 
                            </Col> </Col>
                        </Row>
            ------------------------------------------------------------------<br/>
            &ensp; &ensp; &ensp; &ensp; &ensp;&ensp;&ensp; &ensp; &ensp; &ensp; &ensp; &ensp; &ensp;&ensp;&ensp; &ensp;THÀNH TIỀN :  
            &ensp; &ensp; &ensp;&ensp;&ensp;&ensp; &ensp;&ensp;38.45      
             </Container>
             </div> 
             </div>
        );
    }
}

export default Payment;