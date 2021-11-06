import React from 'react';
import {Logout} from './Google';
import { FaEdit } from 'react-icons/fa';
import { GrUserManager } from 'react-icons/gr';
import { Nav, NavBar, MenuItem, Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Image from 'react-bootstrap/Image';
import { ButtonGroup } from 'reactstrap';
import { LoginContext, loginInfo } from './LoginContext';

class In extends React.Component {
    constructor(props) {
        super(props);
        this.toChangeInfo = async (context) => {
            const response = await fetch('/change-info-request', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(context)
            });
        };
    }

    render() {
        return (
            <div className='NavigationPanel' style={{width: "100%"}}>
                <span className='nav-link' style={{padding: "0px"}}>
                    <Image style={{height: "36.8px", width: "36.8px"}} src={this.props.avatar} roundedCircle /> <b>{this.props.context.fName}</b>
                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle split variant='success' style={{marginLeft: "5px", paddingTop: "0px", marginTop: "0px", paddingBottom: "0px", backgroundColor: "transparent", color: "black", borderColor: "transparent"}} />
                        <Dropdown.Menu>
                            <LinkContainer to='/manage' >
                                <Dropdown.Item eventKey="1">
                                    <GrUserManager className='socialNetsIcon' style={{marginRight: "0px"}} /> <span id="edit-text" style={{fontFamily: 'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"', fontSize: "14px"}} >Quản lý</span>
                                </Dropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/change-info' >
                            <Dropdown.Item eventKey="2" >
                                <FaEdit className='socialNetsIcon' style={{marginRight: "0px"}} /> <span id="edit-text" style={{fontFamily: 'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"', fontSize: "14px"}} >Chỉnh sửa thông tin</span>
                            </Dropdown.Item>
                            </LinkContainer>
                            <Dropdown.Item eventKey="3">
                                <Logout context={this.props.context} />
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </span>
            </div>
        );
    }
}
// onClick={() => {this.toChangeInfo(loginInfo)}}
export {In};