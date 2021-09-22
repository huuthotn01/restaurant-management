import React from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginButton = (props) => {
    return (
        <Button onClick={props.onClick}>HELLO HIHI YELLOW BEE</Button>
    );
}

export { LoginButton };