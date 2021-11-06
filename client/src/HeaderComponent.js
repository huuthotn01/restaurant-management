import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, NavLink } from 'reactstrap';
//import { FaShoppingCart, FaBookOpen, FaTable } from 'react-icons/fa';
//import { Login } from '../login/Login';

class Header extends Component{
    render() {
        return (
            <div>
                <Navbar className="navbar-header" color="light"  expand="md"  light container>
                    <NavbarBrand href="/">
                    <img width="120px" height="41px" src='/images/brand.png' alt="Logo"></img>
                    </NavbarBrand>
                    <NavbarToggler />
                    <Collapse navbar>
                    <Nav className="me-auto nav-header"  navbar>
                        <NavItem>
                        <NavLink className="nav-text" href="/">
                             Đặt bàn
                        </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="/">
                             Đặt món ăn
                        </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ms-auto" navbar>
                    <NavItem>
                        <NavLink href="/">
                             Giỏ hàng
                        </NavLink>
                        </NavItem>
                        <NavItem>
                            {/* <Login /> */}
                            {/*<span style={{fontSize: '14px', color: 'black'}}> Đăng kí/Đăng nhập</span>*/}
                        </NavItem>
                    </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
export default Header;