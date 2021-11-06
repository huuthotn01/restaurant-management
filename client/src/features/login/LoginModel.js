import React from 'react';
import User from '../../data/user.json';

function ValidateLogin(username, password) {
    for (let i = 0; i < User.length; i++) {
        if (User[i]["username"] === username && User[i]["password"] === password) return true;
    }
    return false;
}

export { ValidateLogin }