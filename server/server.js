var express = require('express')
var data = require('./data.js')


var app = express()
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


var router = express.Router()

router.get('/companies', function(req, res) {
  res.json(data.companies)
})

app.use('/api/v1', router)

var server = app.listen(8000, function() {
  var host = 'localhost'
  var port = server.address().port

  console.log('Listening on http://%s:%s', host, port);
})
