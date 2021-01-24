const { Schema, model } = require("mongoose")

let contactSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 30
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 30
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 30
    }
})

const Contact = model('Contact', contactSchema)
module.exports = Contact