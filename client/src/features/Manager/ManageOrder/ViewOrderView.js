import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import { Table } from 'reactstrap';
import { FaSearch } from 'react-icons/fa';
import { Modal, ModalBody } from 'reactstrap';
import ReactToPrint from 'react-to-print';
import Pagination from "pagination-component";
import { LoginContext } from '../../SharedComponent/LoginContext';
import '../manager.css';

class ViewOrder extends Component {
    constructor(props) {
        super(props);
        this.onInputOrderID = this.onInputOrderID.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.changePage = this.changePage.bind(this);
    }
    
    changePage(page) {
        this.props.onPageChange(page);
    }

    toggleModal(orderID, flag) {
        this.props.onToggleModal(orderID, flag);
    }

    onInputOrderID() {
        this.props.onPageChange(1);
        this.props.getOrders(this.search_item.value);
    }

    render() {
        const display_order = this.props.model.orders_search.map((order) => {
            return (
                <tr>
                <th scope="row">
                    {this.props.model.orders_search.indexOf(order) + 1}
                </th>
                <td>
                    {this.context.lang === "vi" && <span> Nguyễn Khoa Gia Cát </span>}
                    {this.context.lang === "en" && <span> Nguyen Khoa Gia Cat </span>}
                </td>
                <td>
                    {order.orderID}
                </td>
                <td className="d-none d-lg-block">
                    {order.orderDate}
                </td>
                <td>
                    {(order.totalPrice*23000).toLocaleString('vi-VN')}đ
                </td>
                <td style={{textAlign: 'center'}}>
                    <Button className='order-button' 
                            onClick={() => {this.toggleModal(order.orderID, true);}}> 
                            {this.context.lang === "vi" && <span> Xem </span>}
                            {this.context.lang === "en" && <span> View </span>}
                    </Button>
                </td>
                </tr>
        )}); 

        let not_Found = <span></span>;
        if (display_order.length === 0) not_Found = <div className="not-found-search"> 
                {this.context.lang === "vi" && <span> Không tìm thấy kết quả !</span>}
                {this.context.lang === "en" && <span> Not found ! </span>} 
            </div>
        else not_Found = <span></span>;
        
        let total = 0;

        const details_open = this.props.model.orderDetailsOpen.map(detail => {
            total += detail.productPrice * detail.quantity;
            return (
                <tr>
                <th scope="row" style={{textAlign: 'center'}}>
                    {this.props.model.orderDetailsOpen.indexOf(detail) + 1}
                </th>
                <td>
                    {detail.itemName}
                </td>
                <td style={{textAlign: 'center'}}>
                    {(detail.productPrice*23000).toLocaleString('vi-VN')}đ
                </td>
                <td style={{textAlign: 'center'}}>
                    {detail.quantity}
                </td>
                <td style={{textAlign: 'right'}}>
                    {(detail.total()*23000).toLocaleString('vi-VN')}đ
                </td>
                </tr>
            );
        });

        const order = this.props.model.orderOpen;

        const pageStyle = `{ size: 2.5in 4in }`;

        const containerStyle = (count) => {
            if (count > 20) return {marginLeft: '12.5%'} 
            else if (count > 10) return {marginLeft: '37.5%'}
            else return {marginLeft: '45%'}
            };
        
        const itemStyle = {
            float: "left",
            marginLeft: "5px",
            marginRight: "5px",
            backgroundColor: "#FFFAF7",
            color: "black",
            cursor: "pointer",
            width: "50px",
            textAlign: "center",
            borderRadius: "5px"
            };
        
        const input = (() => {if (this.context.lang === "vi") 
                                    return "Nhập đơn hàng"
                             else return "Input order"})();
        return (
            <Container>
                    <Row className="manage-order-heading">
                        <Col md="6" sm="12" xs="12" className='manage-order-header'> 
                            {this.context.lang === "vi" && <span> Danh sách đơn hàng </span>}
                            {this.context.lang === "en" && <span> Order list </span>} 
                        </Col>
                        <Col> 
                        <Row>
                            <Form className="search-bar" onSubmit={e => {e.preventDefault(); this.onInputOrderID()}}>
                                <FormGroup>
                                    <Input autoComplete="off" className="search-box" id="search" name="search-drugs" 
                                        placeholder={`${input}`}
                                    innerRef={(input) => this.search_item = input} />
                                </FormGroup>
                            </Form> 
                            <Button className="search-button" onClick={this.onInputOrderID}>
                                <FaSearch /> 
                                    {this.context.lang === "vi" && <span> Tìm <span style={{textTransform: 'lowercase'}}> kiếm </span> </span>}
                                    {this.context.lang === "en" && <span> Search </span>}                                    
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
                                <th>
                                    {this.context.lang === "vi" && <span> Mã đơn hàng </span>}
                                    {this.context.lang === "en" && <span> Order ID </span>} 
                                </th>
                                <th className="d-none d-lg-block">
                                    {this.context.lang === "vi" && <span> Ngày tạo đơn </span>}
                                    {this.context.lang === "en" && <span> Created date </span>} 
                                </th>
                                <th>
                                    {this.context.lang === "vi" && <span> Tổng cộng </span>}
                                    {this.context.lang === "en" && <span> Total </span>} 
                                </th>
                                <th style={{textAlign: 'center'}}>
                                    {this.context.lang === "vi" && <span> Hành động </span>}
                                    {this.context.lang === "en" && <span> Action </span>} 
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                {display_order.slice((this.props.model.activePage - 1) * 10,
                                    (this.props.model.activePage * 10))}
                            </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={containerStyle(this.props.model.orders_search.length)}>
                        <Pagination className="aprycot-panigation"
                            initialPage={1} show={10} 
                            pageCount={Math.ceil(this.props.model.orders_search.length/10)} 
                            onChange={page => this.changePage(page)}>
                        {({ setPage, page, index, currentPage, isPrev, isNext, isCurrentPage }) => {
                            if (isPrev)
                            return (
                                <div style={itemStyle} onClick={() => setPage({ prev: true })}>
                                {"<"}
                                </div>
                            );

                            if (isNext)
                            return (
                                <div style={itemStyle} onClick={() => setPage({ next: true })}>
                                {">"}
                                </div>
                            );

                            return (
                            <div className="aprycot-pagination-button"
                                key={index}
                                style={{ ...itemStyle, backgroundColor: isCurrentPage ? "#F09A61" : "white" }}
                                onClick={() => {
                                console.log(`Navigating from page ${currentPage} to page ${page}`);
                                setPage({ page });
                                }}>
                                <h1 className="aprycot-pagination-number">{page}</h1>
                            </div>
                            );
                        }}
                        </Pagination>
                        </Col>
                    </Row>             
                <Modal isOpen={this.props.model.isModalOpen} toggle={this.toggleModal} fullscreen ref={(el) => {this.componentRef = el}}>
                    <ModalBody>
                        <Container className="order-content">
                            <Row style={{marginBottom: '30px'}}>
                                <Col xs="8">
                                <img width="120px" height="41px" src='/assets/images/brand.png'/>
                                </Col>
                                <Col xs="4" className="ms-auto">
                                <Button className="out-bill-button" onClick={() => this.toggleModal('1', false)}> X </Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="order-header" xs="12" style={{textAlign: 'center', fontWeight: 'bold', fontSize: '30px'}}>
                                    {this.context.lang === "vi" && <span> HÓA ĐƠN </span>}
                                    {this.context.lang === "en" && <span> BILL </span>} 
                                </Col>
                            </Row>
                            <Row> 
                                <Col xs="12">
                                    {this.context.lang === "vi" && <span style={{fontWeight: 'bold'}}> Mã đơn hàng: </span>}
                                    {this.context.lang === "en" && <span style={{fontWeight: 'bold'}}> Order ID: </span>}
                                    {order.orderID} 
                                </Col>
                            </Row>
                            <Row style={{marginTop: '8px'}}>
                                <Col xs="12" md="6" className="order-customer-name"> 
                                {this.context.lang === "vi" && <span style={{fontWeight: 'bold'}}> Tên khách hàng: </span> }
                                {this.context.lang === "en" && <span style={{fontWeight: 'bold'}}> Customer name: </span> } 
                                {this.context.lang === "vi" && <span> Nguyễn Khoa Gia Cát </span>}
                                {this.context.lang === "en" && <span> Nguyen Khoa Gia Cat </span>}
                                {order.customerName}
                                </Col>
                                <Col xs="12" md="6">
                                    {this.context.lang === "vi" && <span style={{fontWeight: 'bold'}}>Ngày đặt hàng: </span>}
                                    {this.context.lang === "en" && <span style={{fontWeight: 'bold'}}>Created date: </span>}
                                    
                                    {order.orderDate}
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <Table className="manage-table" responsive hover striped style={{marginTop: '10px'}}>
                                <thead>
                                    <tr>
                                    <th style={{textAlign: 'center'}}>
                                        #
                                    </th>
                                    <th>
                                        {this.context.lang === "vi" && <span> Tên món ăn </span>}
                                        {this.context.lang === "en" && <span> Food name </span>}
                                    </th>
                                    <th style={{textAlign: 'center'}}>
                                        {this.context.lang === "vi" && <span> Đơn giá </span>}
                                        {this.context.lang === "en" && <span> Unit price </span>}
                                    </th>
                                    <th style={{textAlign: 'center'}}>
                                        {this.context.lang === "vi" && <span> Số lượng </span>}
                                        {this.context.lang === "en" && <span> Quantity </span>}
                                    </th>
                                    <th style={{textAlign: 'right'}}>
                                        {this.context.lang === "vi" && <span> Thành tiền </span>}
                                        {this.context.lang === "en" && <span> Total </span>}
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {details_open}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th colSpan="4" style={{textAlign: 'center'}}>
                                            {this.context.lang === "vi" && <span> Tổng cộng </span>}
                                            {this.context.lang === "en" && <span> Total </span>}
                                        </th>
                                        <th style={{textAlign: 'right'}}>
                                            {(total*23000).toLocaleString('vi-VN')}đ
                                        </th>
                                    </tr>
                                </tfoot>
                                </Table>
                                </Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row>
                                <Col md="3" className='ms-auto'>
                                <ReactToPrint 
                                    trigger={() => <Button className="print-bill-button"> 
                                        {this.context.lang === "vi" && <span> In hóa đơn </span>}
                                        {this.context.lang === "en" && <span> Print bill </span>}
                                    </Button>}
                                    content={() => this.componentRef}
                                    pageStyle={pageStyle} />
                                </Col>
                            </Row>
                        </Container>
                    </ModalBody>
                </Modal>
                </Container> 
        )
    }
}

ViewOrder.contextType = LoginContext;

export default ViewOrder;