var http = require('http'); // 1 - Import Node.js core module
var bunyan = require('bunyan');
var log = bunyan.createLogger({
    name: 'server',
    streams: [
        {
            level: 'debug',
            path: 'C:/code/node_server/logs/appError.log' // log DEBUG and above to a file
        },
        {
            level: 'error',
            path: 'C:/code/node_server/logs/appError.log' // log ERROR and above to a file
        }
    ]
    });



log.info('This is Logging');

var server = http.createServer(function (req, res) {   // 2 - creating server
    //handle incomming requests here..
    if (req.url == '/data') { //check the URL of the current request
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ message: "Hello World"}));  
        res.end();  
    }
    
    if (req.url == '/') { //check the URL of the current request
        
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content    
        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end();
    
    }
    else if (req.url == "/student") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is student Page.</p></body></html>');
        res.end();
    
    }
    else if (req.url == "/admin") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is admin Page.</p></body></html>');
        res.end();
    
    }
    else
        res.end('Invalid Request!');
        

});

server.listen(5000); //3 - listen for any incoming requests
module.exports = log;

console.log('Node.js web server at port 5000 is running..')
