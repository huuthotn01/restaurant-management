var nodemailer = require('nodemailer');
var fs = require('fs');
var util = require('util');

async function changeInfo(email, username, action) {
    let html_content = fs.readFileSync('./send_mail/acc-activation.html');
    html_content = html_content.toString();
    let output = util.format(html_content, username, action);

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
        subject: 'Aprycot: Xác nhận thay đổi thông tin',
        text: 'Xác nhận thay đổi thông tin',
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

module.exports = changeInfo;