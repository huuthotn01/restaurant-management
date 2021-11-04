import React from 'react';
import {Logout} from './Google';
import { FaEdit } from 'react-icons/fa';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import { ButtonGroup } from 'reactstrap';
import { NavLink } from 'reactstrap';
import { LoginContext, loginInfo } from './LoginContext';

class In extends React.Component {
    constructor(props) {
        super(props);
        this.toChangeInfo = async (context) => {
            await fetch('/change-info', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(context)
            });
        };
    }

    render() {
        return (
            <LoginContext.Consumer>
            {(loginInfo) => 
            (<div className='NavigationPanel' style={{width: "100%"}}>
                <span className='nav-link' style={{padding: "0px"}}>
                    <Image style={{height: "36.8px", width: "36.8px"}} src={this.props.avatar} roundedCircle /> <b>{this.props.context.fName}</b>
                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle split variant='success' style={{marginLeft: "5px", paddingTop: "0px", marginTop: "0px", paddingBottom: "0px", backgroundColor: "transparent", color: "black", borderColor: "transparent"}} />
                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="1" onClick={
                                () => {this.toChangeInfo(loginInfo)}}
                            >
                                <FaEdit className='socialNetsIcon' style={{marginRight: "0px"}} /> <span id="edit-text" style={{fontFamily: 'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"', fontSize: "14px"}} >Chỉnh sửa thông tin</span>
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="2">
                                <Logout context={this.props.context} />
                            </Dropdown.Item>
                        </Dropdown.Menu>                 
                    </Dropdown>
                </span>
            </div>)}
            </LoginContext.Consumer>
        );
    }
}

export {In};