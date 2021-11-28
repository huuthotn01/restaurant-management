import React from 'react';
import { ChangeInfoForm } from './ChangeInfoController/ChangeInfoForm';
import { ChangeInfoPass } from './ChangeInfoController/ChangeInfoPass';
import { Nav, Tab, Container, Row, Col, Image } from 'react-bootstrap';
import { LoginContext } from '../SharedComponent/LoginContext';
import { AiFillLock } from 'react-icons/ai';
import { FaInfoCircle } from 'react-icons/fa';
import { Switch, Redirect } from 'react-router-dom';
import { getUserInfo } from './ChangeInfoModel';

class ChangeInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {
                username: '',
                lname: '',
                fname: '',
                email: '',
                phone: ''
            },
            haspass: false,
            ok: false
        };
    }

    async componentDidMount() {
        const body = await getUserInfo(this.context.email);
        if (!body.succ) {
            console.log("Error occurreddd!");
            return;
        }
        this.setState({
            info: body.info,
            haspass: body.haspass
        }, () => {
            this.setState({
                ok: true
            });
        });
    }

    render() {
        if (!this.context.isIn) return (
            <Switch>
                <Redirect to='/home' />
            </Switch>
        );
        if (this.context.role === "2") return (
            <Switch>
                <Redirect to='/manage' />
            </Switch>
        );
        return (
            <Container style={{marginTop: "30px"}}>
            <Tab.Container defaultActiveKey='change-info'>
            <Row>
            <Col xs={3}>
                <div style={{display: "flex", "flexDirection": "column", alignItems: "center"}}> 
                    <Image style={{height: "50%", width: "50%"}} src={this.context.avatarURL} roundedCircle /> 
                    <br /> <b>{this.context.lName + ' ' + this.context.fName}</b> 
                </div>
                <hr />
                <div style={{display: "flex", "flexDirection": "column", alignItems: "center"}}>
                <Nav variant='tabs' className='flex-column' style={{width: "100%"}} >
                    <Nav.Item className='changeinfo-navitem' style={{paddingBottom: "5px"}} >
                        <Nav.Link eventKey='change-info' style={{borderLeftStyle: "solid", borderLeftColor: "grey"}}>
                            <Container className='changeinfo-tab'>
                                <FaInfoCircle/> <span>{this.context.lang === "vi" ? "Thông tin cá nhân" : "Personal information"}</span>
                            </Container>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='changeinfo-navitem' style={{paddingTop: "5px"}} >
                        <Nav.Link eventKey='change-pass' style={{borderLeftStyle: "solid", borderLeftColor: "grey"}}>
                            <Container className='changeinfo-tab'>
                                <AiFillLock/> <span>{this.context.lang === "vi" ? "Bảo mật tài khoản" : "Account security"}</span>
                            </Container>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                </div>
            </Col>
            <Col>
                {this.state.ok && <Tab.Content>
                    <Tab.Pane eventKey='change-info'>
                        <ChangeInfoForm info={this.state.info} />
                    </Tab.Pane>
                    <Tab.Pane eventKey='change-pass'>
                        <ChangeInfoPass haspass={this.state.haspass} />
                    </Tab.Pane>
                </Tab.Content>}
            </Col>
            </Row>
            </Tab.Container>
            </Container>
        );
    }
}

ChangeInfo.contextType = LoginContext;

export { ChangeInfo };