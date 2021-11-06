import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { LoginButton } from '../login/LoginButton';
import {LoginWindow} from '../login/LoginWindow';
import { FaHome } from 'react-icons/fa';

class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loginPopup: false,
            isNavOpen: false
        }
        this.loginPopup = this.loginPopup.bind(this);
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    loginPopup() {
        this.setState({loginPopup: !this.state.loginPopup});
    }
    
    render() {
        return (
            <>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='/images/yellow_bee.jpg' height="30" width="41" alt='Restaurant' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><FaHome /> Home</NavLink>
                            </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <LoginButton onClick={this.loginPopup} />
                                    {this.state.loginPopup && <LoginWindow />}
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                            </div>
                        </div>
                    </div>
                </Jumbotron>             
            <div>
                
            </div>
            </>
        );
    }
}
export default Header;