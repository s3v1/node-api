var port = process.env.PORT || 8080
var express = require('express')
var app = express()
console.log('init')

app.get('/', function (req, res) {
  res.end('Hello World')
})

var server = app.listen(port)

var package_json = require('./package.json')
console.log(package_json.name + ' server started on port ' + server.address().port)

/*
http://www.marcusoft.net/2014/02/mnb-express.html
http://www.marcusoft.net/2014/02/mnb-supertest.html

git config credential.helper 'cache --timeout=30000';git pull; git add -A :/; git commit -m "sync"; git push
*/
