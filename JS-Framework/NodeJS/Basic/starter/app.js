var http = require('http');
var dt = require('./dateModule');
var url = require('url');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('The date and time are currently: ' + dt.myDateTime());
    var q = url.parse(req.url, true).query;
    var txt = q.year + ' ' + q.month;
    res.write(`<br>${req.url}`);
    res.write(`<br>${txt}`);
    res.end();
}).listen(4000);