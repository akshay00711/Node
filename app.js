const http = require('http');

//const routes =  = require('./routes');
const {handler,someText} = require('./routes');

//console.log(routes.someText);
console.log(someText);
//const server = http.createServer(routes.handler);
const server = http.createServer(handler);

server.listen(3000);
