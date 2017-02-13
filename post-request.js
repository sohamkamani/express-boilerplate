var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/', function (req, res) {
  res.send('Post request body is : ' + JSON.stringify(req.body))
})

app.listen(3000, function () {
  console.log('App listening on http://localhost:3000/')
})
