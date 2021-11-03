import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Input, Button } from 'reactstrap';
import { Table } from 'reactstrap';
import { FaSearch } from 'react-icons/fa';

import { XAxis, YAxis, Tooltip, Legend, Line, LineChart, CartesianGrid } from 'recharts'
import '../manager.css';

class StatisticOrder extends Component {
    constructor(props) {
        super(props);
        this.onInputTime = this.onInputTime.bind(this);
    }

    onInputTime() {
        this.props.getOrderList(this.start_time.value, this.end_time.value);
    }

    render() {
        const orders_statistic = this.props.model.orders_statistic.map((order) => {
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
                </tr>
        )}); 

        let total_money = 0;
        this.props.model.Data_Statistic.map(order => {
            total_money += order["Total"];
            return order;
        })

        const DataFormater = (number) => {
            return (number.toString().toLocaleString('vi-VN')+'đ')
          }

        return (
            <Container>
                    <Row className="statistic-order-heading">
                        <Col md="4" className='statistic-order-header'> Thống kê đơn hàng </Col>
                        <Col md="8">
                        <Row>
                            <Col md="4">
                                <Input className="search-box" id="startTime" name="date" placeholder="Bắt đầu" type="date"
                                    innerRef={(input) => this.start_time = input} />
                            </Col>
                            <Col md="4">
                                <Input className="search-box" id="endTime" name="date" placeholder="Kết thúc" type="date"
                                    innerRef={(input) => this.end_time = input} />
                            </Col>
                            <Col md="4">
                                <Button className="search-statistic-button" style={{marginTop: '0px'}} onClick={this.onInputTime}>
                                    <FaSearch /> Tìm kiếm
                                </Button>
                            </Col>
                        </Row>
                        </Col>
                    </Row>
                    <Row> 
                        <Col className="total-money"> Tổng doanh thu: {total_money.toLocaleString('vi-VN')}đ </Col>
                    </Row>
                    
                    <Row className="total-money-chart">                
                        <LineChart width={730} height={250} data={this.props.model.Data_Statistic}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="Day" />
                            <YAxis tickFormatter={DataFormater}/>
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="Total" stroke="#8884d8" />
                        </LineChart>
                        
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
                                    Mã đơn hàng
                                </th>
                                <th>
                                    Ngày tạo đơn
                                </th>
                                <th>
                                    Tổng tiền
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders_statistic}
                            </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
        );
    }
}

export default StatisticOrder;