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

app.post('/change-info', (req, res) => {
    console.log("Change Info: ", req.body);
    res.end();
});

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
*/

app.use(function(req, res, next) {
    res.status(404).send('<h1>Nothing found</h1>');
});
