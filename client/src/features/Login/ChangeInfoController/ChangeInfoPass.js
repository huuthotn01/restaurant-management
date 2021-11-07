import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import $ from 'jquery';

class ChangeInfoPass extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        $("#pass-form").trigger("reset");
        $("#pass-alert").css("display", "block");
    }

    render() {
        return (
        <>
            <Form id='pass-form' onSubmit={this.onSubmit}>
            <Form.Group>
                <Form.Label>Mật khẩu cũ</Form.Label>
                    <Form.Control id="old-pass" type="password" />
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
            <Alert id='pass-alert' variant='info' style={{display: 'none', marginTop: '5px', paddingTop: '10px', paddingBottom: '10px', fontSize: '14px'}} >Đổi mật khẩu thành công</Alert>
        </>
        );
    }
}

export { ChangeInfoPass };