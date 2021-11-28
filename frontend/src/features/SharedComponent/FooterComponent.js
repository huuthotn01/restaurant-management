import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
import { Modal, Button, ModalHeader, ModalBody } from 'reactstrap';
import { LoginContext } from './LoginContext';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        }
        this.onToggleModal = this.onToggleModal.bind(this)
    }

    onToggleModal() {
        this.setState({isModalOpen: !this.state.isModalOpen})
    }
    render(){
        return(
        <div className="footer">
            <Container >
                <br />
                <Row>
                    <Col  xs="4">
                        <Row>
                        <Col className="footer-header"> <Col> Aprycot </Col> </Col>
                        </Row>
                        <Row>
                        <Col className="footer-content"> <Col> {this.context.lang === "vi" ? "Nhà hàng chất lượng cao" : "Fine Dining Restaurant"} </Col></Col>
                        </Row>
                    </Col>
                    {/* <hr className="d-lg-none"/> */}
                    <Col xs="4">
                        <Row> 
                        <Col className="footer-header"> 
                            <Col> 
                                {this.context.lang === "vi" ? "Về chúng tôi" : "About us"}
                            </Col> 
                        </Col>
                        </Row>
                        <Row>
                            <Col className="footer-content">
                                <Col>
                                    <Button className="info-button" onClick={() => this.onToggleModal()}> 
                                        <span className="footer-content">{this.context.lang === "vi" ? "Đội ngũ Aprycot" : "Aprycot Team"}</span> 
                                    </Button>
                                </Col>
                            </Col>
                        </Row>
                    </Col>
                    {/* <hr className="d-lg-none"/> */}
                    <Col  xs="4">
                        <Row>
                            <Col className="footer-header"> <Col> {this.context.lang === "vi" ? "Hỗ trợ" : "Help"}  </Col> </Col>
                        </Row>
                        <Row>
                            <Col className="footer-content"> <Col>
                            {this.context.lang === "vi" ? "Trung tâm hỗ trợ" : "Help center"}
                            {/* Contact support <br />
                            Instructions <br />
                            How it works <br /> */}
                            </Col> </Col>
                        </Row>
                    </Col>
                </Row>
                <br />
            </Container>
            <Modal isOpen={this.state.isModalOpen} toggle={this.onToggleModal}>
                <ModalHeader>
                   <span className="footer-header"> {this.context.lang === "vi" ? "Trường Đại học Bách Khoa TP. Hồ Chí Minh" : "Ho Chi Minh University of Technology"} </span>
                </ModalHeader>
                <ModalBody>
                    <Container>
                        <Col  xs="12">
                            <Row>
                                <Col className="footer-content" xs="6"> <Col>
                                Ngô Thị Hà Bắc <br />
                                Nguyễn Khoa Gia Cát <br />
                                Cao Thị Thanh Mai <br />
                                Lê Huy Phước <br />
                                Trần Nguyễn Hữu Thọ <br />
                                Nguyễn Văn Xuân Vũ                        
                                </Col> </Col>
                                <Col xs="6" className="footer-content" style={{textAlign: 'right'}}> <Col>
                                1912700 <br />
                                1912749 <br />
                                1911565  <br />
                                1914763  <br />
                                1915347  <br />
                                1915982
                                </Col> </Col>
                            </Row>
                        </Col>
                    </Container>
                </ModalBody>
            </Modal>
        </div>
        );
    }
}

Footer.contextType = LoginContext;

export default Footer;