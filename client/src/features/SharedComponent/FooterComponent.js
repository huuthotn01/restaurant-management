import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';

class Footer extends Component {
    render(){
        return(
        <div className="footer">
            <Container >
                <br />
                <Row>
                    <Col  lg="4" md="12" sm="12" xs="12">
                        <Row>
                        <Col className="footer-header"> <Col> Aprycot </Col> </Col>
                        </Row>
                        <Row>
                        <Col className="footer-content"> <Col> Nhà hàng cao cấp </Col></Col>
                        </Row>
                    </Col>
                    <hr className="d-lg-none"/>
                    <Col  lg="4" md="12" sm="12" xs="12">
                        <Row>
                            <Col className="footer-header"> <Col> Bach Khoa University </Col> </Col>
                        </Row>
                        <Row>
                            <Col md="6" xs="6" className="footer-content"> <Col>
                            Ngô Thị Hà Bắc <br />
                            Nguyễn Khoa Gia Cát <br />
                            Cao Thị Thanh Mai <br />
                            Lê Huy Phước <br />
                            Trần Nguyễn Hữu Thọ <br />
                            Nguyễn Văn Xuân Vũ                        
                            </Col> </Col>
                            <Col md="6" xs="6" className="footer-content"> <Col>
                            1912700 <br />
                            1912749 <br />
                            1911565  <br />
                            1914763  <br />
                            1915347  <br />
                            1915982
                            </Col> </Col>
                        </Row>
                    </Col>
                    <hr className="d-lg-none"/>
                    <Col  lg="4" md="12" sm="12" xs="12">
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