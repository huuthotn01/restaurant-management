import React from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import $ from 'jquery';
import { Switch, Redirect } from 'react-router-dom';
import { LoginContext } from '../../SharedComponent/LoginContext';

class ForgotPass extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(e) {
        e.preventDefault();
        let user_data = {
            email: $("#email").val().trim(),
        };
        const response = await fetch('/forgot-pass', {
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
            $("#forgot-pass-form").trigger("reset");
            $("#forgot-pass-alert").css("display", "block");
            $("#forgot-pass-warning").css("display", "none");
            setTimeout(() => {$("#forgot-pass-alert").css("display", "none");}, 5000);
        } else {
            $("#forgot-pass-warning").css("display", "block");
            $("#forgot-pass-alert").css("display", "none");
            setTimeout(() => {$("#forgot-pass-warning").css("display", "none");}, 5000);
        }
    }

    render() {
        if (this.context.isIn) return (
            <Switch>
                <Redirect to='/home' />
            </Switch>
        );
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
            <Alert id='forgot-pass-alert' variant='info' style={{width: '50%', display: 'none', marginTop: '10px', paddingTop: '10px', paddingBottom: '10px', fontSize: '14px'}} >Đường dẫn đặt lại mật khẩu đã được gửi qua email</Alert>
            <Alert id='forgot-pass-warning' variant='warning' style={{width: '50%', display: 'none', marginTop: '10px', paddingTop: '10px', paddingBottom: '10px', fontSize: '14px'}} >Đặt lại mật khẩu không thành công</Alert>
            </Container>
        );
    }
}

ForgotPass.contextType = LoginContext;

export { ForgotPass };