import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, NavLink } from 'reactstrap';
import { FaShoppingCart, FaBookOpen, FaTable } from 'react-icons/fa';
import { LoginView } from '../login/LoginView';
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
                            <NavItem className="flex-item" style={{flexGrow: "4"}}>
                            <LinkContainer to='/reservation'>
                            <NavLink className="nav-text">
                                <FaTable /> Đặt bàn
                            </NavLink>
                            </LinkContainer>
                            </NavItem>
                            <NavItem className="flex-item" style={{flexGrow: "4"}}>
                            <LinkContainer to='/food_ordering'>
                            <NavLink>
                                <FaBookOpen /> Đặt món ăn
                            </NavLink>
                            </LinkContainer>
                            </NavItem>    
                            <NavItem className="flex-item" style={{flexGrow: "4"}}>
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