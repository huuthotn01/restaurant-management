var nodemailer = require('nodemailer');
var fs = require('fs');
var util = require('util');

var html_content = fs.readFileSync('./index.html');
html_content = html_content.toString();
var output = util.format(html_content, 'GCAbyss', '', 'yellow-bee.herokuapp.com', 'yellow-bee.herokuapp.com');

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'yellowbee.pos@gmail.com',
        pass: 'yellowbeeJaCac'
    }
});

var mainOptions = {
    from: "Yellow Bee",
    to: 'cat01697351001@gmail.com',
    subject: '[YELLOW BEE] KÍCH HOẠT TÀI KHOẢN',
    text: 'Message from YELLOW BEE',
    html: output
}

transporter.sendMail(mainOptions, (err, info) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Infp: ", info);
        console.log("Message sent.");
    }
});