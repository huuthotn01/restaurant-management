import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Home extends Component {
    render(){
        return(   
            <Container>
                <Row>
                    <img src='/assets/images/jumbotron.png' alt="Ảnh" />
                </Row>
                <Row>
                    <Col><NavLink to='/manage'>Giao diện quản lý</NavLink></Col>
                </Row>
            </Container>
        );
    }
}

export default Home;