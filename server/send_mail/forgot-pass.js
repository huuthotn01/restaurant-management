var nodemailer = require('nodemailer');
var fs = require('fs');
var util = require('util');

async function forgotPass(protocol, host, username, email) {
    let html_content = fs.readFileSync('./send_mail/forgot-pass.html');
    html_content = html_content.toString();
    let resetpass_link = protocol + "://" + host + "/reset_pass/";
    let output = util.format(html_content, username, '', resetpass_link, resetpass_link);

    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'yellowbee.pos@gmail.com',
            pass: 'yellowbeeJaCac'
        }
    });

    let mainOptions = {
        from: "Aprycot",
        to: email,
        subject: 'Aprycot: Đặt lại mật khẩu',
        text: 'Đặt lại mật khẩu',
        html: output
    }

    transporter.sendMail(mainOptions, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Info: ", info);
            console.log("Message sent.");
        }
    });
}

module.exports = forgotPass;