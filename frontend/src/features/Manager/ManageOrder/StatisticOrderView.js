import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Input, Button } from 'reactstrap';
import { Table } from 'reactstrap';
import { FaSearch } from 'react-icons/fa';

import { XAxis, YAxis, Tooltip, Legend, Line, LineChart, CartesianGrid, ResponsiveContainer } from 'recharts'
import '../manager.css';

import { LoginContext } from '../../SharedComponent/LoginContext'

class StatisticOrder extends Component {
    constructor(props) {
        super(props);
        this.onInputTime = this.onInputTime.bind(this);
    }

    onInputTime() {
        this.props.getOrderList(this.start_time.value, this.end_time.value);
    }

    render() {
        console.log(this.props.model.Data_Statistic);
        const orders_statistic = this.props.model.Data_Statistic.map((day) => {
            return (
                <tr>
                <th scope="row">
                    {this.props.model.Data_Statistic.indexOf(day) + 1}
                </th>
                <td style={{textAlign: 'center'}}>
                    {day.Day}
                </td>
                <td style={{textAlign: 'center'}}>
                    {(day.Total).toLocaleString('vi-VN')}đ
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
                        <Col md="4" xs="12" className='statistic-order-header'> 
                            {this.context.lang === "vi" && <span> Thống kê đơn hàng </span>}
                            {this.context.lang === "en" && <span> Statistic order </span>}
                        </Col>
                        <Col md="8" xs="12">
                        <Row>
                            <Col md="4" xs="12">
                                <Input className="search-box" id="startTime" name="date" placeholder="Bắt đầu" type="date"
                                    innerRef={(input) => this.start_time = input} />
                            </Col>
                            <Col md="4" xs="12">
                                <Input className="search-box" id="endTime" name="date" placeholder="Kết thúc" type="date"
                                    innerRef={(input) => this.end_time = input} />
                            </Col>
                            <Col md="4" xs="12">
                                <Button className="search-statistic-button" style={{marginTop: '0px'}} onClick={this.onInputTime}>
                                    <FaSearch /> 
                                    {this.context.lang === "vi" && <span> Tìm <span style={{textTransform: 'lowercase'}}> kiếm </span> </span>}
                                    {this.context.lang === "en" && <span> Search </span>}
                                    
                                </Button>
                            </Col>
                        </Row>
                        </Col>
                    </Row>
                    <Row> 
                        <Col className="total-money"> 
                            {this.context.lang === "vi" && <span> Tổng doanh thu </span>}
                            {this.context.lang === "en" && <span> Total revenue </span>}
                            {total_money.toLocaleString('vi-VN')}đ </Col>
                    </Row>
                    
                    <Row className="total-money-chart"> 
                    <ResponsiveContainer width="90%" height={200}>               
                        <LineChart width={730} height={250} data={this.props.model.Data_Statistic}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="Day" />
                            <YAxis tickFormatter={DataFormater}/>
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="Total" stroke="#8884d8" />
                        </LineChart>
                    </ResponsiveContainer>
                    </Row>
                    <Row>
                    <Col>
                        <Table className="manage-table" responsive hover striped>
                            <thead>
                                <tr>
                                <th>
                                    #
                                </th>
                                <th style={{textAlign: 'center'}}>
                                    {this.context.lang === "vi" && <span> Ngày </span>}
                                    {this.context.lang === "en" && <span> Date </span>}
                                </th>
                                <th style={{textAlign: 'center'}}>
                                    {this.context.lang === "vi" && <span> Doanh thu </span>}
                                    {this.context.lang === "en" && <span> Revenue </span>}
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

StatisticOrder.contextType = LoginContext

export default StatisticOrder;