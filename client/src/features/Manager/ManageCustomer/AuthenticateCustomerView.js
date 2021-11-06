import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Table, Button } from 'reactstrap';
import { Modal, ModalBody, ModalFooter } from 'reactstrap';


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
    }

    render() {
        if (this.props.model.customers_not_auth.length === 0) this.props.getNotAuthCustomerList();
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
                            Xác thực
                    </Button>
                </td>
                </tr>
            )
        })
        return (
            <Container>
                <Row className="statistic-order-heading">
                    <Col className='statistic-order-header'> Danh sách các khách hàng chưa xác thực </Col>
                </Row>
                <Row>
                    <Col>
                        <Table responsive hover striped>
                            <thead>
                                <tr>
                                <th>
                                    #
                                </th>
                                <th>
                                    Tên khách hàng
                                </th>
                                <th>
                                    Số điện thoại
                                </th>
                                <th style={{textAlign: 'center'}}>
                                    Hành động
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
                                <Col md="8">
                                <img width="120px" height="41px" src='/assets/images/brand.png'/>
                                </Col>
                                <Col md="4" className="ms-auto">
                                <Button className="out-bill-button" onClick={() => this.toggleModal('', false)}> X </Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12" style={{textAlign: 'center', fontWeight: 'bold', fontSize: '30px'}}>
                                    THÔNG TIN XÁC THỰC
                                </Col>
                            </Row>
                            <Row> 
                                <Col>
                                    <span style={{fontWeight: 'bold'}}> Tên khách hàng: </span>
                                    {this.props.model.customerOpenAuth.lastname + " " + this.props.model.customerOpenAuth.firstname} 
                                </Col>
                            </Row>
                            <Row style={{marginTop: '8px'}}>
                                <Col> 
                                    <span style={{fontWeight: 'bold'}}> Số điện thoại: </span> 
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
                                    <span style={{fontWeight: 'bold'}}> Ảnh chứng minh nhân dân: </span>
                                    <img src='/assets/images/CMND.png' alt="CMND" />
                            </Row>
                        </Container>
                    </ModalBody>
                    <ModalFooter>
                        <Button className='auth-button ms-auto' onClick={this.onChooseCusAuth}>
                            Hợp lệ
                        </Button>    
                    </ModalFooter>
                </Modal>
            </Container>
        )
    }
}

export default AuthenticateCustomerView;