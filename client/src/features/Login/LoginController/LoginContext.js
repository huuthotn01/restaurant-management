import React from 'react';

export const loginInfo = {
	isIn: false,
	fName: '',
	lName: '',
	email: '',
	avatarURL: ''
};
  
export const LoginContext = React.createContext({
	isIn: loginInfo.isIn,
	fName: loginInfo.fName,
	lName: loginInfo.lName,
	email: loginInfo.email,
	avatarURL: loginInfo.avatarURL,
	updateContext: () => {},
});