import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Form, FormGroup, Input, Table, Button } from "reactstrap";
import { FaSearch } from 'react-icons/fa';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { LoginContext } from '../../SharedComponent/LoginContext'

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
                                    {(() => {
                                        if (this.props.model.customerOpen.is_authenticate) 
                                            {if (this.context.lang === "vi") return "Đã xác thực"; else return "Authenticated"}
                                        else {if (this.context.lang === "vi") return "Chưa xác thực"; else return "Hasn't Authenticate" }}
                                    )()}
                </td>
                <td style={{textAlign: 'center'}}>
                    <Button className='customer-button' onClick={() => this.onChooseCus(customer.phone, true)}>
                        {this.context.lang === "vi" && <span> Xem </span>}
                        {this.context.lang === "en" && <span> View </span>}
                    </Button>
                    <Button className='customer-button'
                            onClick={() => {this.toggleDeleteModal(customer.phone, true);}}> 
                            {this.context.lang === "vi" && <span> Xóa </span>}
                            {this.context.lang === "en" && <span> Del </span>}
                    </Button>
                </td>
                </tr>
        )}); 

        let not_Found = <span></span>;
        if (display_customers.length === 0) not_Found = <div className="not-found-search"> 
            {this.context.lang === "vi" && <span> Không tìm thấy kết quả </span>}
            {this.context.lang === "en" && <span> Not found </span>}
        </div>
        else not_Found = <span></span>;

        const input = (() => {if (this.context.lang === "vi") 
                return "Nhập thông tin"
                else return "Input information"})();

        return (
            <Container>
                    <Row className="manage-order-heading">
                        <Col md="6" xs="12" className='manage-order-header'> 
                            {this.context.lang === "vi" && <span> Danh sách khách hàng </span>}
                            {this.context.lang === "en" && <span> Customer list </span>}
                        </Col>
                        <Col> 
                        <Row>
                            <Form className="search-bar" onSubmit={e => {e.preventDefault(); this.onInputCusName();}}>
                                <FormGroup>
                                    <Input autoComplete="off" className="search-box" id="search" name="search-drugs" placeholder={`${input}`}
                                    innerRef={(input) => this.search_item = input} />
                                </FormGroup>
                            </Form> 
                            <Button className="search-button" onClick={this.onInputCusName}>
                                <FaSearch /> 
                                        {this.context.lang === "vi" && <span> Tìm <span style={{textTransform: 'lowercase'}}> kiếm </span> </span> }
                                        {this.context.lang === "en" && <span> Search </span> }
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
                                    {this.context.lang === "vi" && <span> Tên khách hàng </span>}
                                    {this.context.lang === "en" && <span> Customer name </span>}
                                </th>
                                <th className="d-none d-lg-block">
                                    Email
                                </th>
                                <th>
                                    {this.context.lang === "vi" && <span> Tình trạng </span>}
                                    {this.context.lang === "en" && <span> State </span>}
                                </th>
                                <th style={{textAlign: 'center'}}>
                                    {this.context.lang === "vi" && <span> Hành động </span>}
                                    {this.context.lang === "en" && <span> Action </span>}
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
                                    <span className="auth-header"> 
                                        {this.context.lang === "vi" && <span> THÔNG TIN TÀI KHOẢN </span>}
                                        {this.context.lang === "en" && <span> USER INFORMATION </span>}
                                    </span>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                {this.context.lang === "vi" && <span style={{fontWeight: 'bold'}}> Ảnh đại diện: </span>}
                                {this.context.lang === "en" && <span style={{fontWeight: 'bold'}}> Avatar: </span>}
                                
                                </Col>
                            </Row>
                            <Row>
                                <img src='/assets/images/ava.jpg' />
                            </Row>
                            <Row> 
                                <Col>
                                    {this.context.lang === "vi" && <span style={{fontWeight: 'bold'}}> Tên khách hàng: </span>}
                                    {this.context.lang === "en" && <span style={{fontWeight: 'bold'}}> Customer name: </span>}
                                    {this.props.model.customerOpen.lastname + " " + this.props.model.customerOpen.firstname} 
                                </Col>
                            </Row>
                            <Row style={{marginTop: '8px'}}>
                                <Col> 
                                    {this.context.lang === "vi" && <span style={{fontWeight: 'bold'}}> Số điện thoại: </span>}
                                    {this.context.lang === "en" && <span style={{fontWeight: 'bold'}}> Phone number: </span>}
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
                                    {this.context.lang === "vi" && <span style={{fontWeight: 'bold'}}> Tình trạng: </span>}
                                    {this.context.lang === "en" && <span style={{fontWeight: 'bold'}}> State: </span>}
                                    {(() => {
                                        if (this.props.model.customerOpen.is_authenticate) 
                                            {if (this.context.lang === "vi") return "Đã xác thực"; else return "Authenticated"}
                                        else {if (this.context.lang === "vi") return "Chưa xác thực"; else return "Hasn't Authenticate" }}
                                    )()}
                                </Col>
                            </Row>
                        </Container>
                    </ModalBody>
                    </Modal>
                    <Modal centered isOpen={this.props.model.isModalDeleteOpen} toggle={this.toggleDeleteModal}>
                    <ModalHeader>
                        {this.context.lang === "vi" && <span className="agree-header"> Bạn có chắc chắn với lựa chọn của mình ? </span> }
                        {this.context.lang === "en" && <span className="agree-header"> Are you sure with your choice ? </span> }
                    </ModalHeader>
                    <ModalBody>
                        <Container>
                            <Row>
                                <Col>
                                    <Button className='delete-button' onClick={() => {this.onClickDeleteButton(); this.toggleDeleteModal("", false)}}> 
                                        {this.context.lang === "vi" && <span> Có </span> }
                                        {this.context.lang === "en" && <span> Yes </span> }
                                    </Button>
                                </Col>
                                <Col>
                                    <Button className='delete-button' onClick={() => this.toggleDeleteModal("", false)}> 
                                        {this.context.lang === "vi" && <span> Không </span> }
                                        {this.context.lang === "en" && <span> No </span> }
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </ModalBody>
                    </Modal>
            </Container>
        )
    }
}

ViewCustomerView.contextType = LoginContext;

export default ViewCustomerView;