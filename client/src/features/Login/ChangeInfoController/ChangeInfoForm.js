import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import $ from 'jquery';

class ChangeInfoForm extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        $("#info-form").trigger("reset");
        $("#info-alert").css("display", "block");
    }

    render() {
        return (
            <>
            <Form id='info-form' onSubmit={this.onSubmit}>
            <Form.Group>
                <Form.Label>Tên tài khoản</Form.Label>
                    <Form.Control id="username" value='huutho' type="text" disabled />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Họ</Form.Label>
                    <Form.Control id="l-name" value='Tran Nguyen' type="text" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Tên</Form.Label>
                    <Form.Control id="f-name" value='Huu Tho' type="text" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control id="email" value='huuthotn01@gmail.com' type="email" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Điện thoại</Form.Label>
                    <Form.Control id="phone" value='0256894578' type="text" pattern="[0-9]{10}" />
                </Form.Group>
                <Button type='submit' style={{backgroundColor: "#F09A61", color: "black", width: "100%"}}>
                    <span style={{textTransform: 'none', fontFamily: 'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'}} >
                        Chỉnh sửa thông tin
                    </span>
                </Button>
            </Form>
            <Alert id='info-alert' variant='info' style={{display: 'none', marginTop: '10px', paddingTop: '10px', paddingBottom: '10px', fontSize: '14px'}} >Đổi thông tin thành công</Alert>
            </>
        );
    }
}

export { ChangeInfoForm };