import React from 'react';

export const LoginContext = React.createContext({
	isIn: false,
	fName: '',
	lName: '',
	email: '',
	role: '',
	avatarURL: '',
	updateContext: () => {},
});