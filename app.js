const http = require('http');

function rqListner(req, res){
    console.log('req')
}

http.createServer(rqListner);