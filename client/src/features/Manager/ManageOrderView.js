import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ManageSideBar from './ManageSidebarComponent';
import './manager.css';

class ManageOrderView extends Component {
    render() {
        return(
            <div>
                <ManageSideBar />
                <Container>
                    <Row>
                        <Col> Danh sách đơn hàng </Col>
                        <Col> Tìm đơn hàng </Col>
                    </Row>
                    <Row>
                        <Col>
                        Các đơn hàng
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ManageOrderView;