import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import $ from 'jquery';
import { LoginContext } from '../../SharedComponent/LoginContext';

class ChangeInfoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {
                username: this.props.username,
                lname: this.props.lname,
                fname: this.props.fname,
                email: this.props.email,
                phone: this.props.phone
            },
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({
            info: this.props.info
        });
    }

    async onSubmit(e) {
        e.preventDefault();
        let user_data = {
            username: $("#username").val().trim(),
            lname: $("#l-name").val().trim(),
            fname: $("#f-name").val().trim(),
            email: $("#email").val().trim(),
            phone: $("#phone").val().trim()
        };
        if (user_data.lname !== this.state.info.lname || user_data.fname !== this.state.info.fname || 
            user_data.email !== this.state.info.email || user_data.phone !== this.state.info.phone) {
                const response = await fetch('/change-info', {
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
                this.context.updateContext(true, body.info.fname, body.info.lname, body.info.email, this.context.role, this.context.avatarURL);
                this.setState({
                    info: body.info,
                });
                $("#info-alert").css("display", "block");
                setTimeout(() => {$("#info-alert").css("display", "none");}, 5000);
            } else {
                $("#info-warning").css("display", "block");
                setTimeout(() => {$("#info-warning").css("display", "none");}, 5000);
            }
        }
    }

    render() {
        return (
            <>
            <Form id='info-form' onSubmit={this.onSubmit}>
            <Form.Group>
                <Form.Label>Tên tài khoản</Form.Label>
                    <Form.Control id="username" defaultValue={this.state.info.username} type="text" disabled />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Họ</Form.Label>
                    <Form.Control id="l-name" defaultValue={this.state.info.lname} type="text" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Tên</Form.Label>
                    <Form.Control id="f-name" defaultValue={this.state.info.fname} type="text" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control id="email" defaultValue={this.state.info.email} type="email" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Điện thoại</Form.Label>
                    <Form.Control id="phone" defaultValue={this.state.info.phone} type="text" pattern="[0-9]{10}" />
                </Form.Group>
                <Button type='submit' style={{backgroundColor: "#F09A61", color: "black", width: "100%"}}>
                    <span style={{textTransform: 'none', fontFamily: 'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'}} >
                        Chỉnh sửa thông tin
                    </span>
                </Button>
            </Form>
            <Alert id='info-alert' variant='info' style={{display: 'none', marginTop: '10px', paddingTop: '10px', paddingBottom: '10px', fontSize: '14px'}} >Đổi thông tin thành công</Alert>
            <Alert id='info-warning' variant='warning' style={{display: 'none', marginTop: '10px', paddingTop: '10px', paddingBottom: '10px', fontSize: '14px'}} >Đổi thông tin không thành công</Alert>
            </>
        );
    }
}

ChangeInfoForm.contextType = LoginContext;

export { ChangeInfoForm };