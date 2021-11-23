const { v1: uuidv1 } = require('uuid');
const crypto = require('crypto');

var partnerCode = "MOMOP66L20211116"
var accessKey = "WkefdMLZj1z7usZG"
var serectkey = "ZNXrhfRVGnQu6dI0WlM5AqWt1hlIzyfW"
var orderInfo = "Dịch vụ Aprycot"
var returnUrl = "http://localhost:5000/success"
var notifyurl = "https://callback.url/notify"
var amount = '1000'
var orderId = uuidv1()
var requestId = uuidv1()
var requestType = "captureMoMoWallet"
var extraData = "merchantName=;merchantId="
var rawSignature = "partnerCode=" + partnerCode + "&accessKey=" + accessKey + "&requestId=" + requestId + "&amount=" + amount + "&orderId=" + orderId + "&orderInfo=" + orderInfo + "&returnUrl=" + returnUrl + "&notifyUrl=" + notifyurl + "&extraData=" + extraData
var signature = crypto.createHmac('sha256', serectkey)
    .update(rawSignature)
    .digest('hex');

var body = JSON.stringify({
    partnerCode: partnerCode,
    accessKey: accessKey,
    requestId: requestId,
    amount: amount,
    orderId: orderId,
    orderInfo: orderInfo,
    returnUrl: returnUrl,
    notifyUrl: notifyurl,
    extraData: extraData,
    requestType: requestType,
    signature: signature,
});

var options = {
    hostname: 'payment.momo.vn',
    port: 443,
    path: '/gw_payment/transactionProcessor',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body)
    }
};

var req = https.request(options, (res) => {
    console.log(`Status: ${res.statusCode}`);
    console.log(`Headers: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (body) => {
        console.log('Body');
        console.log(body);
        console.log('payURL');
        console.log((JSON.parse(body).payUrl));
        var a = JSON.parse(body).payUrl
        console.log(String(a))
        respon.redirect(a)
    });

    // res.on('end', () => {
    //     console.log('No more data in response.');
    // });
});
req.write(body);
req.end();