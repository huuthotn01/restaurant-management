import React from 'react';
import { LoginButton } from './LoginButton';
import {LoginWindow} from './LoginWindow';

class NotIn extends React.Component {
    render() {
        return (
            <>
                <LoginButton onClick={this.props.onClick} />
				{this.props.loginPopup && <LoginWindow onClick={this.props.onClick} />}
            </>
        );
    }
}

export {NotIn};