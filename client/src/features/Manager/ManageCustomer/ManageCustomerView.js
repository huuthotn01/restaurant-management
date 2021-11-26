import React, { Component } from "react";
import ManageSidebar from '../ManageSidebarComponent';
import { Container, Row, Col, Button } from "reactstrap";

import ViewCustomerView from './ViewCustomerView';
import AuthenticateCustomerView from './AuthenticateCustomerView';

import { LoginContext } from "../../SharedComponent/LoginContext";

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
                            <Col xs="6" style={{paddingLeft: '20px'}}> 
                                <Button onClick={this.onClickAuth} className="manage-button"> 
                                    {this.context.lang === "vi" && <span> Xác <span style={{textTransform: 'lowercase'}}> thực <br className="d-sm-none" /> khách hàng </span>  </span>}
                                    {this.context.lang === "en" && <span> Authenticate <span style={{textTransform: 'lowercase'}}> <br className="d-sm-none" /> customer </span> </span>}
                                </Button> 
                            </Col>
                            <Col xs="6"> 
                                <Button onClick={this.onClickView} className="manage-button"> 
                                    {this.context.lang === "vi" && <span> Xem <span style={{textTransform: 'lowercase'}}> thông tin khách hàng </span>   </span>}
                                    {this.context.lang === "en" && <span> View <span style={{textTransform: 'lowercase'}}> customer infomation </span>  </span>}
                                    
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                    {this.props.model.option === 0 && Auth}
                    {this.props.model.option === 1 && View}
                </>
    }
}

ManageCustomerView.contextType = LoginContext

export default ManageCustomerView;