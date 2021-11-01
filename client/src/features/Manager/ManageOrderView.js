import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ManageSideBar from './ManageSidebarComponent';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import './manager.css';

class ManageOrderView extends Component {
    render() {
        return(
            <div>
                <ManageSideBar />
                <Container>
                    <Row>
                        <Col> Danh sách đơn hàng </Col>
                        <Col> 
                            <Form className="search-bar" onSubmit={e => {e.preventDefault();}}>
                                <FormGroup>
                                    <Input id="search" name="search-drugs" placeholder="Tìm đơn hàng"
                                    innerRef={(input) => this.search_item = input} />
                                </FormGroup>
                            </Form> 
                        </Col>
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