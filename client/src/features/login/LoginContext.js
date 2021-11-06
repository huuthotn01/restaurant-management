import React from 'react';

export const loginInfo = {
	isIn: false,
	fName: '',
	avatarURL: ''
};
  
export const LoginContext = React.createContext({
	isIn: loginInfo.isIn,
	fName: loginInfo.fName,
	avatarURL: loginInfo.avatarURL,
	updateContext: () => {},
});