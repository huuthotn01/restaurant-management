import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import $ from 'jquery';
import { LoginContext } from '../../SharedComponent/LoginContext';

class ChangeInfoPass extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(e) {
        e.preventDefault();
        let oldpass = $("#old-pass").val().trim();
        let newpass = $("#new-pass").val().trim();
        let renewpass = $("#renew-pass").val().trim();
        if (newpass !== renewpass) {
            $("#pass-alert").css("display", "none");
            $("#pass-warning").css("display", "block");
            setTimeout(() => {$("#pass-warning").css("display", "none");}, 5000);
        } else {
            let user_data = {
                oldpass: oldpass,
                newpass: newpass
            };
            const response = await fetch('/change-password', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer'
                },
                body: JSON.stringify(user_data)
            });
            if (response.status !== 200) console.log("Error occurred!");
            const body = await response.json();
            if (body.succ) {
                $("#pass-form").trigger("reset");
                $("#pass-alert").css("display", "block");
                $("#pass-warning").css("display", "none");
                setTimeout(() => {$("#pass-alert").css("display", "none");}, 5000);
            } else {
                $("#pass-warning").css("display", "block");
                $("#pass-alert").css("display", "none");
                setTimeout(() => {$("#pass-warning").css("display", "none");}, 5000);
            }
        }
    }

    render() {
        return (
        <>
            <Form id='pass-form' onSubmit={this.onSubmit}>
                <Form.Group>
                    <Form.Label>{this.context.lang === "vi" ? "M???t kh???u c??" : "Old password"}</Form.Label>
                    <Form.Control id="old-pass" type="password" disabled={!this.props.haspass} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>{this.context.lang === "vi" ? "M???t kh???u m???i" : "New password"}</Form.Label>
                    <Form.Control id="new-pass" type="password" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>{this.context.lang === "vi" ? "Nh???p l???i m???t kh???u m???i" : "Retype new password"}</Form.Label>
                    <Form.Control id="renew-pass" type="password" />
                </Form.Group>
                <Button type='submit' style={{backgroundColor: "#F09A61", color: "black", width: "100%"}}>
                    <span style={{textTransform: 'none', fontFamily: 'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'}} >
                        {this.context.lang === "vi" ? "Thay ?????i m???t kh???u" : "Change password"}
                    </span>
                </Button>
            </Form>
            <Alert id='pass-alert' variant='info' style={{display: 'none', marginTop: '10px', paddingTop: '10px', paddingBottom: '10px', fontSize: '14px'}} >
                {this.context.lang === "vi" ? "?????i m???t kh???u th??nh c??ng" : "Change password successfully"}
            </Alert>
            <Alert id='pass-warning' variant='warning' style={{display: 'none', marginTop: '10px', paddingTop: '10px', paddingBottom: '10px', fontSize: '14px'}} >
                {this.context.lang === "vi" ? "?????i m???t kh???u kh??ng th??nh c??ng" : "Change password unsuccessfully"}
            </Alert>
        </>
        );
    }
}

ChangeInfoPass.contextType = LoginContext;

export { ChangeInfoPass };