const mongoose = require('mongoose');
// const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost/ObjectDetection';
mongoose.connect(url);
module.exports = mongoose;