import React from 'react';
import User from '../../data/user.json';
var bcrypt = require('bcryptjs');

function getInfo(email) {
    
}

function UpdateInfo(username, info) {
    for (let i = 0; i < User.length; i++) {
        if (User[i]["username"] === username) {
            User[i] = info;
            return true;
        }
    }
    return false;
}

export { UpdateInfo }