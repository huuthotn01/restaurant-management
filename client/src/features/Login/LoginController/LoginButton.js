import React from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { LoginContext } from '../../SharedComponent/LoginContext';

class LoginButton extends React.Component {
    render() {
        return (
            <div className='NavigationPanel' style={{width: "100%"}}>
                <span className='nav-link' onClick={this.props.onClick}>
                    <FaSignInAlt /> {this.context.lang === "vi" ? "Đăng nhập / Đăng kí" : "Sign in / Sign up"}
                </span>
            </div>
        );
    }
}

LoginButton.contextType = LoginContext;

export { LoginButton };