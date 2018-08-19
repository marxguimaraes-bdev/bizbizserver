const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const bizbizserver = express();
const transaction = require('./routes/transaction');

const host = '127.0.0.1';
const port = '3000';

bizbizserver.use(bodyParser.json());
bizbizserver.use(bodyParser.urlencoded({ extended: false}));

bizbizserver.use('/transaction', transaction);

mongoose.connect('mongodb+srv://marx:5wmhPwjkVKpNHDUG@freecluster-112sm.mongodb.net/test?retryWrites=true', { useNewUrlParser: true })
    .then(() => console.log('Database connection successful'))
    .catch((err) => console.error(err));

http.createServer(bizbizserver).listen(port, host, () => {
    console.log(`http server listening at ${host}:${port}`)
});