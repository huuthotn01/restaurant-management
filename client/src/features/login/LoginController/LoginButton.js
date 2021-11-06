import React from 'react';
import { FaSignInAlt } from 'react-icons/fa';

function LoginButton(props) {
    return (
        <div className='NavigationPanel' style={{width: "100%"}}>
            <span className='nav-link' onClick={props.onClick}>
                <FaSignInAlt /> Đăng nhập / Đăng kí
            </span>
        </div>
    );
}

export { LoginButton };