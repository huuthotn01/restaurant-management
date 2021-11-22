import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import $ from 'jquery';

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
                <Form.Label>Mật khẩu cũ</Form.Label>
                    <Form.Control id="old-pass" type="password" disabled={!this.props.haspass} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Mật khẩu mới</Form.Label>
                    <Form.Control id="new-pass" type="password" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Nhập lại mật khẩu mới</Form.Label>
                    <Form.Control id="renew-pass" type="password" />
                </Form.Group>
                <Button type='submit' style={{backgroundColor: "#F09A61", color: "black", width: "100%"}}>
                    <span style={{textTransform: 'none', fontFamily: 'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'}} >
                        Thay đổi mật khẩu
                    </span>
                </Button>
            </Form>
            <Alert id='pass-alert' variant='info' style={{display: 'none', marginTop: '10px', paddingTop: '10px', paddingBottom: '10px', fontSize: '14px'}} >Đổi mật khẩu thành công</Alert>
            <Alert id='pass-warning' variant='warning' style={{display: 'none', marginTop: '10px', paddingTop: '10px', paddingBottom: '10px', fontSize: '14px'}} >Đổi mật khẩu không thành công</Alert>
        </>
        );
    }
}

export { ChangeInfoPass };