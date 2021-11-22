import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Form, FormGroup, Input, Table, Button } from "reactstrap";
import { FaSearch } from 'react-icons/fa';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

class ViewCustomerView extends Component {
    constructor(props) {
        super(props);
        this.onInputCusName = this.onInputCusName.bind(this);
        this.onChooseCus = this.onChooseCus.bind(this);
        this.toggleDeleteModal = this.toggleDeleteModal.bind(this);
        this.onClickDeleteButton = this.onClickDeleteButton.bind(this);
    }

    onClickDeleteButton() {
        this.props.deleteCustomer();
    }

    toggleDeleteModal(phone, flag) {
        // if (typeof(phone) !== typeof("string")) flag = false; 
        this.props.onToggleDeleteModal(phone, flag);
    }

    onChooseCus(phone, flag) {
        this.props.onToggleViewModal(phone, flag);   
    }

    onInputCusName() {
        this.props.getCustomerList(this.search_item.value.replace(/\s+/g, ''));
    }

    render() {
        const display_customers = this.props.model.customers_display.map((customer) => {
            return (
                <tr>
                <th scope="row">
                    {this.props.model.customers_display.indexOf(customer) + 1}
                </th>
                <td>
                    {customer.lastname + " " + customer.firstname}
                </td>
                <td className="d-none d-lg-block">
                    {customer.email}
                </td>
                <td>
                    {(() => {if (customer.is_authenticate) return "Đã xác thực"; else return "Chưa xác thực"})()}
                </td>
                <td style={{textAlign: 'center'}}>
                    <Button className='customer-button' onClick={() => this.onChooseCus(customer.phone, true)}>
                        Xem
                    </Button>
                    <Button className='customer-button'
                            onClick={() => {this.toggleDeleteModal(customer.phone, true);}}> 
                            Xoá 
                    </Button>
                </td>
                </tr>
        )}); 

        let not_Found = <span></span>;
        if (display_customers.length === 0) not_Found = <div className="not-found-search"> Không tìm thấy kết quả </div>
        else not_Found = <span></span>;

        return (
            <Container>
                    <Row className="manage-order-heading">
                        <Col md="6" xs="12" className='manage-order-header'> Danh sách khách hàng </Col>
                        <Col> 
                        <Row>
                            <Form className="search-bar" onSubmit={e => {e.preventDefault(); this.onInputCusName();}}>
                                <FormGroup>
                                    <Input autoComplete="off" className="search-box" id="search" name="search-drugs" placeholder="Nhập thông tin"
                                    innerRef={(input) => this.search_item = input} />
                                </FormGroup>
                            </Form> 
                            <Button className="search-button" onClick={this.onInputCusName}>
                                <FaSearch /> Tìm <span style={{textTransform: 'lowercase'}}> kiếm </span>
                            </Button>
                        </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {not_Found}
                            <Table className="manage-table" responsive hover striped>
                            <thead>
                                <tr>
                                <th>
                                    #
                                </th>
                                <th>
                                    Tên khách hàng
                                </th>
                                <th className="d-none d-lg-block">
                                    Email
                                </th>
                                <th>
                                    Tình trạng
                                </th>
                                <th style={{textAlign: 'center'}}>
                                    Hành động
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                {display_customers}
                            </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <Modal isOpen={this.props.model.isModalViewOpen} toggle={this.onChooseCus}>
                    <ModalBody>
                        <Container>
                            <Row style={{marginBottom: '30px'}}>
                                <Col xs="8">
                                <img width="120px" height="41px" src='/assets/images/brand.png'/>
                                </Col>
                                <Col xs="4" className="ms-auto">
                                <Button className="out-bill-button" onClick={() => this.onChooseCus('', false)}> X </Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12" style={{textAlign: 'center', fontWeight: 'bold', fontSize: '30px'}}>
                                    <span className="auth-header"> THÔNG TIN TÀI KHOẢN </span>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <span style={{fontWeight: 'bold'}}> Ảnh đại diện: </span>
                                </Col>
                            </Row>
                            <Row>
                                <img src='/assets/images/ava.jpg' />
                            </Row>
                            <Row> 
                                <Col>
                                    <span style={{fontWeight: 'bold'}}> Tên khách hàng: </span>
                                    {this.props.model.customerOpen.lastname + " " + this.props.model.customerOpen.firstname} 
                                </Col>
                            </Row>
                            <Row style={{marginTop: '8px'}}>
                                <Col> 
                                    <span style={{fontWeight: 'bold'}}> Số điện thoại: </span> 
                                    {this.props.model.customerOpen.phone}
                                </Col>
                            </Row>
                            <Row style={{marginTop: '8px'}}>
                                <Col>
                                    <span style={{fontWeight: 'bold'}}> Email: </span>
                                    {this.props.model.customerOpen.email}
                                </Col>
                            </Row>
                            <Row style={{marginTop: '8px'}}>
                                <Col>
                                    <span style={{fontWeight: 'bold'}}> Tình trạng: </span>
                                    {(() => {if (this.props.model.customerOpen.is_authenticate) return "Đã xác thực"; else return "Chưa xác thực"})()}
                                </Col>
                            </Row>
                        </Container>
                    </ModalBody>
                    </Modal>
                    <Modal centered isOpen={this.props.model.isModalDeleteOpen} toggle={this.toggleDeleteModal}>
                    <ModalHeader> <span className="agree-header"> Bạn có chắc chắn với lựa chọn của mình ? </span> </ModalHeader>
                    <ModalBody>
                        <Container>
                            <Row>
                                <Col>
                                    <Button className='delete-button' onClick={() => {this.onClickDeleteButton(); this.toggleDeleteModal("", false)}}> Có </Button>
                                </Col>
                                <Col>
                                    <Button className='delete-button' onClick={() => this.toggleDeleteModal("", false)}> Không </Button>
                                </Col>
                            </Row>
                        </Container>
                    </ModalBody>
                    </Modal>
            </Container>
        )
    }
}

export default ViewCustomerView;