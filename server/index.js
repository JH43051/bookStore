/* Node Entry Point */

//Declare globals
const express = require('express') //Add ExpressJS
const app = express(); //create an Express wrapper

app.listen(8080); //Initiate server

app.use(express.static('client'));  //Serves files from the 'client' dir