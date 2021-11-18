const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const fs = require('fs');

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

app.post('/signin', (req, res) => {
    let info = req.body; // user dât from frontend
    const filename = '../client/src/data/user.json';
    let file = fs.readFileSync(filename, {encoding: "utf8"});
    let cont = JSON.parse(file);
    for (let i = 0; i < cont.length; i++) {
        if (info["username"] === cont[i]["username"]) {
            if (bcrypt.compare(info["password"], cont[i]["password"])) {
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

app.post('/signup', (req, res) => {
    const filename = '../client/src/data/user.json';
    let info = req.body; // user data from frontend
    let file = fs.readFileSync(filename, {encoding: "utf8"}); // read file
    let cont = JSON.parse(file);
    for (let i = 0; i < cont.length; i++) {
        var data = cont[i];
        if (data["email"] === info["email"]) {
            console.log("Duplicated");
            res.send({succ: false});
            return;
        }
    }
    let fullname = info["fullname"];
    let email = info["email"];
    let password = info["password"];
    let name_split = fullname.split(" ");
    let lname = name_split[0]; // Last name
    let fname = name_split[1]; // First name
    let count = 2;
    while (name_split[count] != null) { // Add remains to first name
        fname += " " + name_split[count];
        count++;
    }
    let username = email.split("@")[0]; // username
    password = bcrypt.hashSync(password, 10);
    let user_data = {
        "fname": fname,
        "lname": lname,
        "username": username,
        "password": password,
        "phone": "",
        "email": email,
        "role": "1",
        "avatar": ""
    };
    cont.push(user_data);
    fs.writeFileSync(filename, JSON.stringify(cont), {encoding: "utf8"}); // write file
    res.send({succ: true});
});

app.post('/change-info', (req, res) => {
    const filename = '../client/src/data/user.json';
    let info = req.body;
    let file = fs.readFileSync(filename, {encoding: "utf8"});
    let cont = JSON.parse(file);
    for (let i = 0; i < cont.length; i++) {
        var data = cont[i];
        if (data["email"] === info["email"]) {
            res.send({
                succ: true,
                info: {
                    "username": data["username"],
                    "lname": data["lname"],
                    "fname": data["fname"],
                    "email": data["email"],
                    "phone": data["phone"]
                }
            });
            return;
        }
    }
    res.send({succ: false});
});

app.get('/api/news', (req, res) => {
    var sql = "SELECT * FROM doctor";
    connection.query(sql, function(err, results) {
      if (err) throw err;
      res.json({news: results});
    });
});

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
/*

app.use(function(req, res, next) {
    res.status(404).send('<h1>Nothing found</h1>');
});
*/