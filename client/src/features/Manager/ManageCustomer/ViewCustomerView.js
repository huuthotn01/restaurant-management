import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class ViewCustomerView extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col> Danh sách khách hàng </Col>
                </Row>
            </Container>
        )
    }
}

export default ViewCustomerView;