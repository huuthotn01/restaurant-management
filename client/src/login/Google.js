import React from 'react';
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import {FaGoogle, FaPowerOff} from 'react-icons/fa';

const clientID = '794152986942-bhdijd7jgc8925n3bq9dnulp586kqp0m.apps.googleusercontent.com';

function Login(props) {
    const sendToken = async (tokenId) => {
        const response = await fetch('/gg_auth', {
            method: "POST",
            headers: {
                // 'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer'
            },
            body: JSON.stringify({'tokenId': tokenId})
        });
        const body = await response.json();
        console.log("Res status: ", response.status);
        console.log("Response: ", body);
    };

    const refreshTokenSetup = (res) => {
        let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1;
        const refreshToken = async () => {
            const newAuthRes = await res.reloadAuthResponse();
            refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1;
            console.log('newAuthRes: ', newAuthRes);
            // saveUserToken(newAuthRes.access_token) <--- save new token
            console.log('new auth token: ', newAuthRes.id_token);
            sendToken(newAuthRes.id_token)
            .then(() => {
                setTimeout(refreshToken, refreshTiming);
            });
        };
        setTimeout(refreshToken, refreshTiming);
    };
    
    const onSuccess = (res) => {
        console.log('Login Successed, Current User: ', res.profileObj);
        props.context.updateContext(true, res.profileObj.givenName, res.profileObj.imageUrl);
        sendToken(res.tokenId)
        .then(() => {
                refreshTokenSetup(res);
            }
        );
    };

    const onFailure = (res) => {
        console.log('Login Failed, Response: ', res);
    };

    return (
        <GoogleLogin
            render={renderProps => (<FaGoogle className='socialNetsIcon' style={{marginTop: 0 + 'px'}} onClick={renderProps.onClick} disabled={renderProps.disabled} />)}
            clientId={clientID}
            buttonText="LogIn"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
        />
    );
}

function Logout(props) {
    const onSuccess = (res) => {
        props.context.updateContext(false, '', '');
        console.log("Logout successfully");
    };

    return (
        <div>
            <GoogleLogout
                render={renderProps => (<FaPowerOff className='socialNetsIcon' style={{marginTop: 0 + 'px'}} onClick={renderProps.onClick} disabled={renderProps.disabled} />)}
                clientId={clientID}
                buttonText="LogOut"
                onLogoutSuccess={onSuccess}
            />
        </div>
    );
}

export {Login, Logout};