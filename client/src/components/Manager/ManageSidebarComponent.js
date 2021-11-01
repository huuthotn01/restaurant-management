import React, { Component } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarContent, SidebarFooter, SidebarHeader } from 'react-pro-sidebar';
import { FaGem, FaHeart, FaGithub } from 'react-icons/fa';

class ManageSideBar extends Component {
    render(){
        return(
            <ProSidebar className="cat-manager-sidebar">
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
                        <img style={{'margin-right': '5px', 'margin-top': '-5px'}} height="52px" width="80px" src="/assets/images/MainLogo.png" /> 
                        <span> Quản lý </span>
                    </div>
                </SidebarHeader>
                <SidebarContent>
                    <Menu iconShape="square">
                        <SubMenu title="Quản lý đơn hàng" icon={<FaHeart />}>
                            <MenuItem>Xem thông tin</MenuItem>
                            <MenuItem>Thống kê đơn hàng</MenuItem>
                        </SubMenu>
                        <SubMenu title="Quản lý khách hàng" icon={<FaHeart />}>
                            <MenuItem>Xem thông tin</MenuItem>
                            <MenuItem>Xác thực tài khoản</MenuItem>
                        </SubMenu>
                        <SubMenu title="Quản lý nhân viên" icon={<FaHeart />}>
                            <MenuItem>Cấp tài khoản</MenuItem>
                            <MenuItem>Xem thông tin</MenuItem>
                        </SubMenu>
                        <SubMenu title="Quản lý menu" icon={<FaHeart />}>
                            <MenuItem>Thêm món ăn</MenuItem>
                            <MenuItem>Sửa thông tin </MenuItem>
                            <MenuItem>Xóa món ăn </MenuItem>
                        </SubMenu>
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
        );
    }
}

export default ManageSideBar;