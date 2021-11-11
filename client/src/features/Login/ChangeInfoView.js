import React from 'react';
import { ChangeInfoForm } from './ChangeInfoController/ChangeInfoForm';
import { ChangeInfoPass } from './ChangeInfoController/ChangeInfoPass';
import { Nav, Tab, Container, Row, Col, Image } from 'react-bootstrap';
import { LoginContext } from '../SharedComponent/LoginContext';
import { AiFillLock } from 'react-icons/ai';
import { FaInfoCircle } from 'react-icons/fa';
import { Switch, Redirect } from 'react-router-dom';

class ChangeInfo extends React.Component {
    render() {
        if (!this.context.isIn) return (
            <Switch>
                <Redirect to='/home' />
            </Switch>
        );
        return (
            <Container style={{marginTop: "30px"}}>
            <Tab.Container defaultActiveKey='change-info'>
            <Row>
            <Col xs={3}>
                <div style={{display: "flex", "flexDirection": "column", alignItems: "center"}}> 
                    <Image style={{height: "50%", width: "50%"}} src={this.context.avatarURL} roundedCircle /> 
                    <br /> <b>{this.context.fName + ' ' + this.context.lName}</b> 
                </div>
                <hr />
                <div style={{display: "flex", "flexDirection": "column", alignItems: "center"}}>
                <Nav variant='tabs' className='flex-column' style={{width: "100%"}} >
                    <Nav.Item style={{paddingBottom: "5px"}} >
                        <Nav.Link eventKey='change-info' style={{borderLeftStyle: "solid", borderLeftColor: "grey"}}>
                            <Container>
                                <FaInfoCircle/> <span>Thông tin cá nhân</span>
                            </Container>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item style={{paddingTop: "5px"}} >
                        <Nav.Link eventKey='change-pass' style={{borderLeftStyle: "solid", borderLeftColor: "grey"}}>
                            <Container><AiFillLock/> <span>Bảo mật tài khoản</span></Container>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                </div>
            </Col>
            <Col>
                <Tab.Content>
                    <Tab.Pane eventKey='change-info'>
                        <ChangeInfoForm />
                    </Tab.Pane>
                    <Tab.Pane eventKey='change-pass'>
                        <ChangeInfoPass />
                    </Tab.Pane>
                </Tab.Content>
            </Col>
            </Row>
            </Tab.Container>
            </Container>
        );
    }
}

ChangeInfo.contextType = LoginContext;

export { ChangeInfo };