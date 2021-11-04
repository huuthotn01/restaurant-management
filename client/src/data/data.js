var fs = require('fs');

var file = fs.readFileSync('./data.json');
var content = JSON.parse(file);
for (var i = 0; i < 20; i++) {
    content[i]["email"] = content[i]["username"] + "@gmail.com";
}
fs.writeFileSync('./data.json', JSON.stringify(content));