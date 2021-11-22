import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, NavLink } from 'reactstrap';
import { FaShoppingCart, FaBookOpen, FaTable } from 'react-icons/fa';
import { LoginView } from '../login/LoginView';
import { Dropdown } from 'react-bootstrap';
import { ButtonGroup } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Header extends Component{
    render() {
        return (
            <div>
                <Navbar className="navbar-header" color="light"  expand="md"  light container>
                    <NavbarBrand href="/">
                    <img width="120px" height="41px" src='assets/images/brand.png' alt="Logo"></img>
                    </NavbarBrand>
                    <NavbarToggler />
                    <Collapse navbar>
                        <Nav className="nav-header flex-container" style={{width: "100%"}} navbar>
                            <NavItem className="flex-item" style={{flexGrow: "5"}}>
                            <NavLink className="nav-text">
                                <Dropdown as={ButtonGroup}>
                                    <Dropdown.Toggle variant='success' style={{marginLeft: "5px", paddingTop: "0px", marginTop: "0px", paddingBottom: "0px", backgroundColor: "transparent", color: "black", borderColor: "transparent"}} >
                                        <span style={{textTransform: 'none', fontFamily: 'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"', fontSize: "14px"}}>
                                            <FaTable /> Dịch vụ bàn
                                        </span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <LinkContainer to='/reservation' >
                                            <Dropdown.Item eventKey="1">
                                                <FaTable className='socialNetsIcon' style={{marginRight: "0px"}} /> <span id="edit-text" style={{fontFamily: 'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"', fontSize: "14px"}} >Đặt bàn</span>
                                            </Dropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to='/cancel_reservation' >
                                            <Dropdown.Item eventKey="2" >
                                                <FaTable className='socialNetsIcon' style={{marginRight: "0px"}} /> <span id="edit-text" style={{fontFamily: 'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"', fontSize: "14px"}} >Hủy đặt bàn</span>
                                            </Dropdown.Item>
                                        </LinkContainer>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </NavLink>
                            </NavItem>
                            <NavItem className="flex-item" style={{flexGrow: "5"}}>
                            <NavLink href="/ordering">
                                <FaBookOpen /> Đặt món ăn
                            </NavLink>
                            
                            </NavItem>
                            <NavItem className="flex-item" style={{flexGrow: "5"}}>
                                <LoginView />
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
export default Header;