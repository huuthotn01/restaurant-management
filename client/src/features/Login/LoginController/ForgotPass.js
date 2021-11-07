import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import $ from 'jquery';
import { Alert } from 'react-bootstrap';

class ForgotPass extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        $("#forgot-pass-form").trigger("reset");
        $("#forgot-pass-alert").css("display", "block");
    }

    render() {
        return (
            <Container style={{marginTop: "30px", display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Form id='forgot-pass-form' style={{width: '50%'}} onSubmit={this.onSubmit}>
            <Form.Group>
                <p><strong>Nhập địa chỉ email của bạn để nhận đường dẫn đặt lại mật khẩu: </strong></p>
                <Form.Control id="email" type="email" placeholder='Email' required />
                </Form.Group>
                <Button type='submit' style={{backgroundColor: "#F09A61", color: "black", width: "100%"}}>
                    <span style={{textTransform: 'none', fontFamily: 'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'}} >
                        Gửi đường dẫn đặt lại mật khẩu
                    </span>
                </Button>
            </Form>
            <Alert id='forgot-pass-alert' variant='info' style={{width: '50%', display: 'none', marginTop: '10px', paddingTop: '10px', paddingBottom: '10px', fontSize: '14px'}} >Đặt lại mật khẩu được nhận qua email</Alert>
            </Container>
        );
    }
}

export { ForgotPass };