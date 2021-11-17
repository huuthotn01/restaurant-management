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
            </Container>
        );
    }
}

Home.contextType = LoginContext;

export default Home;