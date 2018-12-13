/* Node Entry Point */

import express from 'express'; //Add ExpressJS
import serverRender from './render';
import apiRouter from './apiRouter';
const cors = require('cors');

const app = express(); //create an Express wrapper

app.listen(8080); //Initiate server

app.use(cors());

app.use(express.static('client'));  //Serve files from the 'client' dir
app.set('view engine', 'ejs');  //Use EJS to dynamically output server string data

app.get('/', (req, res) => {
	res.render('index', {
		//Holds all string data exported in render.js in "content"
		content: ''//serverRender()  
	});
});

//Make the api object useable under the mount point (localhost/api)
app.use('/api', apiRouter);