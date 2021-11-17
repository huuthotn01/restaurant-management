import React from 'react';
import User from '../../data/user.json';
var bcrypt = require('bcryptjs');

function ValidateLogin(username, password) {
    for (let i = 0; i < User.length; i++) {
        var data = User[i];
        if (data["username"] === username) {
            // if (bcrypt.compare(password, data["password"])) 
            if (data["password"] === password) {
                return {
                    "fname": data["fname"],
                    "lname": data["lname"],
                    "email": data["email"],
                    "role": data["role"],
                    "url": data["avatar"],
                };
            } else return false;
        } 
    }
    return false;
}

function ValidateSignUp(fullname, email, password) {
    for (let i = 0; i < User.length; i++) {
        var data = User[i];
        if (data["username"] === email) return false;
         {
            // if (bcrypt.compare(password, data["password"])) 
            if (data["password"] === password) {
                return {
                    "fname": data["fname"],
                    "lname": data["lname"],
                    "email": data["email"],
                    "role": data["role"],
                    "url": data["avatar"],
                };
            } else return false;
        } 
    }
    return false;
}

export { ValidateLogin, ValidateSignUp }