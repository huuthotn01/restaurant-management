import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, NavLink } from 'reactstrap';
import { FaShoppingCart, FaBookOpen, FaTable } from 'react-icons/fa';


class Header extends Component{
    render() {
        return (
            <div>
                <Navbar className="navbar-header" color="light"  expand="md"  light container>
                    <NavbarBrand href="/">
                    <img width="120px" height="41px" src='./images/brand.png' alt="Logo"></img>
                    </NavbarBrand>
                    <NavbarToggler />
                    <Collapse navbar>
                    <Nav className="me-auto nav-header"  navbar>
                        <NavItem>
                        <NavLink className="nav-text" href="/">
                            <FaTable className="header-icon"/> Đặt bàn
                        </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="/">
                            <FaBookOpen className="header-icon"/> Đặt món ăn
                        </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ms-auto" navbar>
                    <NavItem>
                        <NavLink href="/">
                            <FaShoppingCart className="header-icon" /> Giỏ hàng
                        </NavLink>
                        </NavItem>

                    </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
export default Header;