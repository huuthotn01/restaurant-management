const express = require('express');
const cookieParser = require('cookie-parser');
const sessions = require('express-session');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const send_mail = require('./send_mail/confirm-reser');
const cors = require('cors');

const one_day = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "aprycotsecretkeyforsession",
    saveUninitialized: true,
    cookie: { maxAge: one_day },
    resave: false
}));

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.post('/gg_auth', (req, res) => { // login (signin and signup) with google 
    const gg_auth = require('./google_auth');
    gg_auth(req.body.tokenId).then((response) => {
        console.log("Response from gg_auth: ", response);
        const filename = './data/user.json';
        let file = fs.readFileSync(filename, {encoding: "utf8"});
        let cont = JSON.parse(file);
        let username = response["email"].split("@")[0]; // solit username from email
        for (let i = 0; i < cont.length; i++) {
            if (response["email"] === cont[i]["email"]) {
                let session = req.session;
                session.userid = response["email"];
                console.log("GG auth: ", req.session);
                res.send({info: {
                    "fname": cont[i]["fname"],
                    "lname": cont[i]["lname"],
                    "email": cont[i]["email"],
                    "role": cont[i]["role"],
                    "avatar": cont[i]["avatar"],
                    }
                });
                return;
            }
        }
        let user_data = {
            "fname": response["fname"],
            "lname": response["lname"],
            "username": username,
            "password": "none",
            "phone": "",
            "email": response["email"],
            "role": "1",
            "avatar": response["photoUrl"],
            "activated": true,
            "authenticated": false
        };
        cont.push(user_data);
        fs.writeFileSync(filename, JSON.stringify(cont), {encoding: "utf8"}); // write file
        let session = req.session;
        session.userid = response["email"];
        console.log("GG auth not yet: ", req.session);
        res.send({info: response});
    });
});

app.post('/addCancelTable', (request, response) => {
    const filename = "./data/canceltable.json";
    var data = fs.readFileSync(filename, {encoding: "utf8"});
    var myObject = JSON.parse(data);
      
    let newData = request.body;
    myObject.push(newData);
      
    fs.writeFile(filename, JSON.stringify(myObject), {encoding: "utf8"}, (err) => {
      if (err) throw err;
      console.log("New data added");
    });
});

app.get('/getreservation', (request, response) => {
    const filename = "./data/reservation.json";
    var file = fs.readFileSync(filename, {encoding: "utf8"});
    let cont = JSON.parse(file);
    
    response.send({data: cont})

    
})
app.get('/getcancelreservation', (request, response) => {
    const filename = "./data/canceltable.json";
    var file = fs.readFileSync(filename, {encoding: "utf8"});
    let cont = JSON.parse(file);
    
    response.send({data: cont})

    
})

app.get('/get_order', (req, res) => {
    const orders = JSON.parse(fs.readFileSync('./data/orders.json'));
    console.log(typeof(orders));
    res.json({orders: orders});
});

app.get('/get_order_details', (req, res) => {
    const details = JSON.parse(fs.readFileSync('./data/order_details_2.json'));
    console.log(typeof(details));
    res.json({details: details});
});

app.get('/get_table', (request, response) => {
    const filename = "./data/tables.json";
    var file = fs.readFileSync(filename, {encoding: "utf8"});
    let cont = JSON.parse(file);
    response.send({data: cont})
})

app.get('/get_user', (req, res) => {
    const users = JSON.parse(fs.readFileSync('./data/user.json'));
    console.log(typeof(users));
    res.json({users: users})
})

app.post('/reservation', (request, response) => {
    const filename = "./data/reservation.json";
    var data = fs.readFileSync(filename, {encoding: "utf8"});
    var myObject = JSON.parse(data);
      
    let newData = request.body;
    myObject.push(newData);
      
    fs.writeFile(filename, JSON.stringify(myObject), {encoding: "utf8"}, (err) => {
      if (err) throw err;
      console.log("New data added");
    });
    let quantity = {
        "type2": newData["type2"],
        "type4": newData["type4"],
        "type8": newData["type8"],
        "type12": newData["type12"],
    }
    send_mail(newData["email"], newData["name"], newData["code"], newData["date"], newData["time"], newData["duration"], quantity);
});

app.post('/update_user', (req, res) => {
    try {
        const data = JSON.stringify(req.body, null, 4);
        console.log(data);
    
        fs.writeFileSync('./data/user.json', data, 'utf8');
    
        console.log(`File is written successfully!`);
    
    } catch (err) {
        console.log(`Error writing file: ${err}`);
    }
})

app.post('/forgot-pass', (req, res) => { // forgot pass and resetting pass
    let info = req.body; // user data from frontend
    const filename = './data/user.json';
    let file = fs.readFileSync(filename, {encoding: "utf8"});
    let cont = JSON.parse(file);
    for (let i = 0; i < cont.length; i++) {
        if (info["email"] === cont[i]["email"]) {
            const send_mail = require('./send_mail/forgot-pass');
            send_mail(req.protocol, req.get('host'), cont[i]["username"], cont[i]["email"]);
            res.send({succ: true});
            return;
        }
    }
    res.send({succ: false});
});

app.post('/signin', (req, res) => { // sign in by form
    let info = req.body; // user data from frontend
    const filename = './data/user.json';
    let file = fs.readFileSync(filename, {encoding: "utf8"});
    let cont = JSON.parse(file);
    let email = info["email"];
    for (let i = 0; i < cont.length; i++) {
        if (email === cont[i]["email"]) {
            if (!cont[i]["activated"]) {
                res.send({succ: false});
                return;
            } else if (cont[i]["password"] !== "none" && bcrypt.compareSync(info["password"], cont[i]["password"])) {
                let session = req.session;
                session.userid = email;
                console.log(req.session);
                res.send({
                    succ: true,
                    data: {
                        "fname": cont[i]["fname"],
                        "lname": cont[i]["lname"],
                        "email": cont[i]["email"],
                        "role": cont[i]["role"],
                        "avatar": cont[i]["avatar"],
                    }
                });
                return;
            } else {
                res.send({succ: false});
                return;
            }
        }
    }
    res.send({succ: false});
});

app.post('/signup', (req, res) => { // signup
    const filename = './data/user.json';
    let info = req.body; // user data from frontend
    let file = fs.readFileSync(filename, {encoding: "utf8"}); // read file
    let cont = JSON.parse(file);
    for (let i = 0; i < cont.length; i++) {
        var data = cont[i];
        if (data["email"] === info["email"]) { // account existed
            res.send({succ: false});
            return;
        }
    }
    let fullname = info["fullname"];
    let email = info["email"];
    let password = info["password"];
    let name_split = fullname.split(" ");
    let lname = ''; // Last name
    let fname = ''; // First name
    if (name_split.length === 1) { // name contains one word
        fname = name_split[0];
    } else {
        lname = name_split[0];
        fname = name_split[1];
        let count = 2;
        while (name_split[count] != null) { // Add remains to first name
            fname += " " + name_split[count];
            count++;
        }
    }
    let username = email.split("@")[0]; // username
    const md5 = require('md5');
    const act_id = md5(email);
    console.log("Act id: ", act_id);
    const file_name = './data/user_activation.json';
    let act_file = fs.readFileSync(file_name, {encoding: "utf8"});
    let activation = JSON.parse(act_file);
    let expire_day = new Date();
    expire_day.setDate(expire_day.getDate() + 1);
    activation.push({
        "username": username,
        "activation_id": act_id,
        "expire_day": expire_day
    });
    fs.writeFileSync(file_name, JSON.stringify(activation), {encoding: "utf8"});
    password = bcrypt.hashSync(password, 10);
    let user_data = {
        "fname": fname,
        "lname": lname,
        "username": username,
        "password": password,
        "phone": "",
        "email": email,
        "role": "1",
        "avatar": "",
        "activated": false,
        "authenticated": false
    };
    cont.push(user_data);
    let protocol = req.protocol;
    let host = req.get('host');
    const send_mail = require('./send_mail/acc-activation');
    send_mail(protocol, host, username, email, act_id);
    fs.writeFileSync(filename, JSON.stringify(cont), {encoding: "utf8"}); // write file
    res.send({succ: true});
});

app.post('/get-user-info', (req, res) => { // get user info
    const filename = './data/user.json';
    let info = req.body; // user info from frontend
    let file = fs.readFileSync(filename, {encoding: "utf8"});
    let cont = JSON.parse(file);
    for (let i = 0; i < cont.length; i++) {
        var data = cont[i];
        if (data["email"] === info["email"]) {
            let has_pass = (data["password"] !== "none");
            res.send({
                succ: true,
                info: {
                    "username": data["username"],
                    "lname": data["lname"],
                    "fname": data["fname"],
                    "email": data["email"],
                    "phone": data["phone"],
                },
                "haspass": has_pass
            });
            return;
        }
    }
    res.send({succ: false});
});

app.post('/change-info', (req, res) => { // update changed info
    const filename = './data/user.json';
    let info = req.body; // user info from frontend
    let file = fs.readFileSync(filename, {encoding: "utf8"});
    let cont = JSON.parse(file);
    let count_position = -1;
    for (let i = 0; i < cont.length; i++) {
        var data = cont[i];
        if (data["email"] === info["email"] || (data["phone"] === info["phone"] && data["phone"] !== "" && info["phone"] !== "")) {
            if (data["email"] === req.session.userid) { // not changed
                console.log("Not changed: ", req.session.userid);
                count_position = i;
                continue;
            } else { // changed email or phone duplicated to an existing user
                console.log("Existed: ", req.session.userid);
                res.send({succ: false});
                return;
            }
        }
        if (data["email"] === req.session.userid) {
            console.log("Position: ", req.session.userid);
            count_position = i;
            continue;
        }
    }
    if (count_position === -1) {
        console.log("-1");
        res.send({succ: false});
        return;
    }
    let need_mail = false;
    if (cont[count_position]["email"] !== info["email"]) {
        req.session.userid = info["email"];
        cont[count_position]["email"] = info["email"];
        let username = info["email"].split("@")[0];
        cont[count_position]["username"] = username;
        need_mail = true;
    }
    if (cont[count_position]["phone"] !== info["phone"]) {
        cont[count_position]["phone"] = info["phone"];
        need_mail = true;
    }
    if (need_mail) {
        const send_mail = require('./send_mail/change-info');
        send_mail(cont[count_position]["username"], cont[count_position]["username"], "th??ng tin c?? nh??n");
    }
    if (cont[count_position]["fname"] !== info["fname"]) cont[count_position]["fname"] = info["fname"];
    if (cont[count_position]["lname"] !== info["lname"]) cont[count_position]["lname"] = info["lname"];
    fs.writeFileSync(filename, JSON.stringify(cont), {encoding: "utf8"}); // write file
    res.send({
        succ: true,
        info: {
            username: cont[count_position]["username"],
            lname: cont[count_position]["lname"],
            fname: cont[count_position]["fname"],
            email: cont[count_position]["email"],
            phone: cont[count_position]["phone"]
        }
    });
});

app.post('/change-password', (req, res) => { // update changed password
    const filename = './data/user.json';
    let info = req.body; // user info from frontend
    let file = fs.readFileSync(filename, {encoding: "utf8"});
    let cont = JSON.parse(file);
    let email = req.session.userid;
    for (let i = 0; i < cont.length; i++) {
        if (email === cont[i]["email"]) {
            if (cont[i]["password"] === "none" || bcrypt.compareSync(info["oldpass"], cont[i]["password"])) {
                cont[i]["password"] = bcrypt.hashSync(info["newpass"], 10);
                fs.writeFileSync(filename, JSON.stringify(cont), {encoding: "utf8"});
                const send_mail = require('./send_mail/change-info');
                send_mail(cont[i]["email"], cont[i]["username"], "m???t kh???u");
                res.send({succ: true});
                return;
            } else {
                res.send({succ: false});
                return;
            }
        }
    }
    res.send({succ: false});
});

app.post('/logout', (req, res) => { // logout
    req.session.destroy();
    res.end();
});

app.all('/payment_momo', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.post('/payment_momo', (req, res, next) => {
    const momo = require('./momo_payment');
    momo(req.protocol, req.get('host'), req.body.amount, res);
});

app.get('/verify', (req, res) => { // verify session
    let session = req.session;
    if (session.userid === undefined) {
        console.log("Username is undefined!");
        res.send({succ: false});
        return;
    } else {
        const filename = './data/user.json';
        let file = fs.readFileSync(filename, {encoding: "utf8"});
        let cont = JSON.parse(file);
        for (let i = 0; i < cont.length; i++) {
            let data = cont[i];
            if (session.userid === data["email"]) {
                console.log("OK");
                res.send({
                    succ: true,
                    data: {
                        "fname": data["fname"],
                        "lname": data["lname"],
                        "email": data["email"],
                        "role": data["role"],
                        "avatar": data["avatar"],
                    }
                });
                return;
            }
        }
        console.log("Not undefined but username not found!");
        res.send({succ: false});
        return;
    }
});

app.get('/activate/:id' , (req, res) => { // activate account
    let act_id = req.params.id;
    const filename = './data/user_activation.json';
    let file = fs.readFileSync(filename, {encoding: "utf8"});
    let cont = JSON.parse(file); // info about user activation id
    let time_now = new Date();
    for (let i = 0; i < cont.length; i++) {
        if (cont[i]["activation_id"] === act_id) {
            let saved_date = new Date(cont[i]["expire_day"]);
            if (saved_date >= time_now) { // check today with day created account
                const file_name = './data/user.json';
                let file_cont = fs.readFileSync(file_name, {encoding: "utf8"});
                let content = JSON.parse(file_cont); // user info
                for (let j = 0; j < content.length; j++) {
                    if (content[j]["username"] === cont[i]["username"]) {
                        content[j]["activated"] = true;
                        cont.splice(i, 1);
                        fs.writeFile(file_name, JSON.stringify(content), {encoding: "utf8"}, () => {});
                        fs.writeFile(filename, JSON.stringify(cont), {encoding: "utf8"}, () => {});
                        res.send("<b>Th??nh c??ng</b>");
                        return;
                    }
                }
                res.send("<b>Kh??ng th??nh c??ng</b>");
                return;
            } else {
                let deleted_username = cont[i]["username"];
                cont.splice(i, 1);
                fs.writeFile(filename, JSON.stringify(cont), {encoding: "utf8"}, () => {});
                const file_name = './data/user.json';
                let file_cont = fs.readFileSync(file_name, {encoding: "utf8"});
                let content = JSON.parse(file_cont); // user info
                for (let j = 0; j < content.length; j++) {
                    if (content[j]["username"] === deleted_username) {
                        content.splice(j, 1);
                        fs.writeFile(file_name, JSON.stringify(content), options={encoding: "utf8"}, () => {});
                        res.send("<b>???? qu?? th???i h???n k??ch ho???t t??i kho???n</b>");
                        return;
                    }
                }
                res.send("<b>Kh??ng th??nh c??ng</b>");
                return;
            }
        }
    }
    res.send("<b>Kh??ng th??nh c??ng</b>");
    return;
});

app.use(express.static(path.join(__dirname, '../frontend/build'))); // root ('/')

app.get('*', function(req, res) { // other routes not defined above
    console.log("Protocol: ", req.protocol);
    console.log("Host: ", req.get("host"));
    console.log("Original URL: ", req.originalUrl);
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});

app.use(function(req, res, next) {
    res.status(404).send('<h1>Nothing found</h1>');
});
