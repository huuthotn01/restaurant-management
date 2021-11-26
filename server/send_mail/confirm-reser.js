var nodemailer = require('nodemailer');
var fs = require('fs');
var util = require('util');

async function confirmReser(email, fullname, code, date, time, duration, quantity) {
    let html_content = fs.readFileSync('./send_mail/confirm-reser.html');
    html_content = html_content.toString();
    let total = 0;
    let table_detail = "";
    if (quantity["type2"] > 0) {
        total += quantity["type2"];
        table_detail += quantity["type2"].toString() + " bàn hai người<br />";
    }
    if (quantity["type4"] > 0) {
        total += quantity["type4"];
        table_detail += quantity["type4"].toString() + " bàn bốn người<br />";
    }
    if (quantity["type8"] > 0) {
        total += quantity["type8"];
        table_detail += quantity["type8"].toString() + " bàn tám người<br />";
    }
    if (quantity["type12"] > 0) {
        total += quantity["type12"];
        table_detail += quantity["type12"].toString() + " bàn mười hai người<br />";
    }
    table_detail = total.toString() + " bàn<br/>" + table_detail;
    let output = util.format(html_content, fullname, code, date, time, duration, table_detail);

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
        subject: 'Aprycot: Xác nhận đặt bàn',
        text: 'Xác nhận đặt bàn',
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

module.exports = confirmReser;