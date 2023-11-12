const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');
const http = require('http');
const https = require('https');
const app = express();
const fgtsRote = require('./src/rotes/fgtsRote');
const { routesUsers } = require('./src/rotes/newUser');



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('common'));
app.use('/user', routesUsers);
app.use('/fgts', fgtsRote);
app.use('/fgts', express.static("dist"));
app.use('/home', express.static("dist"));
app.use('/manage/users', express.static("dist"));
app.use('/', express.static("dist"));


const portHttp = 8011;
const httpServer = http.createServer(app);


httpServer.listen(portHttp, function () {
    console.log("JSON Server is running on " + portHttp);
});


