const express = require('express');
const next = require('next');

var cors = require('cors');
// const { parse } = require('url');
// const { createReadStream } = require('fs');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

console.log("NODE_ENV=", process.env.NODE_ENV);
// disabling console.log
console.log = function(){};

app.prepare()
.then(() => {
  const server = express();
  // server.use(cors());
  server.use(function (req, res, next) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      next();
  });

  server.get('/p/:id', (req, res) => {
    const actualPage = '/post'
    const queryParams = { title: req.params.id, pathname: req.pathname }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  var port = 3000;
  var listener = server.listen(port, '127.0.0.1', function() {
      console.log("Listening on port " + listener.address().port);
  });

})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})