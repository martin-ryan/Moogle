var mongoose = require('mongoose');

//
// create desired MODEL SCHEMA for USER
var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  useremail: String
});

//
// EXPORT our userSchema MODEL into a MONGOOSE MODEL to be used by a ROUTE
// argument 1 = MONGOOSE convention to auto connect to collection
// argument 2 = Schema model to use for USER MODEL
// argument 3 = actual name of collection in database, specially if MONGOOSE can't automatically connect
module.exports = mongoose.model('User', userSchema, 'users');
