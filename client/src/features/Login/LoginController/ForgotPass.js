import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

class ForgotPass extends React.Component {
    render() {
        return (
            <Container style={{marginTop: "30px", display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Form style={{width: '50%'}}>
            <Form.Group>
                <p><strong>Nhập địa chỉ email của bạn để nhận đường dẫn đặt lại mật khẩu: </strong></p>
                <Form.Control id="email" type="email" placeholder='Email' required />
                </Form.Group>
                <Button style={{backgroundColor: "#F09A61", color: "black", width: "100%"}}>
                    <span style={{textTransform: 'none', fontFamily: 'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'}} >
                        Gửi đường dẫn đặt lại mật khẩu
                    </span>
                </Button>
            </Form>
            </Container>
        );
    }
}

export { ForgotPass };