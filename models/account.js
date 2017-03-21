let mongoose = require('mongoose');

//this is needed to tell the app this model is for managing user accounts; it is not a regular model like book
let plm = require('passport-local-mongoose');
let findOrCreate = require('mongoose-findorcreate');
//create the schema  username and password are automatically included
let js_accountSchema = new mongoose.Schema({
	username: String,
	email: String,
    password: String

}, { collection : 'js_users' });

//enable plm & findOrCreate on this model
js_accountSchema.plugin(plm);
js_accountSchema.plugin(findOrCreate);

//make the model public
module.exports = mongoose.model('JSUsers', js_accountSchema);