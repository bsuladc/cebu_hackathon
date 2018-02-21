/**
 * http://usejsdoc.org/
 */
console.log("bryan ceniza");

var http = require('http')

http.createServer(onRequest).listen(8888);
console.log('Server has started');

function onRequest(request, response){
  response.writeHead(200);
  response.write('Hello Noders2');
  response.end();
}