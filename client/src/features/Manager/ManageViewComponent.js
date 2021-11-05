import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardBody, CardTitle} from 'reactstrap';
import './manager.css';

class ManageView extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col md="12"> <h1 className="cat-manager-header">Chào mừng bạn đến với quản lý nhà hàng Apycot !</h1>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col md="6">
                        <a className="cat-manager-item-link" href='/manage_order'>
                        <Card className="cat-manager-item-right">
                            <img className="cat-manager-img" width="91.98px" height="90px" src="/assets/images/manage_order.png" alt = "Quản lý đơn hàng"></img>
                            <CardBody>
                            <CardTitle tag="h5" className="cat-manager-text">Quản lý đơn hàng</CardTitle>
                            </CardBody>
                        </Card>
                        </a>
                    </Col>
                    <Col md="6">    
                        <Card className="cat-manager-item-left">
                            <img className="cat-manager-img" width="90px" height="90px" src="/assets/images/manage_customer.jpg" alt = "Quản lý khách hàng"></img>
                            <CardBody>
                            <CardTitle tag="h5" className="cat-manager-text">Quản lý khách hàng</CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card className="cat-manager-item-right">
                            <img className="cat-manager-img" width="90px" height="95px" src="/assets/images/manage_staff.png" alt = "Quản lý nhân viên"></img>
                            <CardBody>
                            <CardTitle tag="h5" className="cat-manager-text">Quản lý nhân viên</CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card className="cat-manager-item-left">
                            <img className="cat-manager-img" width="94px" height="95px" src="/assets/images/manage_menu.png" alt = "Quản lý Menu"></img>
                            <CardBody>
                            <CardTitle tag="h5" className="cat-manager-text">Quản lý Menu</CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default ManageView;