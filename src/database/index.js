const mongoose = require('mongoose');

mongoose.connect('mongodb://lacalhost/noderest', { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;
