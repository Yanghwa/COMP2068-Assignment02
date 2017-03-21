//set mongoose to set schema for message
let mongoose = require('mongoose');

//create the schema messages from the customer
let js_messageSchema = new mongoose.Schema({
	name: {
        type: String,
        required: 'Name is required'
    },
    email: {
        type: String,
        required: 'Email is required'
    },
    phone: {
        type: Number,
        min: 0
    },
    message: {
        type: String,
        required: 'Message is required'
    }

}, { collection : 'js_messages' });

//make the model public
module.exports = mongoose.model('JSMessages', js_messageSchema);