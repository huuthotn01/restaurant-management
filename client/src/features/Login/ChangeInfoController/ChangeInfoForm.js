import React from 'react';
import { Form, Button } from 'react-bootstrap';

class ChangeInfoForm extends React.Component {
    render() {
        return (
            <Form>
            <Form.Group>
                <Form.Label>Tên tài khoản</Form.Label>
                    <Form.Control id="username" type="text" disabled />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Họ</Form.Label>
                    <Form.Control id="l-name" type="text" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Tên</Form.Label>
                    <Form.Control id="f-name" type="text" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control id="email" type="email" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Điện thoại</Form.Label>
                    <Form.Control id="phone" type="text" pattern="[0-9]{10}" />
                </Form.Group>
                <Button style={{backgroundColor: "#F09A61", color: "black", width: "100%"}}>
                    <span style={{textTransform: 'none', fontFamily: 'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'}} >
                        Chỉnh sửa thông tin
                    </span>
                </Button>
            </Form>
        );
    }
}

export { ChangeInfoForm };