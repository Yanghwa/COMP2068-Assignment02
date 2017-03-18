let mongoose = require('mongoose');

//create the schema  messages from the customer
let js_messageSchema = new mongoose.Schema({}, { collection : 'js_messages' });

//make the model public
module.exports = mongoose.model('JSMessages', js_messageSchema);