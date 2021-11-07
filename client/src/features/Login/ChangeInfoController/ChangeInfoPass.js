import React from 'react';
import { Form, Button } from 'react-bootstrap';

class ChangeInfoPass extends React.Component {
    render() {
        return (
            <Form>
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
                <Button style={{backgroundColor: "#F09A61", color: "black", width: "100%"}}>
                    <span style={{textTransform: 'none', fontFamily: 'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'}} >
                        Thay đổi mật khẩu
                    </span>
                </Button>
            </Form>
        );
    }
}

export { ChangeInfoPass };