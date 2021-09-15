const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));

/*
app.get('/', function(req, res) {
    res.redirect(301, '/home');
    console.log("Root");
});

app.get('/home', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
});

app.use(function(req, res, next) {
    res.status(404).send('<h1>Nothing found</h1>');
});
*/