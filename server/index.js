/* Node Entry Point */

const express = require('express') //Add ExpressJS
const app = express(); //create an Express wrapper

app.listen(8080); //Initiate server

app.use(express.static('client'));  //Serve files from the 'client' dir