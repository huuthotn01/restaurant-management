import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, NavLink } from 'reactstrap';
import { FaBookOpen, FaTable } from 'react-icons/fa';
import { LoginView } from '../Login/LoginView';
import { Dropdown } from 'react-bootstrap';
import { ButtonGroup } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Language } from './ChangeLang';
import { LoginContext } from './LoginContext';
import { FaLanguage } from 'react-icons/fa';

class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen : false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }
    toggleNav() {
        this.setState({isNavOpen: !this.state.isNavOpen})
    }
    render() {
        return (
            <div>
                <Navbar className="navbar-header" color="light"  expand="md"  light container>
                    <LinkContainer to='/home'>
                    <NavbarBrand>
                    <img width="120px" height="50px" className="navbar-brand" src='assets/images/brand.png' alt="Logo"></img>
                    </NavbarBrand>
                    </LinkContainer>
                    <NavbarToggler className="me-2 navbar-button" onClick={this.toggleNav}/>
                    <Collapse navbar isOpen={this.state.isNavOpen}>
                        <Nav className="nav-header flex-container" style={{width: "100%"}} navbar>
                            <NavItem className="flex-item" style={{flexGrow: "5", backgroundColor: "#FFFAF7"}}>
                                <Dropdown as={ButtonGroup}>
                                    <Dropdown.Toggle variant='success' style={{marginLeft: "5px", paddingTop: "4px", marginTop: "0px", paddingBottom: "0px", backgroundColor: "transparent", color: "black", borderColor: "transparent"}} >
                                        <span style={{textTransform: 'none', fontFamily: 'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"', fontSize: "15px"}}>
                                            <FaTable /> {this.context.lang === "vi" ? "D???ch v??? b??n" : "Table Service"}
                                        </span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <LinkContainer to='/reservation' >
                                            <Dropdown.Item eventKey="1">
                                                <FaTable className='socialNetsIcon' style={{marginRight: "0px"}} /> <span id="edit-text" style={{fontFamily: 'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"', fontSize: "15px"}} >
                                                {this.context.lang === "vi" ? "?????t b??n" : "Table Reservation"}</span>
                                            </Dropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to='/cancel_reservation' >
                                            <Dropdown.Item eventKey="2" >
                                                <FaTable className='socialNetsIcon' style={{marginRight: "0px"}} /> <span id="edit-text" style={{fontFamily: 'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"', fontSize: "15px"}} >
                                                {this.context.lang === "vi" ? "H???y ?????t b??n" : "Table Cancellation"}</span>
                                            </Dropdown.Item>
                                        </LinkContainer>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </NavItem>
                            <LinkContainer to='/ordering' style={{cursor: 'pointer',  backgroundColor: "#FFFAF7"}}>
                            <NavItem className="flex-item" style={{flexGrow: "9"}}>
                            <NavLink>
                                <FaBookOpen /> {this.context.lang === "vi" ? "?????t m??n ??n" : "Food Ordering"}
                            </NavLink>
                            </NavItem>
                            </LinkContainer>
                            <NavItem className="flex-item" style={{flexGrow: "8", cursor: 'pointer', textAlign: 'center', backgroundColor: "#FFFAF7"}}>
                                <LoginView />
                            </NavItem>
                            <NavItem className="flex-item" style={{flexGrow: "1", cursor: 'pointer',  backgroundColor: "#FFFAF7"}}>
                                <Language />
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

Header.contextType = LoginContext;

export default Header;