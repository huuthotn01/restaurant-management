import React from 'react';

export const loginInfo = {
	isIn: false,
	fName: '',
	lName: '',
	email: '',
	role: '',
	avatarURL: ''
};
  
export const LoginContext = React.createContext({
	isIn: loginInfo.isIn,
	fName: loginInfo.fName,
	lName: loginInfo.lName,
	email: loginInfo.email,
	role: '',
	avatarURL: loginInfo.avatarURL,
	updateContext: () => {},
});