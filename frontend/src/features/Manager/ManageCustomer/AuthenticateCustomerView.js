import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Table, Button } from 'reactstrap';
import { Modal, ModalBody, ModalFooter } from 'reactstrap';
import { LoginContext } from '../../SharedComponent/LoginContext'


class AuthenticateCustomerView extends Component {
    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.onChooseCusAuth = this.onChooseCusAuth.bind(this);
    }

    toggleModal(phone, flag) {
        this.props.onToggleModalAuth(phone, flag);
    }

    onChooseCusAuth(phone) {
        this.toggleModal('',false);
        this.props.authCus(phone);
    }

    render() {
        const customer_not_auth = this.props.model.customers_not_auth.map(customer => {
            return (
                <tr>
                <th scope="row">
                    {this.props.model.customers_not_auth.indexOf(customer) + 1}
                </th>
                <td>
                    {customer.lastname + " " + customer.firstname}
                </td>
                <td>
                    {customer.phone}
                </td>
                <td style={{textAlign:'center'}}>
                    <Button className='auth-view-button' 
                            onClick = {() => {this.toggleModal(customer.phone, true);}} >
                            {this.context.lang === "vi" && <span> Xác thực </span>}
                            {this.context.lang === "en" && <span> Authenticate </span>}
                    </Button>
                </td>
                </tr>
            )
        })
        return (
            <Container>
                <Row className="statistic-order-heading">
                    <Col className='statistic-order-header'> 
                        {this.context.lang === "vi" && <span> Danh sách các khách hàng chưa xác thực  </span>}
                        {this.context.lang === "en" && <span> Customers aren't authenticated </span>}                        
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table className="manage-table" responsive hover striped>
                            <thead>
                                <tr>
                                <th>
                                    #
                                </th>
                                <th>
                                    {this.context.lang === "vi" && <span> Tên khách hàng </span>}
                                    {this.context.lang === "en" && <span> Customer name </span>}
                                </th>
                                <th>
                                    {this.context.lang === "vi" && <span> Số điện thoại </span>}
                                    {this.context.lang === "en" && <span> Phone number </span>}
                                </th>
                                <th style={{textAlign: 'center'}}>
                                    {this.context.lang === "vi" && <span> Hành động </span>}
                                    {this.context.lang === "en" && <span> Action </span>}
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                {customer_not_auth}
                            </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <Modal isOpen={this.props.model.isModalOpenAuth} toggle={this.toggleModal}>
                    <ModalBody>
                        <Container>
                            <Row style={{marginBottom: '30px'}}>
                                <Col xs="8">
                                <img width="120px" height="41px" src='/assets/images/brand.png'/>
                                </Col>
                                <Col xs="4" className="ms-auto">
                                <Button className="out-bill-button" onClick={() => this.toggleModal('', false)}> X </Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12" style={{textAlign: 'center', fontWeight: 'bold', fontSize: '30px'}}>
                                    {this.context.lang === "vi" && <span> <span className="auth-header"> THÔNG TIN XÁC THỰC </span> </span>}
                                    {this.context.lang === "en" && <span> <span className="auth-header"> AUTHENTICATE INFORMATION </span> </span>}
                                                                        
                                </Col>
                            </Row>
                            <Row> 
                                <Col>
                                    {this.context.lang === "vi" && <span> <span style={{fontWeight: 'bold'}}> Tên khách hàng: </span> </span>}
                                    {this.context.lang === "en" && <span> <span style={{fontWeight: 'bold'}}> Customer name: </span> </span>}
                                    
                                    {this.props.model.customerOpenAuth.lastname + " " + this.props.model.customerOpenAuth.firstname} 
                                </Col>
                            </Row>
                            <Row style={{marginTop: '8px'}}>
                                <Col> 
                                    {this.context.lang === "vi" && <span> <span style={{fontWeight: 'bold'}}> Số điện thoại: </span>  </span>}
                                    {this.context.lang === "en" && <span> <span style={{fontWeight: 'bold'}}> Phone number: </span> </span>}
                                    
                                    {this.props.model.customerOpenAuth.phone}
                                </Col>
                            </Row>
                            <Row style={{marginTop: '8px'}}>
                                <Col>
                                    <span style={{fontWeight: 'bold'}}> Email: </span>
                                    {this.props.model.customerOpenAuth.email}
                                </Col>
                            </Row>
                            <Row style={{marginTop: '8px'}}>
                                    {this.context.lang === "vi" && <span> <span style={{fontWeight: 'bold'}}> Ảnh chứng minh nhân dân: </span>  </span>}
                                    {this.context.lang === "en" && <span> <span style={{fontWeight: 'bold'}}> Identify Card: </span> </span>}
                                    
                                    
                                    
                                    <img src='/assets/images/CMND.png' alt="CMND" />
                            </Row>
                        </Container>
                    </ModalBody>
                    <ModalFooter>
                        <Button className='auth-button ms-auto' onClick={() => {this.onChooseCusAuth(this.props.model.customerOpenAuth.phone)}}>
                                {this.context.lang === "vi" && <span> Hợp lệ  </span>}
                                {this.context.lang === "en" && <span> Valid</span>}
                        </Button>    
                    </ModalFooter>
                </Modal>
            </Container>
        )
    }
}

AuthenticateCustomerView.contextType = LoginContext

export default AuthenticateCustomerView;