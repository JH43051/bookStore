/* Node Entry Point */

//Declare globals
const http = require('http');  //Add node-native http dependency
const server = http.createServer(); //Create node server instance

server.listen(8080);  //Initiate server

//Event listener for HTTP requests
server.on('request', (req, res) => {
	res.write("Hello Node!"); //Begins stream
	res.end(); //Ends stream
});
