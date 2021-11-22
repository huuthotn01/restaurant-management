import React from 'react';
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import {FaGoogle, FaPowerOff} from 'react-icons/fa';
import { LoginContext } from '../../SharedComponent/LoginContext';

const clientID = '794152986942-bhdijd7jgc8925n3bq9dnulp586kqp0m.apps.googleusercontent.com';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.sendToken = async (tokenId) => {
            const response = await fetch('/gg_auth', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer'
                },
                body: JSON.stringify({'tokenId': tokenId})
            });
            const body = await response.json();
            return body;
        };

        this.refreshTokenSetup = (res) => {
            let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;
            console.log("RefreshTiming: ", res.tokenObj.expires_in);
            const refreshToken = async () => {
                const newAuthRes = await res.reloadAuthResponse();
                refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
                console.log("New refresh timing: ", refreshTiming);
                console.log('newAuthRes: ', newAuthRes);
                // saveUserToken(newAuthRes.access_token) <--- save new token
                console.log('new auth token: ', newAuthRes.id_token);
                this.sendToken(newAuthRes.id_token)
                .then(() => {
                    setTimeout(refreshToken, refreshTiming);
                });
            };
            setTimeout(refreshToken, refreshTiming);
        };
    
        this.onSuccess = async (res) => {
            console.log('Login Successed, Current User: ', res.profileObj);
            this.sendToken(res.tokenId)
            .then((r) => {
                    this.context.updateContext(true, r.info["fname"],r.info["lname"], r.info["email"], r.info["role"], r.info["avatar"]);
                    this.refreshTokenSetup(res);
                }
            );
        };

        this.onFailure = (res) => {
            console.log('Login Failed, Response: ', res);
        };
    }

    static contextType = LoginContext;

    render() {
        return (
            <GoogleLogin
                render={renderProps => (<FaGoogle className='socialNetsIcon' style={{marginTop: '0px'}} onClick={renderProps.onClick} disabled={renderProps.disabled} />)}
                clientId={clientID}
                buttonText="LogIn"
                onSuccess={this.onSuccess}
                onFailure={this.onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        );
    }
}

class SignOut extends React.Component {
    constructor(props) {
        super(props);
        this.onSuccess = async (res) => {
            await fetch('/logout', {
                method: "POST"
            });
            this.context.updateContext(false, '', '', '', "-1", '');
            console.log("Logout successfully");
        };
    }

    static contextType = LoginContext;

    render() {
        return (
            <div>
                <GoogleLogout
                    render={renderProps => (<span onClick={renderProps.onClick}> <FaPowerOff className='socialNetsIcon' style={{marginTop: '0px', marginRight: "5px"}} disabled={renderProps.disabled} /> 
                                                <span id="signout-text" style={{fontFamily: 'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"', fontSize: "14px"}} >
                                                    Đăng xuất</span> 
                                            </span>)}
                    clientId={clientID}
                    buttonText="LogOut"
                    onLogoutSuccess={this.onSuccess}
                />
            </div>
        );
    }
}

export {SignIn, SignOut};