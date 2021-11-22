const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const mysql = require('mysql');
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

app.get('/get_user', (req, res) => {
    const users = JSON.parse(fs.readFileSync('../client/src/data/user.json'));
    console.log(typeof(users));
    res.json({users: users})
})

app.post('/update_user', (req, res) => {
    try {
        const data = JSON.stringify(req.body, null, 4);
        console.log(data);
    
        fs.writeFileSync('./client/src/data/user.json', data, 'utf8');
    
        console.log(`File is written successfully!`);
    
    } catch (err) {
        console.log(`Error writing file: ${err}`);
    }
})

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
app.get('/home', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
});

app.use(function(req, res, next) {
    res.status(404).send('<h1>Nothing found</h1>');
});
*/