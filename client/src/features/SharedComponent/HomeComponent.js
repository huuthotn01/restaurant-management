import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Switch, Redirect} from 'react-router-dom';
import { LoginContext } from './LoginContext';

class Home extends Component {
    render() {
        if (this.context.role === "2") return (
            <Switch>
                <Redirect to="/manage" />
            </Switch>
        );
        return(   
            <Container>
                <Row>
                    <img src='/assets/images/jumbotron.png' alt="Ảnh" />
                </Row>
                <Row>
                    <Col xs="12" className="home-food">
                    Món ăn nổi bật
                    </Col>
                </Row>
                <Row>
                    <Col lg="3" md="6" xs="6">
                        <img src="/assets/images/Food1.jpg" alt = "Mon 1" className="home-img1"></img>
                    </Col>
                    <Col lg="3" md="6" xs="6">
                        <img src="/assets/images/Food2.jpg" alt = "Mon 2" className="home-img2"></img>
                    </Col>
                    <Col lg="3" md="6" xs="6">
                        <img src="/assets/images/Food3.jpg" alt = "Mon 3" className="home-img3"></img>
                    </Col>
                    <Col lg="3" md="6" xs="6">
                        <img src="/assets/images/Food4.jpg" alt = "Mon 4" className="home-img4"></img>
                    </Col>
                </Row>
            </Container>
        );
    }
}

Home.contextType = LoginContext;

export default Home;