import React, { Component } from "react";
import ManageSidebar from '../ManageSidebarComponent';
import { Container, Row, Col, Button } from "reactstrap";

import ViewCustomerView from './ViewCustomerView';
import AuthenticateCustomerView from './AuthenticateCustomerView';

import '../manager.css';

class ManageCustomerView extends Component {
    constructor(props) {
        super(props);
        this.onClickView = this.onClickView.bind(this);
        this.onClickAuth = this.onClickAuth.bind(this);
    }

    onClickAuth() {
        this.props.getNotAuthCustomerList();
        this.props.changeView(0);
    }

    onClickView() {
        this.props.changeView(1);
    }

    render() {
        const Auth = <AuthenticateCustomerView model = {this.props.model} 
                                               getNotAuthCustomerList = {this.props.getNotAuthCustomerList}
                                               onToggleModalAuth = {this.props.onToggleModalAuth} 
                                               authCus = {this.props.authCus} />;
        const View = <ViewCustomerView model = {this.props.model} getCustomerList = {this.props.getCustomerList} 
                                        onToggleViewModal = {this.props.onToggleViewModal} 
                                        onToggleDeleteModal = {this.props.onToggleDeleteModal} 
                                        deleteCustomer = {this.props.deleteCustomer}/>;
        return  <>
                    <ManageSidebar />
                    <Container>
                        <Row>
                            <Col md="6" style={{paddingLeft: '20px'}}> 
                                <Button onClick={this.onClickAuth} className="manage-button"> 
                                    Xác <span style={{textTransform: 'lowercase'}}> thực khách hàng </span> 
                                </Button> 
                            </Col>
                            <Col md="6"> 
                                <Button onClick={this.onClickView} className="manage-button"> 
                                    Xem <span style={{textTransform: 'lowercase'}}> thông tin khách hàng </span> 
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                    {this.props.model.option === 0 && Auth}
                    {this.props.model.option === 1 && View}
                </>
    }
}

export default ManageCustomerView;