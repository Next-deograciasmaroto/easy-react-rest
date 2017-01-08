var express = require('express')
var data = require('./data.js')


var app = express()

var router = express.Router()

router.get('/companies', function(req, res) {
  res.json({ message: 'hola!' })
})

app.use('/api/v1', router)

var server = app.listen(8000, function() {
  var host = 'localhost'
  var port = server.address().port

  console.log('Listening on http://%s:%s', host, port);
})
