import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';

class Footer extends Component {
    render(){
        return(
        <div className="footer">
            <Container >
                <br />
                <Row>
                    <Col>
                        <Row>
                        <Col className="footer-header"> <Col> Aprycot </Col> </Col>
                        </Row>
                        <Row>
                        <Col className="footer-content"> <Col> Nhà hàng cao cấp </Col></Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col className="footer-header"> <Col> Bach Khoa University </Col> </Col>
                        </Row>
                        <Row>
                            <Col md="8" className="footer-content"> <Col>
                            Ngô Thị Hà Bắc <br />
                            Nguyễn Khoa Gia Cát <br />
                            Cao Thị Thanh Mai <br />
                            Lê Huy Phước <br />
                            Trần Nguyễn Hữu Thọ <br />
                            Nguyễn Văn Xuân Vũ                        
                            </Col> </Col>
                            <Col md="2" className="footer-content"> <Col>
                            191xxxx <br />
                            1912749 <br />
                            191xxxx  <br />
                            191xxxx  <br />
                            191xxxx  <br />
                            191xxxx <br />
                            </Col> </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col className="footer-header"> <Col> Help  </Col> </Col>
                        </Row>
                        <Row>
                            <Col className="footer-content"> <Col>
                            Help center <br />
                            Contact support <br />
                            Instructions <br />
                            How it works <br />
                            </Col> </Col>
                        </Row>
                    </Col>
                </Row>
                <br />
            </Container>
        </div>
        );
    }
}

export default Footer;