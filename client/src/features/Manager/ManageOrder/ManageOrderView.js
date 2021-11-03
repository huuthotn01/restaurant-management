import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ManageSideBar from '../ManageSidebarComponent';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import { Table } from 'reactstrap';
import { FaSearch } from 'react-icons/fa';
import { Modal, ModalBody, ModalFooter } from 'reactstrap';
import ReactToPrint from 'react-to-print';
import Pagination from "pagination-component";
import '../manager.css';

class ManageOrderView extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
        this.onInputOrderID = this.onInputOrderID.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.changeOrderOpen = this.changeOrderOpen.bind(this);
        this.changePage = this.changePage.bind(this);
        this.onClickView = this.onClickView.bind(this);
        this.onClickStatistic = this.onClickStatistic.bind(this);
    }

    onClickView() {
        this.props.changeView(0);
        this.setState({count: this.state.count + 1});
    }

    onClickStatistic() {
        this.props.changeView(1);
        this.setState({count: this.state.count + 1});
    }

    changePage(page) {
        this.props.onPageChange(page);
        this.setState({count: this.state.count + 1});
    }
    changeOrderOpen(orderID) {
        this.props.onChangeOrderOpen(orderID);
        this.setState({count: this.state.count + 1});
    }

    toggleModal() {
        this.props.onToggleModal();
        console.log(this.props.model);
    }

    onInputOrderID() {
        this.props.onPageChange(1);
        this.props.getOrders(this.search_item.value);
        console.log(this.props.model.orders_search.length);
        this.setState({count: this.state.count + 1});
    }

    render() {  
        const display_order = this.props.model.orders_search.map((order) => {
            return (
                <tr>
                <th scope="row">
                    {order.orderIdx}
                </th>
                <td>
                    Nguyễn Khoa Gia Cát
                </td>
                <td>
                    {order.orderID}
                </td>
                <td>
                    {order.orderDate}
                </td>
                <td>
                    {(order.totalPrice*23000).toLocaleString('vi-VN')}đ
                </td>
                <td>
                    <Button className='order-button' 
                            onClick={() => {this.toggleModal(); this.changeOrderOpen(order.orderID); }}> 
                            Xem 
                    </Button>
                </td>
                </tr>
        )}); 

        let not_Found = <span></span>;
        if (display_order.length === 0) not_Found = <div className="not-found-search"> Không tìm thấy kết quả </div>
        else not_Found = <span></span>;
        
        let total = 0;

        const details_open = this.props.model.orderDetailsOpen.map(detail => {
            total += detail.productPrice * detail.quantity;
            return (
                <tr>
                <th scope="row" style={{textAlign: 'center'}}>
                    {detail.detailIdx}
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
        
        const View = 
                <Container>
                    <Row className="manage-order-heading">
                        <Col className='manage-order-header'> Danh sách đơn hàng </Col>
                        <Col> 
                        <Row>
                            <Form className="search-bar" onSubmit={e => {e.preventDefault();}}>
                                <FormGroup>
                                    <Input className="search-box" id="search" name="search-drugs" placeholder="Nhập đơn hàng"
                                    innerRef={(input) => this.search_item = input} />
                                </FormGroup>
                            </Form> 
                            <Button className="search-button" onClick={this.onInputOrderID}>
                                <FaSearch /> Tìm kiếm
                            </Button>
                        </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {not_Found}
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
                                    Mã đơn hàng
                                </th>
                                <th>
                                    Ngày tạo đơn
                                </th>
                                <th>
                                    Tổng tiền
                                </th>
                                <th>
                                    Hành động
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
                                style={{ ...itemStyle, backgroundColor: isCurrentPage ? "#EA6E12" : "white" }}
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
                        <Container>
                            <Row style={{marginBottom: '30px'}}>
                                <Col md="8">
                                <img width="120px" height="41px" src='/assets/images/brand.png'/>
                                </Col>
                                <Col md="4" className="ms-auto">
                                <Button className="out-bill-button" onClick={this.toggleModal}> X </Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12" style={{textAlign: 'center', fontWeight: 'bold', fontSize: '30px'}}>
                                    HÓA ĐƠN
                                </Col>
                            </Row>
                            <Row> 
                                <Col>
                                    <span style={{fontWeight: 'bold'}}> Mã đơn hàng: </span>
                                    {order.orderID} 
                                </Col>
                            </Row>
                            <Row style={{marginTop: '8px'}}>
                                <Col> 
                                    <span style={{fontWeight: 'bold'}}> Tên khách hàng: </span> 
                                    Nguyễn Khoa Gia Cát {order.customerName}
                                </Col>
                                <Col>
                                    <span style={{fontWeight: 'bold'}}>Ngày đặt hàng: </span>
                                    {order.orderDate}
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <Table responsive hover striped style={{marginTop: '10px'}}>
                                <thead>
                                    <tr>
                                    <th style={{textAlign: 'center'}}>
                                        #
                                    </th>
                                    <th>
                                        Tên món ăn
                                    </th>
                                    <th style={{textAlign: 'center'}}>
                                        Đơn giá
                                    </th>
                                    <th style={{textAlign: 'center'}}>
                                        Số lượng
                                    </th>
                                    <th style={{textAlign: 'right'}}>
                                        Thành tiền
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {details_open}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th colSpan="4" style={{textAlign: 'center'}}>
                                            Tổng cộng
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
                    </ModalBody>
                    <ModalFooter>
                        <Container>
                            <Row>
                                <Col md="3" className='ms-auto'>
                                <ReactToPrint 
                                    trigger={() => <Button className="print-bill-button"> In hóa đơn </Button>}
                                    content={() => this.componentRef}
                                    pageStyle={pageStyle} />
                                </Col>
                            </Row>
                        </Container>
                    </ModalFooter>
                </Modal>
                </Container> 
        const Statistic = 
                <Container>
                    <Row className="manage-order-heading">
                        <Col className='manage-order-header'> Thống kê đơn hàng </Col>
                    </Row>
                </Container>
        return(
            <div>
                <ManageSideBar />
                <Container>
                    <Row>
                        <Col md="6"> 
                            <Button onClick={this.onClickView} className="manage-order-button"> 
                                Xem thông tin đơn hàng 
                            </Button> 
                        </Col>
                        <Col md="6"> 
                            <Button onClick={this.onClickStatistic} className="manage-order-button"> 
                                Thống kê đơn hàng 
                            </Button>
                        </Col>
                    </Row>
                    {(this.props.model.option === 0) && View}
                    {(this.props.model.option === 1) && Statistic}
                </Container>
            </div>
        );
    }
}

export default ManageOrderView;