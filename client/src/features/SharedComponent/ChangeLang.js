import React from 'react';
import { Dropdown, ButtonGroup } from 'react-bootstrap';
import { FaLanguage } from 'react-icons/fa';
import { LoginContext } from './LoginContext';

class Language extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle variant='success' style={{marginLeft: "5px", paddingTop: "0px", marginTop: "0px", paddingBottom: "0px", backgroundColor: "transparent", color: "black", borderColor: "transparent"}} >
                    <span style={{textTransform: 'none', fontFamily: 'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"', fontSize: "14px"}}>
                        <FaLanguage /> Ngôn ngữ
                    </span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item eventKey="1">
                        <FaLanguage className='socialNetsIcon' style={{marginRight: "0px"}} /> <span id="edit-text" style={{fontFamily: 'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"', fontSize: "14px"}} >
                        Tiếng Việt</span>
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="2" >
                        <FaLanguage className='socialNetsIcon' style={{marginRight: "0px"}} /> <span id="edit-text" style={{fontFamily: 'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"', fontSize: "14px"}} >
                        English</span>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}

Language.contextType = LoginContext;

export { Language }