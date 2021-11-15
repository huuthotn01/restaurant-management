import React, { Component } from 'react';
import { ProSidebar, Menu, MenuItem, SidebarContent, SidebarFooter, SidebarHeader } from 'react-pro-sidebar';
import { FaHeart, FaGithub, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';

class ManageSideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled: false
        }
        this.onHandleToggleSidebar = this.onHandleToggleSidebar.bind(this);
    }

    onHandleToggleSidebar() {
        this.setState({toggled: !this.state.toggled})
    }

    render(){
        return(
            <>
            <ProSidebar className="cat-manager-sidebar" breakPoint="md" 
                        toggled={this.state.toggled} onToggle={this.onHandleToggleSidebar}>
                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            color: 'black'
                        }}
                        >
                        <img style={{'margin-right': '5px', 'margin-top': '-5px'}} height="52px" width="80px" src="/assets/images/MainLogo.png" alt="Sub Logo"/> 
                        <span> Quản lý </span>
                    </div>
                </SidebarHeader>
                <SidebarContent>
                    <Menu iconShape="square">
                        <MenuItem icon={<FaHeart />}>
                        Quản lý đơn hàng
                        <Link to="/manage_order" />
                        </MenuItem>
                        <MenuItem icon={<FaHeart />}>
                        Quản lý khách hàng
                        <Link to="/manage_customer" />
                        </MenuItem>
                        <MenuItem icon={<FaHeart />}>
                        Quản lý nhân viên
                        </MenuItem>
                        <MenuItem icon={<FaHeart />}>
                        Quản lý menu
                        </MenuItem>
                    </Menu>
                </SidebarContent>
                <SidebarFooter>
                <div
                    className="sidebar-btn-wrapper"
                    style={{
                        padding: '20px 24px',
                        textAlign: 'center'
                    }}
                    >
                    <div style={{textDecoration: 'none', color: 'black', 
                                border: '1px solid', borderRadius: '15px',
                                width: '150px', height: '35px', margin: 'auto', 'padding-top': '5px'}}>
                    <a
                        href="https://github.com/huuthotn01/restaurant-management"
                        target="_blank"
                        className="sidebar-btn"
                        rel="noopener noreferrer"
                        style={{textDecoration: 'none', color: 'black'}}
                    >
                        <FaGithub />
                        <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                        &nbsp; View Source
                        </span>
                    </a>
                    </div>
                </div>
                </SidebarFooter>
            </ProSidebar>
            <Container>
            <Row>
                <Col>
                    <Button className="d-md-none" style={{border: 'none'}} onClick={this.onHandleToggleSidebar}>
                        <FaBars />
                    </Button>
                </Col>
            </Row>
            </Container>
            </>
        );
    }
}

export default ManageSideBar;