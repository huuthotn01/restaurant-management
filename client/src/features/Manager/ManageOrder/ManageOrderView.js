import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ManageSideBar from '../ManageSidebarComponent';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import { Table } from 'reactstrap';
import { FaSearch } from 'react-icons/fa';
import '../manager.css';

class ManageOrderView extends Component {
    constructor(props){
        super(props);
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    onSearchChange() {
        this.props.onSubmitSearch(this.search_item.value);
        console.log(this.props.model.orders_search);
    }
    render() {
        const order_list = this.props.model.orders_search.map((order) => {
            return (
                <tr>
                <th scope="row">
                    {order.Index}
                </th>
                <td>
                    Nguyễn Khoa Gia Cát
                </td>
                <td>
                    {order['Order Number']}
                </td>
                <td>
                    {order['Order Date']}
                </td>
                <td>
                    {(order['Total Price']*23000).toLocaleString('vi-VN')}đ
                </td>
                <td>
                    Xem
                </td>
                </tr>
        )})
        return(
            <div>
                <ManageSideBar />
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
                            <Button className="search-button" onClick={this.onSearchChange}>
                                <FaSearch /> Tìm kiếm
                            </Button>
                        </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Table responsive hover striped style={{marginLeft: '10px'}}>
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
                                {order_list}
                            </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ManageOrderView;