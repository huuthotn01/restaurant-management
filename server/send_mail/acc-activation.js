var nodemailer = require('nodemailer');
var fs = require('fs');
var util = require('util');

async function accActivation(protocol, host, username, email, act_id) {
    let html_content = fs.readFileSync('./send_mail/acc-activation.html');
    html_content = html_content.toString();
    let activation_link = protocol + "://" + host + "/activate/" + act_id;
    console.log(activation_link);
    let output = util.format(html_content, username, '', activation_link, activation_link);

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
        subject: 'Aprycot: Kích hoạt tài khoản của bạn',
        text: 'Kích hoạt tài khoản',
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

module.exports = accActivation;