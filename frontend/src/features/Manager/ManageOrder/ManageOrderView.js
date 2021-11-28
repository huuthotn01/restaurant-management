import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';

import ManageSideBar from '../ManageSidebarComponent';
import ViewOrder from './ViewOrderView';
import StatisticOrder from './StatisticOrderView';

import { LoginContext } from '../../SharedComponent/LoginContext';

import '../manager.css';

class ManageOrderView extends Component {
    constructor(props) {
        super(props);
        this.onClickView = this.onClickView.bind(this);   
        this.onClickStatistic = this.onClickStatistic.bind(this);
    }
    onClickView() {
        this.props.changeView(0);
    }
    onClickStatistic() {
        this.props.changeView(1);
    }
    render() {     
        const View = <ViewOrder model = {this.props.model} 
                                onPageChange = {this.props.onPageChange}
                                onChangeOrderOpen = {this.props.onChangeOrderOpen}
                                onToggleModal = {this.props.onToggleModal}
                                getOrders = {this.props.getOrders}/>;
        const Statistic = <StatisticOrder model = {this.props.model}
                                          getOrderList={this.props.getOrderList}/>; 
        return(
            <>
                <ManageSideBar />
                <Container>
                    <Row>
                        <Col xs="6" style={{paddingLeft: '20px'}}> 
                            <Button onClick={this.onClickView} className="manage-button"> 
                                {this.context.lang === "vi" && <span> Xem <span style={{textTransform: 'lowercase'}}> thông tin đơn hàng </span> </span> }
                                {this.context.lang === "en" && <span> View Order </span>} 
                            </Button> 
                        </Col>
                        <Col xs="6"> 
                            <Button onClick={this.onClickStatistic} className="manage-button"> 
                                {this.context.lang === "vi" && <span> Thống <span style={{textTransform: 'lowercase'}}> kê <br className="d-sm-none"/> đơn hàng </span> </span> }
                                {this.context.lang === "en" && <span> Statistic Order </span>} 
                            </Button>
                        </Col>
                    </Row>
                    {(this.props.model.option === 0) && View}
                    {(this.props.model.option === 1) && Statistic}
                </Container>
            </>
        );
    }
}

ManageOrderView.contextType = LoginContext;

export default ManageOrderView;