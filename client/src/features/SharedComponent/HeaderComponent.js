import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, NavLink } from 'reactstrap';
import { FaShoppingCart, FaBookOpen, FaTable } from 'react-icons/fa';
import { Login } from '../login/Login';

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
                            <NavItem className="flex-item" style={{flexGrow: "3"}}>
                            <NavLink className="nav-text" href="/">
                                <FaTable /> Đặt bàn
                            </NavLink>
                            </NavItem>
                            <NavItem className="flex-item" style={{flexGrow: "3"}}>
                            <NavLink href="/">
                                <FaBookOpen /> Đặt món ăn
                            </NavLink>
                            </NavItem>
                            <NavItem className="flex-item" style={{flexGrow: "3"}}>
                                <NavLink href="/">
                                    <FaShoppingCart /> Giỏ hàng
                                </NavLink>
                            </NavItem>
                            <NavItem className="flex-item" style={{flexGrow: "4"}}>
                                <Login />
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
export default Header;