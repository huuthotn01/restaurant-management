var nodemailer = require('nodemailer');
var fs = require('fs');
var util = require('util');

var html_content = fs.readFileSync('./acc-activation.html');
html_content = html_content.toString();
var output = util.format(html_content, 'huuthotn01', '', 'yellow-bee.herokuapp.com', 'yellow-bee.herokuapp.com');

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'yellowbee.pos@gmail.com',
        pass: 'yellowbeeJaCac'
    }
});

var mainOptions = {
    from: "Yellow Bee",
    to: 'huuthotn01@gmail.com',
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