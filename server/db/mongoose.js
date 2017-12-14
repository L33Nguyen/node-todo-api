const mongoose = require('mongoose');
//promise third party library
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports={mongoose};
