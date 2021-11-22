const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'NKGC@24.11.2001',
    database: 'pharmacy'
  });

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/gg_auth', (req, res) => {
    const gg_auth = require('./google_auth');
    console.log("Token: ", req.body.tokenId);
    gg_auth(req.body.tokenId).then((response) => {
        console.log("Response from gg_auth: ", response);
        // res.setHeader('Content-Type', 'application/json');
        // res.write(JSON.stringify({body: 'Hello'}));
        // res.end(JSON.stringify({body: 'Hello'}));
        res.send({info: response});
    });
});

app.get('/get_user', (req, res) => {
    const users = JSON.parse(fs.readFileSync('../client/src/data/user.json'));
    console.log(typeof(users));
    res.json({users: users})
})

app.post('/update_user', (req, res) => {
    try {
        const data = JSON.stringify(req.body, null, 4);
        console.log(data);
    
        fs.writeFileSync('../client/src/data/user.json', data, 'utf8');
    
        console.log(`File is written successfully!`);
    
    } catch (err) {
        console.log(`Error writing file: ${err}`);
    }
})

app.post('/forgot-pass', (req, res) => { // forgot pass and resetting pass
    let info = req.body; // user data from frontend
    const filename = '../client/src/data/user.json';
    let file = fs.readFileSync(filename, {encoding: "utf8"});
    let cont = JSON.parse(file);
    for (let i = 0; i < cont.length; i++) {
        if (info["email"] === cont[i]["email"]) {
            // TODO send mail
            res.send({succ: true});
            return;
        }
    }
    res.send({succ: false});
});

app.post('/signin', (req, res) => { // sign in by form
    let info = req.body; // user data from frontend
    const filename = '../client/src/data/user.json';
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
    const filename = '../client/src/data/user.json';
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
    const act_id = md5(username);
    console.log("Act id: ", act_id);
    const file_name = '../client/src/data/user_activation.json';
    let act_file = fs.readFileSync(file_name, {encoding: "utf8"});
    let activation = JSON.parse(act_file);
    let expire_day = new Date();
    expire_day.setDate(expire_day.getDate() + 1);
    activation.push({
        "username": username,
        "activation_id": act_id,
        "expire_day": expire_day
    });
});

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
/*
app.get('/home', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
});

app.use(function(req, res, next) {
    res.status(404).send('<h1>Nothing found</h1>');
});
*/