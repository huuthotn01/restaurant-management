var nodemailer = require('nodemailer');
var fs = require('fs');
var util = require('util');

async function accActivation(username, email, act_id) {
    let html_content = fs.readFileSync('./acc-activation.html');
    html_content = html_content.toString();
    // let activation_link = 'aprycot.herokuapp.com/activate/' + act_id;
    let activation_link = 'localhost:5000/activate/' + act_id;
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