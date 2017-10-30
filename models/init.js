var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:32769/firstapp', {
  useMongoClient: true
});